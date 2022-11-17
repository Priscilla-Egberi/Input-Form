import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
// import Calendar from 'react-calendar'
import './calender.css';
import Time from './Time'

function Calender() {

    const [date, setDate] = useState(new Date());
    const [showTime, setShowTime] = useState(false)

    return (
        <div className='ms-4'>
            <p className='header fw-bold'>Appointment</p>
            <div className="d-flex flex-column flex-md-row">
                <div>
                    <div>
                        <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
                    </div>

                    {date.length > 0 ? (
                        <p>
                            <span>Start:</span>
                            {date[0].toDateString()}
                            &nbsp;
                            &nbsp;
                            <span>End:</span>{date[1].toDateString()}
                        </p>
                    ) : (
                        <p>
                            <span>Default selected date:</span>{date.toDateString()}
                        </p>
                    )
                    }
                </div>
                <div className="ms-md-5">
                    <p style={{fontSize:"1rem"}}>{date.toDateString()}</p>
                    <Time showTime={showTime} date={date} />
                </div>
            </div>
        </div>
    )
}

export default Calender;