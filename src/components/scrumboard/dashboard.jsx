import React, { Component } from 'react'
import Data from '../../static/data'
import Tasks from '../task/Tasks'
import './dashboard.css'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  constructor(){
    super();

    this.state = {
      data: Data,
      isOpen: false,
      task: null
    }
  }

  openModal = () => {
    this.setState({
      isOpen: true
    })
  }
  closeModal = () => {
    this.setState({
      isOpen: false
    })
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: false
    })
  }
  
  render() {
    return (

      <div className='dashboard'>
      {Data.map( (input, key) => {
        return(
          <div>
            <nav key={key} className='nav'>
              <h1>ChatScrum</h1>
              <div>
                <p>User Type:{input.userType}</p>
                <p>Project Name:{input.projectName}</p>
              </div>
            </nav>
            <div className='padding' >
              <p className='welcome-text'> Hello {input.fullname}, Welcome to your Dashboard</p>
              {console.log('Logged in as ', input.fullname)}

            <Tasks />

            <div id='modal' className={this.state.isOpen ? 'show' : 'hidden' }>
              <div className='modal-header'>
                <h3>Add a new task</h3>
                <h3 className='x' onClick={this.closeModal}>X</h3>
              </div>
              <form>
                <input type='text' className='modal-input' onChange={this.handleChange}/>
                <button className='modal-btn' onClick={this.handleSubmit}>Confirm</button>
              </form>
            </div>

              <button id='add--task--btn' onClick={() => this.openModal() } className={ this.state.isOpen ? 'hide-btn': ''}>add tasks</button>
            </div>

        </div>
        )
      })}
      <Link to='/'>
        <button className='logout'> Log Out </button>  
      </Link>    
      </div>
    )
  }
}
