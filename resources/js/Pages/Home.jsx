import React from 'react'

const Home = (posts) => {
  return (
    <div>
        <ul>
            {posts.map(post => (
            <li key={post.id}>
                {post.title} 
                {post.description}
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Home;
