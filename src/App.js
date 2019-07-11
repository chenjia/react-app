import React from 'react';
import ReactDOM from 'react-dom';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux';
import Routers from './routers';

window.Config = {
  appVersion:'1.0.0',
  nativeVersion:'1.0',
  server: 'http://10.238.8.34',
  appDownloadUrl:'',
  chcpUrl:'',
  key:'ed26d4cd99aa11e5b8a4c89cdc776729',
  random:(''+Math.random()).substr(2),
  preload: 3000
}

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

ReactDOM.render(<App />, document.getElementById('root'));
