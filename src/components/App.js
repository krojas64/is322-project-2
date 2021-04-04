import React from 'react';
import axios from 'axios';
import Lists from './Lists';
import Mobile from './Mobile';

const MOBILE_BREAKPOINT = 768;

class App extends React.Component {
    state = {
        tasks: [],
        errorMessage: '',
        breakpoint: 'desktop',
        value: 'To Do'
    }

    componentDidMount() {
        this.getData();
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    handleResize = () => {
        const width = window.innerWidth;
        let newBreakpoint = 'desktop';

        if(width < MOBILE_BREAKPOINT){
            newBreakpoint = 'mobile';
        } else {
            newBreakpoint = 'desktop';
        }

        this.setState({ breakpoint: newBreakpoint });
    }

    getData() {
        axios.get('https://my-json-server.typicode.com/krojas64/p2-db/task')
        .then(response => {
            this.setState({ tasks: response.data });
        }).catch(error => {
            this.setState({ errorMessage: error.message });
        });
    }
    
    onUpdateTaskList = (newTaskList) => {
        this.setState({ tasks: newTaskList });
      }

    onUpdateValue = (newValue) => {
        this.setState({value: newValue});
    }

    render() {
        if (this.state.breakpoint === 'desktop') {
            return (
                <div className="TaskBoard">
                    <h2>TaskBoard</h2>
                    <Lists tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}/>
                </div>
            );
        } else if (this.state.breakpoint === 'mobile') {
            return (
                <div className="TaskBoard">
                    <h2>TaskBoard</h2>
                    <Mobile tasks={this.state.tasks} 
                        value={this.state.value} 
                        onUpdateTaskList={this.onUpdateTaskList}
                        onUpdateValue={this.onUpdateValue}/>
                </div> 
            );
        }
    }
}

export default App;