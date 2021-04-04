import React from 'react';
import Task from './Task';

class Mobile extends React.Component {
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

    updateVal = (event) => {
        this.props.onUpdateValue(event.target.value);
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
                <div className="selector">
                    <label for="list-choice">Select Column:</label>
                    <select id="list-choice" value={this.props.value} onChange={this.updateVal}>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Review">Review</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div className="list-holder">
                    { this.props.value === "To Do" ? (
                    <ul className="task-group-odd">
                        <h2>Todo</h2>
                        { todoTask }
                    </ul>
                    ) : null }

                    { this.props.value === "In Progress" ? (
                    <ul className="task-group-even">
                        <h2>In Progress</h2>
                        { inprogTask }
                    </ul>
                    ) : null }

                    { this.props.value === "Review" ? (
                    <ul className="task-group-odd">
                        <h2>Review</h2>
                        { revTask }
                    </ul>
                    ) : null }

                    { this.props.value === "Done" ? (
                    <ul className="task-group-even">
                        <h2>Done</h2>
                        { doneTask }
                    </ul>
                    ) : null }
                </div>
            </div>
        )
    }
}

export default Mobile;