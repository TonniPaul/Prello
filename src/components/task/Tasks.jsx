import './tasks.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';

const Tasks = ({data, deleteTask}) => {
  const [weekly, setWeekly] = useState([]);
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    setWeekly(data)
  },[data])

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === 'taskweekly') {
        let newWeeklyTask = Array.from(weekly);
        const [reOrdered] = newWeeklyTask.splice(source.index, 1);
        newWeeklyTask.splice(destination.index, 0, reOrdered);

        setWeekly(newWeeklyTask);
      } else {
        let newDailyTAsk = Array.from(daily);
        const [reOrdered] = newDailyTAsk.splice(source.index, 1);
        newDailyTAsk.splice(destination.index, 0, reOrdered);

        setDaily(newDailyTAsk);
      }
    } else {
      // dragging to another column
      if (source.droppableId === 'taskweekly') {
        // from taskweekly to taskdaily

        // save the currently dragged task
        const item = weekly[source.index];

        // remove the task from the weekly array (taskweekly)
        setWeekly((prevState) =>
          prevState.filter((task) => task.id !== result.draggableId)
        );

        // add the task to the daily array (taskdaily)
        setDaily((prevState) => {
          // create a brand new array. don't wannna directly modify the original array state
          const newState = [...prevState];
          newState.splice(destination.index, 0, item);
          return newState;
        });
      } else {
        // from taskdaily to taskweekly

        // save the currently dragged task
        const item = daily[source.index];

        // remove the task from the daily array (taskdaily)
        setDaily((prevState) =>
          prevState.filter((task) => task.id !== result.draggableId)
        );

        // add the task to the weekly array (taskweekly)
        setWeekly((prevState) => {
          // create a brand new array. don't wannna directly modify the original array state
          const newState = [...prevState];
          newState.splice(destination.index, 0, item);
          return newState;
        });
      }
    }
  };

  return (
    <div className="card-div ">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="taskweekly">
          {(provided, snapshot) => (
            <div
              className= 'card'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h3 className="card--header"> Weekly Tasks</h3>
              {weekly.map(({ id, content }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                      <p
                        className="task-text"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={{
                            userSelect: "none",
                            padding: 16,
                            margin: "10px",
                            minHeight: "50px",
                            backgroundColor: snapshot.isDragging
                                ? "var(--primary)"
                                : "",
                            color: snapshot.isDragging ? 'var(--primaryText)' : 'inherit',
                            ...provided.draggableProps.style
                        }}
                      >
                        {content}
                        <span className="material-symbols-outlined red" onClick={() => {deleteTask(id)}}> delete</span>
                      </p>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="taskdaily">
          {(provided, snapshot) => (
            <div
              // add some styling when there is a dragover event
              className={`card ${snapshot.isDraggingOver && 'card--drag_over'}`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h3 className="card--header"> Daily Tasks</h3>
              {daily.map(({ id, content }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                      <p
                        className="task-text"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={{
                            userSelect: "none",
                            padding: 16,
                            margin: "10px",
                            minHeight: "50px",
                            backgroundColor: snapshot.isDragging
                                ? "var(--primary)"
                                : "",
                            color: snapshot.isDragging ? 'var(--primaryText)' : 'inherit',
                            ...provided.draggableProps.style
                        }}
                      >
                        {content}
                        <span className="material-symbols-outlined red" onClick={() => {deleteTask(id)}}> delete</span>
                      </p>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
