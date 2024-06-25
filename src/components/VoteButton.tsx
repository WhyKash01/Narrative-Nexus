// Example frontend vote button component using React and Axios

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { AllPost, exist } from '@/store/atom';
import { inherits } from 'util';
import up from "./../../public/uper.png";
import down from "./../../public/downer.png";
import Image from 'next/image';
interface VoteButtonProps {
  vote: any;
  postId: string;
  userId: string;
  initialVotes: number;
}

const VoteButton: React.FC<VoteButtonProps> = ({ vote,postId, userId, initialVotes }) => {
  const [votes, setVotes] = useState(vote);
  const [posts, setPost]= useRecoilState(AllPost);
  const [Exist, setExist]= useRecoilState<any>(exist)
  const [color, setColor]= useState("")
  const handleVote = async (type: 'UPVOTE' | 'DOWNVOTE') => {
    try {
      const response = await axios.post('/api/blog/vote', {
        postId,
        userId,
        voteType: type,
      }).then((res)=>{
        if(res.data.type=="UPVOTE"&&color!="green"){
          setVotes(votes+1)
        } 
        else if(res.data.type=="DOWNVOTE"&&color!="red"){
          setVotes(votes-1)
        }
      });

    } catch (error) {
      console.error('Error voting:', error);
    }
  };
  
  useEffect( () => {
    const response = axios.get('/api/blog/vote', {
      params: {
        postId,
        userId,
      }
    }).then((res)=>{
      setExist(res)
      console.log(res.data[0].exist)
      if(res.data[0].exist===true){
        if(res.data[1].type=="UPVOTE"){
          setColor("green")
        }
        else{
          setColor("red")
        }
      }
      else{
        setColor("black")
      }
    })
    
  }, [votes])
  
  return (
    <div
    style={{ backgroundColor: color }} className='bg-zinc-700 gap-1 flex items-center hover:bg-zinc-700 text-white font-bold h-8  rounded-full'>
      <button
       className="h-8 w-10 justify-center rounded-full items-center hover:bg-green-700 flex"
        onClick={() => {
          
          handleVote('UPVOTE')}}
        
      >
        <Image className="h-4 w-5 " src={up} alt=""></Image>
      </button>
      {votes}
      <button
        className="h-8 w-10 justify-center rounded-full items-center hover:bg-red-600 flex"
        onClick={() => handleVote('DOWNVOTE')}
        
      >
        <Image className="h-4 w-5 " src={down} alt=""></Image>
      </button>
      {/* {JSON.stringify(Exist.data.exist)} */}
    </div>
  );
};

export default VoteButton;
