import React, { useEffect, useState } from 'react'

function Date_Time() {

    const [dateTime,setDateTime] = useState('')

    // const day = new Date()
    // const localDate = day.toLocaleDateString();
    // const localTime = day.toLocaleTimeString();
    // const localday = day.toLocaleString()

    useEffect(() => {
        const id = setInterval(() => {
            const day = new Date()
            const localDate = day.toLocaleDateString();
            const localTime = day.toLocaleTimeString();
            
            setDateTime(`${localDate} - ${localTime}`)
        },1000)

        return () => clearInterval(id);

    },[])

    // console.log("local")
    return (
        <div className='date-time'>
      {dateTime}
    </div>
  )
}

export default Date_Time
