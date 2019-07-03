import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "hello world reviews component"
        }
    }
    //comment
    // componentDidMount() {
    //     axios.get('/')
    //     .then((data) => {
    //         this.setState({data: data});
    //     })
    // }
    render() {
        return (
            <div>{this.state.data}</div>
        )
    }
}

export default App;