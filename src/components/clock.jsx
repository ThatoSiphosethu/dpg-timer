import React from 'react';
import { useState } from 'react';
import TimePicker from 'react-bootstrap-time-picker';




const ShiftCounter = () => {

    // const totalWorkTime = useState();

    const [startTime, handleStartTime] = useState();

    const [endTime, handleEndTime] = useState();

    // const morningBreak = useState();

    // const lunchBreak = useState();

    // const afterNoonBreak = useState();

    const [message, setMessage] = useState('');




   const handleTimeDiff = () => {

    
    console.log(startTime, endTime)
//    const totalWorkTime = endTime - startTime;
    if (startTime >= (7 * 60 * 60)  ) {
        // morning break (between 9am & 9:15)
        let morningBreakStartTime = '9:00';

        let morningBreakEndTime = '9:15';

        let morningBreak = (morningBreakEndTime - morningBreakStartTime);

        return morningBreak;

 
    } else if (startTime >= '9:15' ) {
         // lunch break (between 11:45 & 12:15)
         let lunchStartTime = '11:45';

         let lunchEndTime = '12:15';
 
         let lunchBreak = (lunchEndTime - lunchStartTime);
 
         return lunchBreak;

    } else if (startTime >= '12:45' ) {
        // afternoon break (between 14:45 & 15:00)
        let afterNoonBreakStartTime = '14:45';

        let afterNoonBreakEndTime = '15:00';

        let afterNoonBreak = (afterNoonBreakEndTime - afterNoonBreakStartTime);

        console.log(afterNoonBreak)
        return afterNoonBreak;

   } else {

    // return totalWorkTime;
    // let totalWorkTime = (endTime - startTime - afterNoonBreak - lunchBreak - morningBreak);

    // return totalWorkTime;
   }


    
   }
   console.log(handleTimeDiff)

   //let totalworkingtime = (firstbrack - startime) 2 + (s.lunc 12.15 - enofbreak 9.15) 3 + (eosh-e.lunch) 4 = 7hr.
   // (end.shift 5.15pm - start 7am)10 - (endfbrea 9.15 - statbreak 9) .15 + (endlunch 1.15- stalunch 12.15) 1 
   //10 - 1.15 = 8.75

   //let startTime; 7am
   //let firstBreak; 9am
   //let endoffirstbreak; 9.15am
   // -> let firstbreaktotal = endoffirstbreak - firstbreak; // 9.15 - 9 = .25\
   //let s.lunch = 12.15pm
   //let e.lunch = 1.15pm
   // -> totalunchtime = e.lunch - s.lunch // 1.15 - 12.15 = 1
   // end of shift = 5.15pm
 
   // buttoms st
   // bt br  -> hide
   // bt st ->
   // bt lu 
   // bt endshift






    return ( 
        <div className='time-card'>
            <body>
                <h1>DPG Time Tracker</h1>
                <div className='container'>
                    

                        <div className='inp-wrapper'>
                            <div className='time-wrapper'>
                            <label for="start-time" id='startTime' >Start Time: </label>  <TimePicker onChange = {time => handleStartTime(time) } 
                                    value = {startTime}
                            ></TimePicker>
                                
                            </div>

                            <div className='time-wrapper'>
                            <label for="end-time" id='endTime'>End Time: </label> <TimePicker onChange = {time => handleEndTime(time) } 
                                    value = {endTime} ></TimePicker>
                            </div>
                            
                        </div>
                        
                        <button id='calc' onClick={handleTimeDiff}>Submit</button>

                        <div id='output'>
                            <h3>You worked a total of : {message}</h3>
                        </div>
                </div>
                
            </body>
            
        </div>
     );
}
 
export default ShiftCounter;