import React from 'react';
import axios from 'axios';
import Lists from './Lists';

class App extends React.Component {
    state = {
        tasks: [],
        errorMessage: ''
    }

    componentDidMount() {
        this.getData();
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

    render() {
        console.log(this.state.tasks);
        return (
            <div className="container">
                <h2>TaskBoard</h2>
                <Lists tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}/>
            </div>
        );
    }
}

export default App;