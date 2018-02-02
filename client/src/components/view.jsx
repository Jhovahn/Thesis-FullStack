import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios' 
//const css = require('./test.css').toString();
// var server = require('../../../db/index.js')




class View extends React.Component {
    constructor(props){
        super(props)
        this.getData = this.getData.bind(this);
        this.accessDatabase = this.accessDatabase.bind(this);
        this.state = {
            words: [],
            database: []
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
    
    accessDatabase() {
        axios.get('/database')
            .then(response => {
                this.setState({
                    database: response
                })
            console.log(response)
        })
    }


    render () {
        return (
            <div>
                <h1 className="title">SentimenTap</h1>
                <button onClick={()=>{this.getData()}}>Click Me</button>
                <button onClick={()=> this.accessDatabase()}>Database</button>
                <h2>{this.state.database}</h2>
                <h1>{this.state.words}</h1>
                
            </div>
        )
    }
}  

module.exports = View