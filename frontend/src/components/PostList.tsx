import React, { useEffect } from 'react';
import { useAppActions, useAppSelector } from '../hooks';
import PostItem from './PostItem';

const PostList: React.FC = () => {
  const {error, loading, posts} = useAppSelector(state => state.post);
  const {fetchPosts} = useAppActions();

  useEffect(() => {
    fetchPosts();
  }, [])

  if (loading) {
    return <div className="spinner-border" role="status"/>
  }
  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );  
  }


  return (
    <div className="mt-3">
      {posts.map(item => {
        return <PostItem 
          id={item.id}
          title={item.title} 
          text={item.text} 
          key={item.id}
        />
      })}
    </div>
  );
}

export default PostList