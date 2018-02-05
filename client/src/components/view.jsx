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
            search:[]
        }
    }

    getSpecficSearch(search) {
        axios.get(`/api/search/`, {
            params: {
              query: `${search}`
            }
          })
            .then(response => {
                console.log("responsse")
                this.setState({
                    search: response.data
                })
            }).catch(console.log('error'))
        }

    // componentWillMount()
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
                {/* <button className="btn btn-success" onClick={()=>{this.getData()}}>Click Me</button> */}
                <button className="btn btn-success" onClick={()=>{this.getSpecficSearch(document.getElementById('brand').value)}}>SEARCH TWITTER</button>
                <input className="col-7-lg" type='text' id="brand" style={{color:'blue'}}/>
                <h3>{this.state.words}</h3> 
                <h4>{(this.state.search).map(each => <ul>{each}</ul>)}</h4>               
            </div>
        )
    }
}  

module.exports = View