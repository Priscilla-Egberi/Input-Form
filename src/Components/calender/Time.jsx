import React from 'react'
import { useState } from 'react';
// import Calendar from 'react-calendar';
// import './App.css';

const time = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM']

function Times(props) {

  const [event, setEvent] = useState(null)
  const [info, setInfo] = useState(false)

  function displayInfo(e) {
    setInfo(true);
    setEvent(e.target.innerText);
  }

  return (

    <div className="times">
      {/* {time.map(times => {
    return (
    <div>
      <button className="btn btn-outline-primary mb-3" onClick={(e)=> displayInfo(e)}> {times} </button>
    </div>
        )
     })} */}
      {
        <>
          <div>
            <button className="btn btn-outline-primary mb-3 me-3" onClick={(e) => displayInfo(e)}> {time[0]} </button>
            <button className="btn btn-outline-primary mb-3" onClick={(e) => displayInfo(e)}> {time[1]} </button>
          </div>
          <div>
            <button className="btn btn-outline-primary mb-3 me-3" onClick={(e) => displayInfo(e)}> {time[2]} </button>
            <button className="btn btn-outline-primary mb-3" onClick={(e) => displayInfo(e)}> {time[3]} </button>
          </div>
          <div>
            <button className="btn btn-outline-primary mb-3 me-3" onClick={(e) => displayInfo(e)}> {time[4]} </button>
            <button className="btn btn-outline-primary mb-3" onClick={(e) => displayInfo(e)}> {time[5]} </button>
          </div>
        </>
      }
      <div>
        {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
      </div>
    </div>
  )
}

export default Times;