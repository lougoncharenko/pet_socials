import React from 'react';

const NewPost = () => {
  return (
    <div>
      <div class="row">
  <div class="col-sm-4 col-sm-offset-4">
    <form action="/posts/new" method="post">
      <legend>New Post</legend>
      <div class="form-group">
        <label for="post-title">Title</label>
        <input
          type="text"
          name="title"
          class="form-control"
          id="post-title"
          placeholder="Title"
        />
      </div>
      <div class="form-group">
        <label for="post-url">Picture Url</label>
        <input
          type="url"
          name="url"
          class="form-control"
          id="post-url"
          placeholder="https://www.google.com"
        />
      </div>
      <div class="form-group">
        <label for="post-summary">Caption</label>
        <textarea
          name="summary"
          class="form-control"
          id="post-summary"
          placeholder="Summary"
        ></textarea>
      </div>
      <div class="text-right">
        <button type="submit" class="btn btn-primary">Create Post</button>
      </div>
    </form>
  </div>
</div>
    </div>
  );
}

export default NewPost;
