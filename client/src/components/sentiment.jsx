import React from 'react'
import ReactDOM from 'react-dom'

//  var score = require('../../server/routes/api')


var sentiment = require('sentiment');

class Sentiment extends React.Component {
    constructor(props) {
        super(props)

        state: {
            sentiment: null;
        }

    }
  
    render() {
        return (
            <div>
                <h1>{sentiment('berlin in great').score}</h1>
            </div>
        )
    }
}

module.exports = Sentiment

// let r1 = sentiment('cats are stupid')