import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Page2.css'
export default class Page3 extends Component {
  render() {
    return (
      <div>
      <div className="main1">
        <h1>
            Hello!
        </h1>
        </div>
        <div className="main2">
        <Link to="/">Go to HomePage</Link>
        <br></br>
        <Link to="/page2">Go to Page 2</Link>
        <br></br>
        <Link to="/page4">Go to Page 4</Link>
      </div>
      </div>
    )
  }
}
