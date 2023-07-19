import React from 'react';
import { NavLink} from 'react-router-dom';
import './Navbar.css'
import {Container, Row} from 'reactstrap'



const Header = () => {
  
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav_wrapper">
           
              <div className="navigation">
                <ul className="menu">
                  <li className="nav_item">
                    <NavLink to='home'>Home</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='newPost'>New Post</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='newComment'>New Comment</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='login'>login</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='signup'>sign up</NavLink>
                  </li>
                </ul>
              </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;