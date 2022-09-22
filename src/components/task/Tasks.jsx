import task from "../../static/tasks";
import './tasks.css';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { useState, useEffect } from "react";

const Tasks = () => {
  const [weekly, setWeekly] = useState(task);
  const [ daily, setDaily ] = useState([])
  
  useEffect( () => {
    setWeekly(task)
  }, [])

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId){
      if (source.droppableId === 'taskweekly'){
        let newWeeklyTask = Array.from(weekly);
        const [reOrdered] = newWeeklyTask.splice(source.index, 1);
        newWeeklyTask.splice(destination.index, 0, reOrdered);

        setWeekly(newWeeklyTask)
      } else {
        let newDailyTAsk = Array.from(daily)
        const [reOrdered] = newDailyTAsk.splice(source.index, 1);
        newDailyTAsk.splice(destination.index, 0, reOrdered);

        setDaily(newDailyTAsk);
      }
    } else {
      let newWeeklyTask = weekly;
      let newDailyTAsk = daily;
      
      if (source.droppableId === 'taskweekly'){
        const [removed] = newWeeklyTask.splice(source.index, 1)
        newWeeklyTask.splice(destination.index, 0, removed)

        setWeekly(newWeeklyTask)
        setDaily(newDailyTAsk)
      } else {
        const [removed] = newDailyTAsk.splice(source.index, 1)
        newDailyTAsk.splice(destination.index, 0, removed)

        setWeekly(newWeeklyTask)
        setDaily(newDailyTAsk)
      }
    }


  }


  return (
    <div className='card-div ' >
      <DragDropContext onDragEnd={onDragEnd}> 
        <Droppable droppableId='taskweekly' >
          {(provided,) => (            
            <div className='card' {...provided.droppableProps} ref={provided.innerRef}>
              <h3 className='card--header'> Weekly Tasks</h3>
              {weekly.map(({id, content}, index) => {
                return(
                  <Draggable key={id} draggableId={id} index={index}>
                  {(provided, snapshot) => (
                      <p className='task-text' 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps} 
                        ref={provided.innerRef} 
                        // style={{
                        //   background: snapshot.isDragging ? 'var(--primary)' : '',
                        //   color: snapshot.isDragging ? 'var(--primaryText)' : '',
                        //   marginBottom: snapshot.isDragging ? '10px' : 'inherit'
                        // }}
                      >
                        {content}
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
            <p></p>
            {provided.placeholder}
            </div>

          )}
        </Droppable>
      </DragDropContext>
  </div>
  )
}


export default Tasks;