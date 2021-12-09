import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../action/post.action";



const PostForm = () => {
  const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
    const user = useSelector((state) => state.userReducer);
     const dispatch = useDispatch();

    const handleForm = async (e) => {
      e.preventDefaulft();

      if (title && content) {
        const data = {
          title,
          content,
          author: user[0].pseudo,
          likes: 0,
        };
        await dispatch(addPost(data));
        setTitle('');
        setContent('');
        dispatch(getPosts());
      }
    }

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleForm(e)}>
        <input type="text" 
          placeholder="Titre du poste"
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          />
        <textarea placeholder="Postez vos pensées..."
          value={content}
          onChange={(e) => setContent(e.target.value)}>
          </textarea>
        <input type="submit" value="Envoyer"/>
      </form>
    </div>
  )
}

export default PostForm;
