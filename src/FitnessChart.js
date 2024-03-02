import React, { useContext, useEffect, useState } from 'react';
import ListItem from './ListItem';
import DataContext from './context/DataContext';

const FitnessChart = () => {
  const {isLoading,fetchError,bgwIP,bgwPP,blwIP,blwPP,igwIP,igwPP,ilwIP,ilwPP,agwIP,agwPP,alwIP,alwPP} = useContext(DataContext)
   
  const [level, setLevel] = useState('');
  const [goal, setGoal] = useState('');



  return (
    <main className='fitness' >
      <div>
        <h1>{"Customized Workout Plans"}</h1>
        <h2>{"Tailored to Your Fitness Goals"} </h2>
        <li> {"Effective workouts for every fitness level."}</li>
        <li> {"Build strength, endurance, and flexibility."}</li>
        <li> {"Achieve your goals with personalized plans."}</li>
        <br></br>
      <label htmlFor='postLevel'>Fitness Level</label>
            <select
              id='postLevel'
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value=''>Select Level</option>
              <option value='beginner'>Beginner</option>
              <option value='intermediate'>Intermediate</option>
              <option value='advance'>Advance</option>
            </select>
            <br />

            <label htmlFor='postGoal'>Fitness Goal</label>
            <select
              id='postGoal'
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            >
              <option value=''>Select Goal</option>
              <option value='weightGain'>Weight Gain</option>
              <option value='weightLoss'>Weight Loss</option>
            </select>
        <ListItem
        goal={goal}
        level= {level}
        isLoading={isLoading}
        fetchError={fetchError}
        bgwIP={bgwIP}
        bgwPP={bgwPP}
        blwIP={blwIP}
        blwPP={blwPP}
        igwIP={igwIP}
        igwPP={igwPP}
        ilwIP={ilwIP}
        ilwPP={ilwPP}
        agwIP={agwIP}
        agwPP={agwPP}
        alwIP={alwIP}
        alwPP={alwPP}
        />
      </div>
    </main>
  );
};

export default FitnessChart;
