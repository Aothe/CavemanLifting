import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Sidebar.css';

import profilePic from '../../assets/caveman_profile_pic.PNG';
import logo from '../../assets/caveman.svg';
import home from '../../assets/home.svg';
import user from '../../assets/user.svg';
import dumbbell from '../../assets/fitness-centre.svg';
import building from '../../assets/building.svg';
import plus from '../../assets/plus.svg';

export default function Sidebar({ toggleForm, componentDecider }) {
  return (
    <Router>
      <div className="sidebar__container">
        <a href="/dashboard" className="text-center">
          <img
            alt="Navigate to dashboard"
            src={logo}
            width="200"
            height="100"
          ></img>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="/dashboard"
              className="nav-link text-white"
              aria-current="page"
            >
              <img
                alt="Navigate to dashboard"
                src={home}
                className="me-2"
                width="20"
                height="20"
              />
              Home
            </a>
          </li>
          <li>
            <a href="/profile" className="nav-link text-white">
              <img
                alt="Navigate to profile"
                src={user}
                className="me-2"
                width="20"
                height="20"
              />
              Profile
            </a>
          </li>
          <li>
            <a href="/workoutinfo" className="nav-link text-white">
              <img
                alt="View workouts"
                src={dumbbell}
                className="me-2"
                width="20"
                height="20"
              />
              Workouts
            </a>
          </li>
          <li>
            <a href="/gyms" className="nav-link text-white">
              <img
                alt="View local gyms"
                src={building}
                className="me-2"
                width="20"
                height="20"
              />
              Gyms
            </a>
          </li>
          <li>
            <button className="nav-link text-white" onClick={toggleForm}>
              <img
                alt="Add a new session"
                src={plus}
                className="me-2"
                width="20"
                height="20"
              />
              Create New Session
            </button>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="/profile"
            className="d-flex align-items-center text-white text-decoration-none"
          >
            <img
              src={profilePic}
              alt=""
              width="55"
              height="55"
              className="rounded-circle me-2"
            />
            <strong>Unga Bunga</strong>
          </a>
          <Routes>
            <Route path="/dashboard">{componentDecider('/dashboard')}</Route>
            <Route path="/profile">{componentDecider('/profile')}</Route>
            <Route path="/workoutinfo">
              {componentDecider('/workoutinfo')}
            </Route>
            <Route path="/gyms">{componentDecider('/gyms')}</Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
