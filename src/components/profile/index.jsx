import React from 'react'

const ProfileCard = ({ profileInfo }) => {
  return (
    <div>
      <div className='bg-gray-100 rounded p-4 '>
        <div className='flex items-center'>
          <h1 className='font-bold text-lg mr-2'>Name:</h1>
          <h1>{profileInfo.name}</h1>
        </div>
        <div className='flex items-center'>
          <h1 className='font-bold text-lg'>Location: </h1>
          <h2>{profileInfo.location}</h2>
        </div>
        <div>
          <h1 className='font-bold text-lg'>Bio</h1>
          <p>{profileInfo.biotxt}</p>
        </div>

        <div className='flex items-center'>
          <h1 className='font-bold text-lg'>Age: </h1>
          <p className='mx-2'>{profileInfo.age}</p>
        </div>

        <div className={`flex justify-center text-white rounded p-4 ${profileInfo.age>=18?'bg-green-400':'bg-red-300'}`}>
          <p className='font-bold text-md'>{profileInfo.age >= 18 ? 'Can Vote' : "Can not vote"}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
