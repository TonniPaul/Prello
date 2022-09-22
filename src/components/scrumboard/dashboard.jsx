import React, { Component } from 'react'
import Data from '../../static/data'
import Tasks from '../task/Tasks'
import './dashboard.css';
import AddTask from '../addtask/AddTask'
import Users from '../users/Users';

export default class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: Data,
      isOpen: false,
      task: []
    }
  }

  
  
  render() {
    return (

      <div className='dashboard'>
      {Data.map( (input, key) => {
        return(
          <div key={key}>
            <nav className='nav'>
              <h1>ChatScrum</h1>
              <div>
                <p>User Type: {input.userType}</p>
                <p>Project Name:{input.projectName}</p>
              </div>
            </nav>
            <div className='padding' >
              <p className='welcome-text'> Hello {input.fullname}, Welcome to your Dashboard</p>
              {console.log('Logged in as ', input.fullname)}

            <Tasks />
            <AddTask />

            <Users />
            </div>

        </div>
        )
      })} 
      </div>
    )
  }
}
