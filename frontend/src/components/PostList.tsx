import React from 'react';
import PostItem from './PostItem';

const PostList: React.FC = () => {

  const postsMock = [
    {
      id: 1,
      title: "lorem mothefucking ipsum",
      text: "stupid shitty text"
    },
    {
      id: 2,
      title: "lorem mothefucking ipsum",
      text: "stupid shitty text"
    },
    {
      id: 3,
      title: "lorem mothefucking ipsum",
      text: "stupid shitty text"
    }
  ];

  return (
    <div className="mt-4">
      {postsMock.map(item => {
        return <PostItem 
          title={item.title} 
          text={item.text} 
          key={item.id}
        />
      })}
    </div>
  );
}

export default PostList