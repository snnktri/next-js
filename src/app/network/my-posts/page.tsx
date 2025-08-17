import React from 'react'
import Post from "@/component/post/Post"
import { userPosts } from "@/data/postMockData"

const MyPosts = () => {
  return (
    <div className='w-3/4'>
      <Post posts={userPosts}/>
    </div>
  )
}

export default MyPosts
