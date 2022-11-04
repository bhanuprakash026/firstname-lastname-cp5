// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
    console.log('clicked')
  }

  onLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
    console.log('Clicked')
  }

  render() {
    const {isFirstName} = this.state
    const {isLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="header">Show/Hide</h1>

        <div className="container">
          <div className="btn-container">
            <button className="btn" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {isFirstName && (
              <div className="name-container">
                <p className="name">Joe</p>
              </div>
            )}
          </div>
          <div className="btn-container">
            <button className="btn" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {isLastName && (
              <div className="name-container">
                <p className="name">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
