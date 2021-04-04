import React from 'react';
import Task from './Task';

class Lists extends React.Component {

    // Change markDone so that it can move to the columns next to it
    moveTask = (task, move) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        let taskColumn = taskList[taskIndex]["column"];
        if(taskColumn === "To Do" && move === 1){
            taskList[taskIndex]["column"] = "In Progress";
        } 

        if (taskColumn === "In Progress" && move === 1){
            taskList[taskIndex]["column"] = "Review";    
        } else if (taskColumn === "In Progress" && move === 0){
            taskList[taskIndex]["column"] = "To Do"; 
        }

        if (taskColumn === "Review" && move === 1){
            taskList[taskIndex]["column"] = "Done";
        } else if (taskColumn === "Review" && move === 0){
            taskList[taskIndex]["column"] = "In Progress";
        }

        if (taskColumn === "Done" && move === 0){
            taskList[taskIndex]["column"] = "Review";
        }

        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }
    
    renderTaskItem = (task) => {
        return <Task task={task} 
            poster={task.poster} 
            Important={task.Important} 
            column={task.column} 
            key={task.id} 
            moveTask={this.moveTask} />
    }
    
    render() {
        const todoTask = this.props.tasks.filter(task => task.column === 'To Do').map(this.renderTaskItem)
        const inprogTask = this.props.tasks.filter(task => task.column === 'In Progress').map(this.renderTaskItem)
        const revTask = this.props.tasks.filter(task => task.column === 'Review').map(this.renderTaskItem)
        const doneTask = this.props.tasks.filter(task => task.column === 'Done').map(this.renderTaskItem)
    
        const taskItems = this.props.tasks.map(task => {
          return <Task task={task} key={task.id} markDone={this.markDone} />
        });


        return (
            <div className="list-background">
                <div className="list-holder">
                    <ul className="task-group-odd">
                        <h2>Todo</h2>
                        <hr></hr>
                        { todoTask }
                    </ul>
            
                    <ul className="task-group-even">
                        <h2>In Progress</h2>
                        <hr></hr>
                        { inprogTask }
                    </ul>
            
                    <ul className="task-group-odd">
                        <h2>Review</h2>
                        <hr></hr>
                        { revTask }
                    </ul>
            
                    <ul className="task-group-even">
                        <h2>Done</h2>
                        <hr></hr>
                        { doneTask }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Lists;