import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<{ title: string; body: string } | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const navigate = useNavigate(); // Use navigate hook

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (response?.status === 200) {
          setPost(response.data);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        if (response?.status === 200) {
          setComments(response.data);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchPost();
    fetchComments();
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className='m-4 p-4'>
      <div className='mb-2'>
        <button onClick={goBack} className='rounded-full bg-blue-500 text-white font-medium text-lg px-4 py-2'>
          Back
        </button>
      </div>
      <div className='bg-gray-200 rounded p-4'>
        <h1 className='text-2xl font-bold mb-4'>{post.title}</h1>
        <p className='mb-6'>{post.body}</p>
      </div>

      <h2 className='text-xl font-semibold mb-2'>Comments</h2>
      <div>
        {comments.map(comment => (
          <div key={comment.id} className='mb-4 p-4 border border-gray-300 rounded'>
            <p className='font-bold mb-2'>{comment.name} <span className='text-sm text-gray-600'>({comment.email})</span></p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostDetail;
