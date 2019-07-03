import './config';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux';
import Routers from './routers';

let store = createStore(reducers);

// const mapStateToProps = (state) => {
//   return {...state}
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     header: hasHeader => {
//       dispatch({type:'UI/HERADER', ui: {header:hasHeader}})
//     },
//     login: user => {
//       dispatch({type: 'APP/LOGIN', app: {user:user}})
//     }
//   }
// }

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
