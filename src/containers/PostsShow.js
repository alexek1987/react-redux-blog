import React from "react";
import { useEffect } from "react";
import { deletePost } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import "../style.css";

function PostsShow() {
  const { allPosts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const { id } = useParams();
  const history = useHistory();

  const onePost = allPosts[allPosts.findIndex((x) => x.id == id)];

  //   replaced

  //   useEffect(() => {
  //     dispatch(fetchPost(id));
  //   }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deletePost(id));
    history.goBack();
  };

  return (
    <div className="thin-container">
      <div className="post-item">
        <p>
          <small>Id: {id}</small>
        </p>
        <h3>{onePost?.title}</h3>
        <p>{onePost?.content}</p>
      </div>
      <button className="btn btn-primary btn-cta" onClick={handleDelete}>
        Delete post
      </button>
      <br />
      <Link to="/">Back </Link>
    </div>
  );
}

export default PostsShow;
