import React from 'react';
import axios from 'axios';
import FullReviews from './components/fullReviews';
import ImageCarousel from './components/imageCarousel';
import ReviewsSummary from './components/reviewsSummary';

// hook up db

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentHeader: "Customer Reviews",
            avgReviews: 0,
            reviews: []
        }
    }

    updateAvgRating() {
      const reviews = this.state.reviews;
      let newAvg = 0;
      for (let i = 0; i < reviews.length; i++) {
        newAvg += reviews[i].rating;
      }
      newAvg = (newAvg / reviews.length).toFixed(1);
      this.setState({avgReviews: newAvg});
    }

    componentDidMount() {
      // get reviews and update avg
      axios.get('/reviews')
      .then(({data}) => {
        this.setState({reviews: data});
      })
      .then(() => this.updateAvgRating());
    }

    render() {
        return (
            <div>
                <div className = "componentHeader">
                  <h2>{this.state.componentHeader}</h2>
                </div>
                <ReviewsSummary avg = {this.state.avgReviews}/>
                <ImageCarousel />
                <FullReviews reviews = {this.state.reviews}/>
            </div>
        )
    }
}

export default App;