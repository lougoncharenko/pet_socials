import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/home';
import Login from '../pages/login';
import NewComment from '../pages/newComment';
import NewPost from '../pages/newPost';
import Signup from '../pages/signup';

const Routers = () => {
    return (
      <Routes>
         <Route path="/" element ={<Navigate to='/home' />} />
         <Route path="home" element={< Home />} />
         <Route path="login" element={<Login />} />
         <Route path="newComment" element={< NewComment />} />
         <Route path="newPost" element={< NewPost />} />
         <Route path="newPost" element={< Signup />} />
      </Routes>
  );
}

export default Routers;