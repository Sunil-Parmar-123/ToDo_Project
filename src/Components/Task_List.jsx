import React from 'react'
import './Home_Todo.css';
import { MdCheck,MdDeleteForever} from "react-icons/md";

function Task_List({task,checked,handleClick,idx,handleCheckedClick}) {
  return (
    <div className='task-container'>
        <div className="task-content">
             <div className={checked ?"content-taskline":'content-task'}>
             {task}
             </div>
             <div className='task-icon'>
             <MdCheck className='icon1' onClick={() => handleCheckedClick(idx)}/>
             <MdDeleteForever className='icon2' onClick={() => handleClick(idx)}/>
             </div>
        </div>
    </div>
  )
}

export default Task_List
