import React, { Component } from 'react'
import Data from '../../static/data'
import Tasks from '../task/Tasks'
import './dashboard.css';
import AddTask from '../addtask/AddTask'
import Users from '../users/Users';
import { v4 as uuid } from 'uuid';
// import task from '../../static/tasks';
import Logo from '../UI/backdrop/Logo';
// import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: Data,
      isOpen: false,
      tasks: []
    }
  }
  addTask = (task) =>{
    task.id = uuid()
    let tasks = [...this.state.tasks, task]
    this.setState({
      tasks
    })
  }

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => {
      return task.is !== id
    })
    this.setState({
      tasks
    })
  }
// componentDidMount() {
//   axios.get('http://liveapi.chatscrum.com/scrum/api/scrumgoals/')
//     .then((res) =>{
//       this.setState({
//         task: res.data
//       })
//     })
// }
  
  
  render() {
    return (

      <div>
      {Data.map( (input, key) => {
        return(
          <div key={key}className='dashboard'>
            <nav className='nav'>
              <Logo/>
              <div>
                <p>User Type: {input.userType}</p>
                <p>Project Name:{input.projectName}</p>
              </div>
            </nav>
            <div className='padding' >
              <p className='welcome-text'> Hello {input.fullname}, Welcome to your Dashboard</p>
              {console.log('Logged in as ', input.fullname)}

            <Tasks data={this.state.tasks} deleteTask={this.deleteTask}/>
            <AddTask addTask ={this.addTask} />

            <Users />
            </div>

        </div>
        )
      })} 
      </div>
    )
  }
}
