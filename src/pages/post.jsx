import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Post() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    if (response?.status === 200) {
      setData(response.data);
    }
  };

  const onSubmit = async (postData) => {
    try {
      if (currentPost) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${currentPost.id}`, postData);
        if (response?.status === 200) {
          toast('Post updated succesfully..', { type: 'success' })
          setData(data.map(post => (post.id === currentPost.id ? response.data : post)));
        }
      } else {
        // Create new post
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
        if (response?.status === 201) {
          toast('Post created succesfully..', { type: 'success' })
          setData([response.data, ...data]);
        }
      }
      reset();
      setCurrentPost(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Something went wrong')
    }
  };

  const handleEdit = (post) => {
    setCurrentPost(post);
    setIsModalOpen(true);
    reset(post);
  };


  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (response?.status === 200) {
        setData(data.filter(post => post.id !== id));
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };


  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='flex justify-end mx-4'>
        <button
          className='rounded-md bg-green-800 py-2 px-4 my-2 text-white flex justify-center items-center'
          onClick={() => {
            reset()
            setCurrentPost(null);
            setIsModalOpen(true);
          }}
        >
          Create new post
        </button>
      </div>
      {data.map((item) => (
        <div key={item.id} className='m-4 bg-gray-200 rounded p-4'>
          <Link to={`/posts/${item.id}`}>
            <p className='font-bold my-1 capitalize'>{item.title}</p>
            <p>{item.body}</p>
          </Link>
          <div className='flex justify-end mt-2'>
            <button
              className='rounded-md bg-blue-600 py-1 px-2 text-white mr-2'
              onClick={() => handleEdit(item)}
            >
              Edit
            </button>
            <button
              className='rounded-md bg-red-600 py-1 px-2 text-white'
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white rounded-lg p-6 w-96'>
            <h2 className='text-xl font-bold mb-4'>{currentPost ? 'Edit Post' : 'Create New Post'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-4'>
                <label className='block mb-2 font-semibold'>Title</label>
                <input
                  className='border rounded p-2 w-full'
                  {...register('title', { required: "Title is required" })}
                  {...register('title', { required: 'Title is required' })}
                />
                {errors.title && <p className='text-red-500 text-sm'>{errors.title.message}</p>}
              </div>
              <div className='mb-4'>
                <label className='block mb-2 font-semibold'>Body</label>
                <textarea
                  className='border rounded p-2 w-full'
                  rows={4}
                  {...register('body', { required: 'Body is required' })}
                ></textarea>
                {errors.body && <p className='text-red-500 text-sm'>{errors.body.message}</p>}
              </div>
              <div className='flex justify-end'>
                <button
                  type='button'
                  className='rounded-md bg-gray-400 py-2 px-4 mr-2 text-white'
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='rounded-md bg-green-800 py-2 px-4 text-white'
                >
                  {currentPost ? 'Update' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
