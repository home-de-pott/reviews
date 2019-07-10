import React from 'react';
import axios from 'axios';
import FullReviews from './components/fullReviews';
import ImageCarousel from './components/imageCarousel';
import ReviewsSummary from './components/reviewsSummary';

// get or generate reviews
// hook up db

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentHeader: "Customer Reviews",
            avgReviews: 0,
            ratingsBreakdown: {},
            reviews: []
        }
    }

    updateAvgRating() {
      const ratingsByStars = [0, 0, 0, 0, 0];
      const reviews = this.state.reviews;
      let newAvg = 0;
      for (let i = 0; i < reviews.length; i++) {
        const rating = reviews[i].rating;
        newAvg += rating;
        ratingsByStars[rating - 1] = ratingsByStars[rating - 1] + 1 || 1;
      }
      newAvg = (newAvg / reviews.length).toFixed(1);
      this.setState({
        avgReviews: newAvg, 
        ratingsBreakdown: ratingsByStars
      });
    }

    componentDidMount() {
      // get reviews and update avg
      // 100550897
      // 205594063
      axios.get('/products/205594063')
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
                <ReviewsSummary 
                  avg = {this.state.avgReviews}
                  ratingsBreakdown = {this.state.ratingsBreakdown}
                />
                <ImageCarousel />
                <FullReviews reviews = {this.state.reviews}/>
            </div>
        )
    }
}

export default App;