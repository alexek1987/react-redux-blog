import { FETCH_POSTS, DELETE_POST, NEW_POST } from "../actions";

const initState = { allPosts: [] };

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, allPosts: action.payload };

    case NEW_POST:
      return { ...state, allPosts: [...state.allPosts, action.payload] };

    case DELETE_POST:
      let copyOfPosts = [...state.allPosts];
      copyOfPosts = copyOfPosts.splice(
        [copyOfPosts.findIndex((x) => x.id == action.payload.id)],
        1
      );
      return { ...state, allPosts: copyOfPosts };
    default:
      return state;
  }
}
