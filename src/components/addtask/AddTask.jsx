import React, { Component } from 'react'

export class AddTask extends Component {
   state = {
      content: ''
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
        content: e.target.value
      })
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
        isOpen: false
      })
      this.props.addTask(this.state)
      this.setState({
         content: ''
      })
    }
  render() {
    return (
      <div>
            <div id='modal' className={this.state.isOpen ? 'show' : 'hidden' }>
              <div className='modal-header'>
                <h3>Add a new task</h3>
                <h3 className='x' onClick={this.closeModal}>X</h3>
              </div>
              <form>
                <input type='text' className='modal-input' onChange={this.handleChange} value={this.state.content}/>
                <button className='modal-btn' onClick={this.handleSubmit}>Confirm</button>
              </form>
              
            </div>
            <button 
               id='add--task--btn' 
               onClick={() => this.openModal() } 
               className={ this.state.isOpen ? 'hide-btn': ''}
            >
               add tasks
            </button>
      </div>
    )
  }
}

export default AddTask