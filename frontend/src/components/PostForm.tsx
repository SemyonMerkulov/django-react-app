import React, { useState } from 'react';
import { useAppActions } from '../hooks';

const PostForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const {createPost} = useAppActions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPost(title, text);
    setTitle('');
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new post here:</h3>
      <div className="form-group">
        <label htmlFor="title">New post title:</label>
        <input 
          type="text" 
          className="form-control" 
          id="title"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Text:</label>
        <textarea 
          className="form-control" 
          id="text" 
          rows={3}
          onChange={e => setText(e.target.value)}
          value={text}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
} 

export default PostForm