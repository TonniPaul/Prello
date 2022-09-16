import tasklist from "../../static/tasks";
import './tasks.css';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const Tasks = () => {
  return (
    <div className='card-div ' >
      <DragDropContext> 
        <Droppable droppableId='taskweekly' >
          {(provided) => (            
            <div className='card' {...provided.droppableProps} ref={provided.innerRef}>
              <h3 className='card--header'> Weekly Tasks</h3>
              {tasklist.map(({id, item}, index) => {
                return(
                  <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                      <p className='task-text' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                        {item}
                      </p>
                  )}
                  
                  </Draggable>
                )
              })}
            </div>
          )}
        </Droppable>

        <Droppable Id='taskdaily' >      
          {(provided) => (
            <div className='card' {...provided.droppableProps} ref={provided.innerRef}>
              <h3 className='card--header'> Daily Tasks</h3>
            </div>

          )}
        </Droppable>
      </DragDropContext>
  </div>
  )
}


export default Tasks;