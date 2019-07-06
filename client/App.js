import React from 'react';
import axios from 'axios';
import ReviewsSummary from './components/fullReviews';
import ImageCarousel from './components/imageCarousel';
import FullReviews from './components/reviewsSummary';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentHeader: "Customer Reviews"
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
            <div>
                <div className = "componentHeader">
                  <h2>{this.state.componentHeader}</h2>
                </div>
                <ImageCarousel />
                <FullReviews />
                <ReviewsSummary />
            </div>
        )
    }
}

export default App;