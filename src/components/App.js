import React from 'react';
import axios from 'axios';

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

    render() {
        console.log(this.state.tasks);
        return (
            <div className="container">
            <h1>TESTING! AGAIN!</h1>
            <div>{ this.state.tasks["poster"] }</div>
            </div>
        );
    }
}

export default App;