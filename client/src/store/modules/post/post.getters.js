export default {
  customAllPosts: (state) => {
    if (state.posts.length > 0) {
      const customAllPosts = state.posts.map((post) => {
        return {
          id: post._id,
          username: post.user.username,
          title: post.title,
          createdAt: post.createdAt,
          counts: {
            likes: post.likes.length,
            comments: post.comments.length,
          },
        };
      });
      return customAllPosts;
    } else {
      return state.posts;
    }
  },
};
