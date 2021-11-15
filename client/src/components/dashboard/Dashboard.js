import React from 'react';
import './Dashboard.css';
import { Box } from '@chakra-ui/react';

import SessionList from './sessionlist/SessionList';
// import Gym from '../gyms/Gym';

export default function Dashboard({ workouts, toggleDetailsForm }) {
  // Simply launches the dashboard component so it renders the list of sessions
  return (
    // <div className="dashboard">
    <Box w="100%" m="0px !important">
      <div className="list__container">
        <SessionList
          workouts={workouts}
          toggleDetailsForm={toggleDetailsForm}
        />
      </div>
    </Box>
    // </div>
  );
}
