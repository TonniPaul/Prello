import tasklist from "../../static/tasks";
import './tasks.css'

const Tasks = () => {
  return (
    <div className='card-div ' >
      <div className='card'>
        <h3 className='card--header'> Weekly Tasks</h3>
        {tasklist.map(({id, item}, index) => {
          return(<p className='task-text'>{item}</p>)
        })}
      </div>

      <div className='card'>
        <h3 className='card--header'> Daily Tasks</h3>
      </div>
  </div>
  )
}


export default Tasks;