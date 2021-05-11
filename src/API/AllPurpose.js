import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Allpurpose = () => {

    const [tasks, setTasks] = useState([])
    const [editedTask, setEditedTask] = useState({id:'',title:''})

    useEffect(()=> {
        axios.get("http://127.0.0.1:8000/api/tasks/", {
            headers:{
                'Authorization': 'Token 360d3fad4e80a1c1aadc236d2288234e21b0a01c'
            }
        })
        .then(res => {setTasks(res.data)})
    },[])


    const deleteTask = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`, {
            headers:{
                'Authorization': 'Token 360d3fad4e80a1c1aadc236d2288234e21b0a01c'
            }})
            .then(res => {setTasks(tasks.filter(task => task.id !== id));})
    }

    const newTask = (task) => {

        const data = {
            title: task.title
        }
        axios.post("http://127.0.0.1:8000/api/tasks/", data,{
            headers:{
                'Content-Type' : 'application/json',
                'Authorization': 'Token 360d3fad4e80a1c1aadc236d2288234e21b0a01c'
            }})
            .then(res => {setTasks([...tasks, res.data]); setEditedTask({id:'', title:''})
        })
    }

    const editTask = (task) => {

        axios.put(`http://127.0.0.1:8000/api/tasks/${task.id}/`, task,{
            headers:{
                'Content-Type' : 'application/json',
                'Authorization': 'Token 360d3fad4e80a1c1aadc236d2288234e21b0a01c'
            }})
            .then(res => {setTasks(tasks.map(task => (task.id === editedTask.id ? res.data : task)));
                setEditedTask({id:'', title:''})
        })
    }

    const handleInputChange = () => evt => {
        const value = evt.target.value;
        const name = evt.target.name;
        setEditedTask({...editedTask, [name]:value})
    }

   



    return (
        <div>
           

        <h1>その他のフレーズ</h1><br/>
        
        <br/>
        <form className='search-form'>
   
        <br/>
        <input className="search-bar" type="text" name='title'
        value = {editedTask.title}
        onChange ={handleInputChange()}
        placeholder="add new phrase" required/>
        { editedTask.id? 
        <button className="search-button" onClick={()=>editTask(editedTask)}>編集</button>:
        <button className="search-button" onClick={()=>newTask(editedTask)}>追加</button> 
         }
         </form>

        <div className="phrase-container">
        <ul className="phrase-list">
            {
                
               
                tasks.map(task => <li className="phrases" key={task.id}><div className="text">{task.title}</div>
                <button className='edit-btn' onClick={()=>setEditedTask(task)}>
                <i className='fas fa-pen'></i>
               </button>
                <button className='trash-btn' onClick={()=>deleteTask(task.id)}>
                    <i className='fas fa-trash-alt'></i>
                </button>
                
                </li>)
            }
        </ul>
        </div>

    </div>
    )
}

export default Allpurpose
