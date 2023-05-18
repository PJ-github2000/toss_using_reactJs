/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'
import './index.css'

const HeadImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {imageUrl: HeadImage, headCount: 0, tailCount: 0}

  clickOn = () => {
    const {imageUrl, headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let headortailimage = ''
    let totalHeads = headCount
    let totalTails = tailCount
    if (toss === 0) {
      headortailimage = HeadImage
      totalHeads += 1
    } else {
      headortailimage = TailImage
      totalTails += 1
    }
    this.setState({
      imageUrl: headortailimage,
      headCount: totalHeads,
      tailCount: totalTails,
    })
  }

  render() {
    const {imageUrl, headCount, tailCount} = this.state
    const totalTrails = headCount + tailCount
    return (
      <div className="background-container">
        <div className="inner-box">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <button className="button" type="button" onClick={this.clickOn}>
            Toss Coin
          </button>
          <div className="count-box">
            <p>Total: {totalTrails}</p>
            <p>Heads: {headCount} </p>
            <p>Tails: {tailCount} </p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
