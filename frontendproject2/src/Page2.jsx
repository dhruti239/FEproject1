import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Page2.css'

export default class Page2 extends Component {
  render() {
    return (
      <div>
      <div className="main1">
        <h1>
            Hello?
        </h1>
        </div>
        <div id="text1">
        <h2>This is dhruti</h2>
        </div>
        <div className="link1">
         <Link to="/">Go to HomePage</Link>
         <br></br>
         <Link to="/page3">Go to Page 3</Link>
         <br></br>
         <Link to="/page4">Go to Page 4</Link>
      </div>
      </div>
    )
  }
}
