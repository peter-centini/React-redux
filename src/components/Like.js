import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { addlike } from "../action/post.action";
import { addUserLike } from "../action/user.action";

const Like = ({ post }) => {
  const user = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

  const handeleLike = () => {
    const postData= {
      title: post.title,
      author: post.author,
      content: post.content,
      likes: ++post.likes,
      id: post.id
    }
    const userData = {
      pseudo: user[0].pseudo,
      likes: ++user[0].likes,
      id: user[0].id,
    };
    dispatch(addlike(postData))
    dispatch(addUserLike(userData))
  }

  return (
    <div onClick={handeleLike}>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
