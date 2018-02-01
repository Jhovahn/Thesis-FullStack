import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios' 
// var server = require('../../../db/index.js')


class View extends React.Component {
    constructor(props){
        super(props)
        this.getData = this.getData.bind(this)
        this.state = {
            words: []
        }
    }


    getData() {
        axios.get('/api')
            .then(response => {
                this.setState({
                   words: response.data 
                })
             //   var arr = this.state.words.map(word => word+'\n')
            }).catch(console.log('error'))
         }


    render () {
        return (
            <div>
                <h1>SentimenTap</h1>
                <button onClick={()=>{this.getData()}}>Click Me</button>
                <h1>{this.state.words}</h1>
            </div>
        )
    }
}  

module.exports = View