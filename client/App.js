import React from 'react';
import axios from 'axios';
import ReviewsSummary from './components/reviewsSummary';
import IndividualReview from './components/individualReview';
import ReviewFormPopup from './components/formPopup';

// delete fullReviews component
// delete imageCarousel component
// consider overriding mongodb's id for faster searching
// break up updateAverageRating
// allow user to post reviews
// allow user to vote usefulness of reviews

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentHeader: "Customer Reviews",
            avgReviews: 0,
            ratingsBreakdown: {},
            reviews: [],
            enlargedImgViewURL: '',
            showReviewForm: false
        }
        this.listenForImageClickToEnlarge = this.listenForImageClickToEnlarge.bind(this);
        this.toggleReviewForm = this.toggleReviewForm.bind(this);
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
      const rating = this.state.avgReviews;
      const starTotal = 5;
      const starPercentage = (rating / starTotal) * 100;
      const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
      document.querySelector('.stars > span').style.width = starPercentageRounded; 
    }

    componentDidMount() {
      // get reviews and update avg
      const id = window.location.pathname.slice(10);
      axios.get(`http://ec2-18-219-134-212.us-east-2.compute.amazonaws.com/reviews/${id}`)
      .then((reviews) => {
        this.setState({reviews: reviews.data});
      })
      .then(() => {
        this.updateAvgRating();
        this.setUpEventListeners();
      })
      .catch((err) => {
        console.log(err);
      });
    }

    setUpEventListeners() {
      // future window listener for id
    }

    listenForImageClickToEnlarge(event) {
      const enlarge = document.getElementsByClassName("enlargedImageContainer")[0];
      const img = document.getElementById(event.target.getAttribute('id'));
      this.setState({ enlargedImgViewURL: img.getAttribute('src')});
      enlarge.style.display = "block";
     
      // Get the <span> element that closes the enlarged image
      const close = document.getElementsByClassName("close")[0];
      // When the user clicks on <span> (x), close the modal
      close.onclick = function () {
        enlarge.style.display = "none";
      }
    }

    toggleReviewForm() {
      const showForm = this.state.showReviewForm ? false : true;
      this.setState({showReviewForm: showForm});
    }

    render() {
        return (
          <section>

            {/* Enlarged image on click */}
            <span className="enlargedImageContainer">
              <span className="close">&times;</span>
              <img className="imageToEnlarge" src={this.state.enlargedImgViewURL}></img>
            </span>

            {/* Review Popup Form */}
            {
              this.state.showReviewForm
              ?
              <ReviewFormPopup toggleReviewForm = {this.toggleReviewForm}/>
              :
              ''
            }

            <div className="bottomBorder" style={{ paddingBottom: '30px' }}>
                <div className = "bottomBorder">
                  <h2 className = "reviewsHeader">{this.state.componentHeader}</h2>
                </div>
                <ReviewsSummary 
                  toggleReviewForm = {this.toggleReviewForm}
                  reviews = {this.state.reviews}
                  rating = {this.state.avgReviews}
                  totalReviews = {this.state.reviews ? this.state.reviews.length : 0}
                  ratingsBreakdown = {this.state.ratingsBreakdown}
                  imageOnClick={this.listenForImageClickToEnlarge}
                />
            </div>
                <IndividualReview 
                  reviews = {this.state.reviews}
                  imageOnClick = {this.listenForImageClickToEnlarge}
                />
          </section>
        )
    }
}

export default App;