import React from 'react'
import BlogDetailsHeroBanner from '../components/HeroBanner'
import BlogId from '../components/BlogId'
import BlogDetailsServices from '../components/Services'

const BlogDetailsThemplate = () => {
  return (
    <div>
        <BlogDetailsHeroBanner/>
        <BlogId/>
        <BlogDetailsServices/>
      
    </div>
  )
}

export default BlogDetailsThemplate
