import tasklist from "../../static/tasks";
import './tasks.css';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import { useState } from "react";

const Tasks = () => {
  const [weekly, setWeekly] = useState(tasklist.weekly);
  const [ daily, setDaily ] = useState(tasklist.daily)


  const onDragEnd = (result) => {

  }


  return (
    <div className='card-div ' >
      <DragDropContext> 
        <Droppable droppableId='taskweekly' onDragEnd={onDragEnd} >
          {(provided,) => (            
            <div className='card' {...provided.droppableProps} ref={provided.innerRef}>
              <h3 className='card--header'> Weekly Tasks</h3>
              {weekly.map(({id, item}, index) => {
                return(
                  <Draggable key={id} draggableId={id} index={index}>
                  {(provided, snapshot) => (
                      <p className='task-text' 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps} 
                        ref={provided.innerRef} 
                        style={{
                          background: snapshot.isDragging ? 'var(--primary)' : '',
                          color: snapshot.isDragging ? 'var(--primaryText)' : '',
                          marginBottom: snapshot.isDragging ? '10px' : 'inherit'
                        }}
                      >
                        {item}
                      </p>
                  )}
                  
                  </Draggable>
                )
              })}
            {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId='taskdaily' >      
          {(provided) => (
            <div className='card' {...provided.droppableProps} ref={provided.innerRef}>
            <h3 className='card--header'> Daily Tasks</h3>
              {/* {daily.map(({id, item}, index) => {
                return(
                  <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                      <p className='task-text' 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps} 
                      >
                        {item}
                      </p>
                  )}
                  
                  </Draggable>
                )
              })} */}
            {provided.placeholder}
            </div>

          )}
        </Droppable>
      </DragDropContext>
  </div>
  )
}


export default Tasks;