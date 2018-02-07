import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios' 

class View extends React.Component {
    constructor(props){
        super(props)
        this.getData = this.getData.bind(this);
        this.getSpecficSearch = this.getSpecficSearch.bind(this);
        this.state = {
            words: [],
            search:[],
            sentiment: null,
            term: null
        }
    }

    getSpecficSearch(search) {
        axios.get(`/api/search/`, {
            params: {
              query: `${search}`
            }
          })
            .then(response => {
                console.log('response', response)
                this.setState({
                    search: response.data,
                    sentiment: response.data[0][4],
                    term: search
                })
            }).catch(console.log('error'))
        
        }

    getData() {
        axios.get('/api')
            .then(response => {
                this.setState({
                   words: response.data 
                })
            }).catch(console.log('error'))
         }
    
    render () {
        return (
            <div>
                <h1 className="title">SentimenTap</h1>
                <h3>{this.state.sentiment === null ? `Enter brand for sentiment!` : `The average sentiment is ${this.state.sentiment} for ${this.state.term}`}</h3>
                {/* <button className="btn btn-success" onClick={()=>{this.getData()}}>Click Me</button> */}
                <button className="btn" onClick={()=>{this.getSpecficSearch(document.getElementById('brand').value)}}>SEARCH TWITTER</button>
                <input className="col-7-lg"  type='text' id="brand" style={{color:'blue', height:'33px', 'border-radius':'5px'}}/>
                <h4>{(this.state.search).map(each => <ul>{each}</ul>)}</h4>               
            </div>
        )
    }
}  

module.exports = View