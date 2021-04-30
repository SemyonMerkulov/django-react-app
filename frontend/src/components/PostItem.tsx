import React from 'react';
import { useAppActions } from '../hooks';
import { PostItemProps } from '../types/post';

const PostItem: React.FC<PostItemProps> = React.memo(({id, title, text}) => {
  const {deletePost} = useAppActions();

  const handleDelete = () => {
    deletePost(id);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button 
        type="submit" 
        className="btn btn-secondary mb-3"
        onClick={handleDelete}>  
          Delete
      </button>
    </div>
  );
});

export default PostItem;