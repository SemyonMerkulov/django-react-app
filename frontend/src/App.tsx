import React from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const App = () => {
  return (
    <div className="container mt-3">
      <h1>Posts list</h1>
      <PostList/>
      <hr/>
      <PostForm/>
    </div>
  );
};

export default App;
