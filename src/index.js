import './config';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/global.css';
import { createStore } from 'redux';
import reducers from './redux';
import Routers from './routers';
let fastclick = require('fastclick')
fastclick.attach(document.body)
let store = createStore(reducers);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Provider store={store}>
        <Routers {...this.props}/>
      </Provider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
