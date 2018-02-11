import React from 'react';
import ReactDOM from 'react-dom';
import View from './components/view.jsx'
import Sentiment from './components/sentiment.jsx'
//import LineChart from './components/chart.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            <View />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
