// components/VoteButton.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface VoteButtonProps {
  postId: string;
  userId: string;
  initialUpvotes: number;
  initialDownvotes: number;
}

const VoteButton: React.FC<VoteButtonProps> = ({ postId, userId, initialUpvotes, initialDownvotes }) => {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);
  const [vote, setVote] = useState<null | 'UPVOTE' | 'DOWNVOTE'>(null);

  useEffect(() => {
    // Fetch the user's vote for this post
    const fetchUserVote = async () => {
      try {
        const response = await axios.get(`/api/blog/vote/${postId}/${userId}`);
        if (response.data) {
          setVote(response.data.type);
        }
      } catch (error) {
        console.error('Error fetching user vote:', error);
      }
    };

    fetchUserVote();
  }, [postId, userId]);

  const handleVote = async (type: 'UPVOTE' | 'DOWNVOTE') => {
    try {
      const response = await axios.post('/api/blog/vote', {
        userId,
        postId,
        voteType: type,
      });

      if (type === 'UPVOTE') {
        setUpvotes(upvotes + 1);
        if (vote === 'DOWNVOTE') {
          setDownvotes(downvotes - 1);
        }
      } else {
        setDownvotes(downvotes + 1);
        if (vote === 'UPVOTE') {
          setUpvotes(upvotes - 1);
        }
      }

      setVote(type);
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <div>
      <button
        onClick={() => handleVote('UPVOTE')}
        style={{ backgroundColor: vote === 'UPVOTE' ? 'green' : 'grey' }}
      >
        Upvote ({upvotes})
      </button>
      <button
        onClick={() => handleVote('DOWNVOTE')}
        style={{ backgroundColor: vote === 'DOWNVOTE' ? 'red' : 'grey' }}
      >
        Downvote ({downvotes})
      </button>
    </div>
  );
};

export default VoteButton;
