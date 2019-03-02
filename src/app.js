import React from 'react';
import {render} from 'react-dom';
import './app.css';
// require('./index.css');

class App extends React.Component {
    render () {
        return(
            <div>
                <p>Hello World yess</p>
            </div>
        )
    }
}
render(
    <App/>, document.getElementById('root')
)
