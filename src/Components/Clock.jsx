import React , {useState, useEffect} from 'react'

function Clock() {

    const [time,setTime] = useState(new Date());

    useEffect(()=>{

        document.title = `Time`;
        const intervalId= setInterval(()=>{
            setTime(new Date());
        },1000);

        return()=>{
            clearInterval(intervalId);
        }
    },[])


    function formateTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        const meridian = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${hours} : ${minutes} : ${seconds} ${meridian}`;

    }
  return (
    <div className='clock-container'>
        <div className='clock'>
            <span>{formateTime()}</span>
        </div>
    </div>
  )
}

export default Clock