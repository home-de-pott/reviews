import React from 'react';
import axios from 'axios';
import ReviewsSummary from './components/reviewsSummary';
import IndividualReview from './components/individualReview';
import ReviewFormPopup from './components/formPopup';

// allow user to vote usefulness of reviews
// conditionally render images div and reviews, "no reviews, be the first"

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          componentHeader: "Customer Reviews",
          avgReviews: 0,
          ratingsBreakdown: {},
          reviews: [],
          enlargedImgViewURL: '',
          showReviewForm: false,
          addedWindowListener: false
      }
      this.listenForImageClickToEnlarge = this.listenForImageClickToEnlarge.bind(this);
      this.toggleReviewForm = this.toggleReviewForm.bind(this);
      this.submitReviewForm = this.submitReviewForm.bind(this);
    }
  
  addWindowListenerOnce() {
    if (!this.state.addedWindowListener) {
      window.addEventListener('getProduct', event => {
        this.getReviews(event.detail.id);
      });
      this.setState({ addedWindowListener: true});
    }
  }

  componentDidMount() {
    // Get reviews based on id
    this.addWindowListenerOnce();
    const id = window.location.pathname.slice(10);
    this.getReviews(id);
  }

  updateAvgRating() {
    // Update average block display
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
    // Update stars display
    this.updateStars();
  }

  updateStars() {
    const rating = this.state.avgReviews;
    const starTotal = 5;
    const starPercentage = (rating / starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    document.querySelector('.RVWSstars > span').style.width = starPercentageRounded; 
  }

  getReviews(id) {
    axios.get(`http://homedepottreviews.us-east-2.elasticbeanstalk.com/reviews/${id}`)
      .then((reviews) => {
        this.setState({ reviews: reviews.data });
      })
      .then(() => {
        this.updateAvgRating();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  listenForImageClickToEnlarge(event) {
    const enlarge = document.getElementsByClassName("RVWSenlargedImageContainer")[0];
    const img = document.getElementById(event.target.getAttribute('id'));
    this.setState({ enlargedImgViewURL: img.getAttribute('src')});
    enlarge.style.display = "block";
    // Get the <span> element that closes the enlarged image
    const close = document.getElementsByClassName("RVWSclose")[0];
    // When the user clicks on <span> (x), close the modal
    close.onclick = function () {
      enlarge.style.display = "none";
    }
  }

  toggleReviewForm() {
    const showForm = this.state.showReviewForm ? false : true;
    this.setState({showReviewForm: showForm});
  }

  submitReviewForm(id, newReview) {
    axios.post(`http://homedepottreviews.us-east-2.elasticbeanstalk.com/writeReview/${id}`, newReview)
    .then(() => this.getReviews(id))
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
      return (
        <section>

          {/* Enlarged image on click */}
          <span className="RVWSenlargedImageContainer">
            <span className="RVWSclose">&times;</span>
            <img className="RVWSimageToEnlarge" src={this.state.enlargedImgViewURL}></img>
          </span>

          {/* Review Popup Form */}
          {
            this.state.showReviewForm
            ?
            <ReviewFormPopup 
              toggleReviewForm = {this.toggleReviewForm}
              submitReviewForm = {this.submitReviewForm}
            />
            :
            ''
          }

          <div className="RVWSbottomBorder" style={{ paddingBottom: '30px' }}>
            <div className= "RVWSbottomBorder">
              <h2 className= "RVWSreviewsHeader">{this.state.componentHeader}</h2>
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