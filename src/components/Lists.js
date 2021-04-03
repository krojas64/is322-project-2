import React from 'react';
import Item from './Item';

class Lists extends React.Component {

    // Change markDone so that it can move to the columns next to it
    markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        taskList.splice(taskIndex, 1);
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
      }
    
    renderTaskItem = (task) => {
        return <Item task={task} poster={task.poster} Important={task.Important} key={task.id} markDone={this.markDone} />
      }
    
    render() {
        const todoTask = this.props.tasks.filter(task => task.column === 'To Do').map(this.renderTaskItem)
        const inprogTask = this.props.tasks.filter(task => task.column === 'In Progress').map(this.renderTaskItem)
        const revTask = this.props.tasks.filter(task => task.column === 'Review').map(this.renderTaskItem)
        const doneTask = this.props.tasks.filter(task => task.column === 'Done').map(this.renderTaskItem)
        console.log(todoTask);
    
        const taskItems = this.props.tasks.map(task => {
          return <Item task={task} key={task.id} markDone={this.markDone} />
        });


        return (
            <div className="list-holder">
                <ul className="task-group-odd">
                    <h2>Todo</h2>
                    { todoTask }
                </ul>
        
                <ul className="task-group-even">
                    <h2>In Progress</h2>
                    { inprogTask }
                </ul>
        
                <ul className="task-group-odd">
                    <h2>Review</h2>
                    { revTask }
                </ul>
        
                <ul className="task-group-even">
                    <h2>Done</h2>
                    { doneTask }
                </ul>
            </div>
        )
    }
}

export default Lists;