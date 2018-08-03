import * as contentful from 'contentful';
import * as actions from './blog/actions';

const client = contentful.createClient({
  space: 'kdzs2ew5ufg3',
  accessToken:
    '9248045d8b54b9b80eb5d6e4a91714e9f89f40cce894d26fe37b8d3f40039620'
});

export function loadBlog() {
  return dispatch => {
    dispatch(actions.blogLoading());

    return (
      client
        .getEntries()
        .then(({ items }) => dispatch(actions.loadBlogSuccess(items)))
        .then(() => dispatch(actions.blogLoading(false)))
        .catch(error => {
          console.log(error);
          dispatch(actions.blogLoading(false));
        })
    );
  };
}
