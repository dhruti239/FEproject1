import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Page3.css'

export default class Page4 extends Component {
  render() {
    return (
      
        <div className="content">
        
            <div className="header">
                header
            </div>
            <div className="body">
                body
                </div>
            <div className="footer">
                footer
                </div>
            <Link to="/">Go to HomePage</Link>
            <br></br>
            <Link to="/page2">Go to Page 2</Link>
            <br></br>
            <Link to="/page3">Go to Page 3</Link>
         </div>
    )
  }
}
