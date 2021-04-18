import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const NEW_POST = "NEW_POST";
export const DELETE_POST = "DELETE_POST";

const FETCH_URL = "http://reduxblog.herokuapp.com/api/posts";
const API_KEY = "HAPPY-ROOM420";

export async function fetchPosts() {
  const data = await axios.get(`${FETCH_URL}?key=${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: data.data,
  };
}

export async function newPost(formData) {
  const data = await axios.post(`${FETCH_URL}?key=${API_KEY}`, formData);

  return {
    type: NEW_POST,
    payload: data.data,
  };
}

export async function deletePost(id) {
  const data = await axios.delete(`${FETCH_URL}/${id}?key=${API_KEY}`);
  return {
    type: DELETE_POST,
    payload: data.data,
  };
}

// replaced by findby index === params id in postsshow

// export async function fetchPost(id) {
//   const data = await axios.get(`${FETCH_URL}/${id}?key=${API_KEY}`);

//   return {
//     type: FETCH_POST,
//     payload: data.data,
//   };
// }
