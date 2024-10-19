import React, { useState } from 'react'
import './Home_Todo.css';
import Task_List from './Task_List';
import Date_Time from './Date&Time';

function Home_Todo() {
    const [inputData,setInputData] = useState({
        id:"",
        content:"",
        checked:''
    })
    // const [task ,setTask ] = useState([]) before process adding data in local storage

    const todoKey = "TodoApp"

    const [task ,setTask ] = useState(() => {
        const getTodo = localStorage.getItem(todoKey);

        if(!getTodo) return;

        return JSON.parse(getTodo);
    })

    const handleChange = (value) => {
        // setInputData(inputData) before making object state
        setInputData({id:value,content:value,checked:false})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const {id,content,checked} = inputData
        
        // if(!inputData) return; before making object state
        
        if(!content) return;

        // if(task.includes(inputData)){ before making object state
        //     setInputData("")
        //     return;
        // }

        const existItem = task.find((item) => item.content === content)
        if(existItem){ 
            setInputData({});
            return;
        }

        // setTask((prev) => [...prev,{id:id,content:content,checked:checked}]) but use destructuring method in the second line

        setTask((prev) => [...prev,{id,content,checked}])
        
        setInputData({id:"",content:"",checked:""})
    }

    // passing of handle event 
    const handleClick = (index) => (
        setTask(task.filter((item,idx) => idx !== index))
    )
    // passing of handleChecked event 

    // Our TodoApp Setup in LocalStorage

    localStorage.setItem(todoKey,JSON.stringify(task));

    const handleCheckedClick = (index) => {
        const updateTask = task.map((item,idx) => {
        if(idx === index) {
            return {...item,checked:!item.checked}
         }
         else{
            return item
         }
        })
        setTask(updateTask)
    }
    const handleAllClear = () => {
        setTask([])
    }
  return (
    <section className='home-container'>
         <header>
             <h1>TODO LIST</h1>
         </header>
         <Date_Time/>
         <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" autoComplete='off' className='form-input' value={inputData.content} onChange={(e) => handleChange(e.target.value)}/>
                </div>
                <div>
                    <button type='submit' className='form-btn'>Add Task</button>
                </div>
            </form>
         </section>
         {task.map((item,idx) => (
            <Task_List task={item.content} key={idx} checked={item.checked} idx={idx} handleClick={handleClick} handleCheckedClick={handleCheckedClick}/>
         ))}
        <button onClick={handleAllClear}>Clear All</button>
    </section>
  )
}

export default Home_Todo
