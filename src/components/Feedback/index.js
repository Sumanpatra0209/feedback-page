// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="insideFeedbackContainer">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojisList">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emojiBtn"
                onClick={this.onClickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <span className="emojiName">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="insideFeedbackThanksContainer">
        <img src={loveEmojiUrl} alt="love emoji" className="loveEmoji" />
        <h1 className="thankYouHeading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="appContainer">
        <div className="insideFeedbackContainer">
          {isFeedbackSelected
            ? this.renderThankyouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
