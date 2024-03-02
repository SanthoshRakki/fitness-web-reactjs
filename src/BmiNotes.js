import React, { useContext, useState } from 'react'
import Clock from './Clock';
import Notes from './Notes';
import DataContext from './context/DataContext';

const BmiNotes = () => {
  const{note, newNote, setNewNote,handleNotes,handleDelete} = useContext(DataContext);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');
  const [feedBack, setFeedBack] = useState('');
 
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const roundedBmi = parseFloat(bmi.toFixed(2));
  let targetWeightLower;
  let targetWeightUpper;

  const handleFeedBack = async(e) => {
    e.preventDefault();

    if (roundedBmi < 18.5) {
      setStatus('Underweight');
      targetWeightLower = 18.5 * heightInMeters * heightInMeters;
      setFeedBack(
        `Underweight - Need to improve weight. Target weight: ${targetWeightLower.toFixed(2)} kg`
      );
    } else if (roundedBmi < 24.9) {
      setStatus('Normal (Healthy) Weight');
      setFeedBack('Normal weight - Healthy range');
    } else if (roundedBmi < 29.9) {
      setStatus('Overweight');
      targetWeightUpper = 24.9 * heightInMeters * heightInMeters;
      setFeedBack(
        `Overweight - Need to reduce weight. Target weight: ${targetWeightUpper.toFixed(2)} kg`
      );
    } else {
      setStatus('Obese');
      targetWeightUpper = 24.9 * heightInMeters * heightInMeters;
      setFeedBack(
        `Obese - Need to reduce weight. Target weight: ${targetWeightUpper.toFixed(2)} kg`
      );
      setWeight("");
      setHeight("")
      setAge("")
    }
    
  };
  // console.log(note)
  return (
    <main className='bmiNotes' >
      <div>
        <div className='bmiCalcultor' >
          <h2>{"Understand Your Body Mass Index"}</h2>
          <br></br>
          <form onSubmit={handleFeedBack}>
            <label htmlFor='postWeight'>Weight</label>
            <input
              id='postWeight'
              type='number'
              required
              value={weight}
              placeholder='Enter your weight'
              onChange={(e) => setWeight(e.target.value)}
            />
            <br />

            <label htmlFor='postHeight'>Height</label>
            <input
              id='postHeight'
              type='number'
              required
              value={height}
              placeholder='Enter your height'
              onChange={(e) => setHeight(e.target.value)}
            />
            <br />

            <label htmlFor='postAge'>Age</label>
            <input
              id='postAge'
              type='number'
              required
              value={age}
              placeholder='Enter your age'
              onChange={(e) => setAge(e.target.value)}
            />
            <br />

            
            <br />

            <button type='submit'>Submit</button>
          </form>
        </div>
        <div className='bmi'>
          <h1>{status}</h1>
          <p>{feedBack}</p>
        </div>
      </div>
      <div className='notesClock' >
        <div ><Clock /></div>
        <div ><Notes note={note}
        newNote={newNote}
        setNewNote={setNewNote}
        handleNotes={handleNotes}
        handleDelete={handleDelete}
        /></div>
      </div>
    </main>
  )
}

export default BmiNotes