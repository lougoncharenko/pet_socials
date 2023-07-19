import React from 'react';

const Header = () => {
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Pet Socials</a>
    
    <div class="nav navbar-nav navbar-left" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li><a href="/home" class="me-2">Home</a></li>
        <li><a href="/newPost" class="me-2">New Post</a></li>
        <li><a href="/newComment" class="me-2">New Comment</a></li>
      </ul>
    </div>
    <ul class="nav navbar-nav navbar-right">
        <li><a href="/logout" class="me-2">Logout</a></li>
        <li><a href="/login" class="me-2">Login</a></li>
        <li><a href="/signup" class="me-2">Sign Up</a></li>
    </ul>
  </div>
</nav>
  );
}

export default Header;

    