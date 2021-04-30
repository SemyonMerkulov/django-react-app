import React from 'react';
import { PostItemProps } from '../types/post';

const PostItem: React.FC<PostItemProps> = ({title, text}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default PostItem;