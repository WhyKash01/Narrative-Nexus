import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
    try {
        
        // Extract necessary fields from the request body
        const { postId, userId, voteType } = await req.json();
    
        // Validate the required fields
        if (!postId || !userId || !voteType) {
          return NextResponse.json({ error: 'Missing required fields' }, { status: 400 }) ;
        }
    
        // Check if the post exists
        const post = await prisma.blog.findUnique({ where: { id: postId } });
        if (!post) {
          return NextResponse.json({ error: 'Post not found' }, { status: 404 }) ;
        }
    
        // Check for an existing vote from the same user on the same post
        const existingVote = await prisma.vote.findFirst({ where: { postId, userId } });
    
        if (existingVote) {
          // If the user is changing their vote type, update the vote
          if (existingVote.type !== voteType) {
            const updatedVote = await prisma.vote.update({
              where: { id: existingVote.id },
              data: { type: voteType },
            });
    
            // Adjust the vote count on the post
            await adjustVoteCount(postId, existingVote.type, voteType);
            return NextResponse.json(updatedVote) ;
            
          } else {
            // If the vote type is the same, no need to update
            return NextResponse.json(existingVote) ;
          }
        } else {
          // Create a new vote
          const newVote = await prisma.vote.create({
            data: {
              type: voteType,
              postId,
              userId,
            },
          });
    
          // Update the vote count on the post
          
          await adjustVoteCount(postId, null, voteType);
          return NextResponse.json(newVote) ;
        }
      } catch (error) {
        console.error('Error handling vote:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }) ;

      }
    
  }
  async function adjustVoteCount(postId: number, previousVote: 'UPVOTE' | 'DOWNVOTE' | null, newVote: 'UPVOTE' | 'DOWNVOTE') {
    let increment:number = 0;
    const post=await prisma.blog.findUnique({
        where:{id: postId}
    })
    // Determine the increment based on previous and new votes
    if (previousVote === 'UPVOTE' && post?.vote===1 && newVote === 'DOWNVOTE') {
      increment = -1; // Changing from upvote to downvote
    } else if (previousVote === 'UPVOTE' && post?.vote===0 &&newVote === 'DOWNVOTE') {
        increment = 0;
    } else if (previousVote === 'UPVOTE'&&newVote === 'DOWNVOTE') {
        increment = -2;
    } else if (previousVote === 'DOWNVOTE' && post?.vote===0 && newVote === 'UPVOTE') {
      increment = 1; // Changing from downvote to upvote
    } else if (previousVote === 'DOWNVOTE' && newVote === 'UPVOTE') {
        increment = 2;
    } else if (newVote === 'UPVOTE') {
      increment = 1; // Adding a new upvote
    } else if (newVote === 'DOWNVOTE') {
      increment = -1; // Adding a new downvote
    }
  
    // Update the post's vote count
    await prisma.blog.update({
      where: { id: postId },
      data: {
        vote: {
          increment
        },
      },
    });
  }
  export async function GET(req: NextRequest) {
    try {
        
        // Extract necessary fields from the request body
        const { searchParams } = new URL(req.url);
        const postId = Number(searchParams.get('postId'));
        const userId = Number(searchParams.get('userId'));

    
        // Validate the required fields
        if (!postId || !userId ) {
          return NextResponse.json({ error: 'Missing required fields' }, { status: 400 }) ;
        }
    
        // Check if the post exists
        const post = await prisma.blog.findUnique({ where: { id: postId } });
        if (!post) {
          return NextResponse.json({ error: 'Post not found' }, { status: 404 }) ;
        }
    
        // Check for an existing vote from the same user on the same post
        const existingVote = await prisma.vote.findFirst({ where: { postId, userId } });
    
        if (existingVote) {
          // If the user is changing their vote type, update the vote
          
            return NextResponse.json([{exist: true},existingVote]) ;
            
          
        } else {
          // Create a new vote
          return NextResponse.json([{exist: false},{votes:null}]) ;
        }
      } catch (error) {
        console.error('Error handling vote:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }) ;

      }
  }