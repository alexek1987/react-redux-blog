import { useState } from "react";
import Input from "../components/Input";
import { newPost } from "../actions";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

function NewPost() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(newPost(formData));
    history.push("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="thin-container">
      <form onSubmit={submitHandler}>
        <h3>New post</h3>
        <Input name="title" formChange={handleChange} value={formData.title} />
        <Input
          name="content"
          formChange={handleChange}
          value={formData.content}
        />
        <button type="submit" className="btn btn-primary btn-cta">
          Post
        </button>
        <br />
        <Link to="/">Back </Link>
      </form>
    </div>
  );
}

export default NewPost;
