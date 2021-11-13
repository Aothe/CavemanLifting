import React from 'react';
import './Profile.css';
import Heatmap from './heatmap/Heatmap';

export default function Profile({ workouts }) {
  return (
    <div className="profile__page">
      {workouts.length && <Heatmap workouts={workouts} />}
      <p>HAHAHAHAHAHAH</p>
    </div>
  );
}
