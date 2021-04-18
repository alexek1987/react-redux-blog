import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions";

function PostsIndex() {
  const { allPosts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="thin-container">
      <div className="first-row">
        <h3>Blog</h3>
        <Link className="btn btn-primary btn-cta" to="/posts/new">
          Let's write a post!
        </Link>
      </div>

      {allPosts.map((post) => {
        return (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <div className="post-item">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default PostsIndex;
