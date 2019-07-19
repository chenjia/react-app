import React from 'react';
let myChart = null;
class Echarts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      init: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.update(nextProps.options);
  }

  componentDidMount() {
    this.update(this.props.options);
  }

  update = (options) => {
    let echarts = require('echarts/lib/echarts')
    let chinaJson = require('./china')
    require('./macarons')
    require('echarts/lib/chart/bar')
    require('echarts/lib/chart/line')
    require('echarts/lib/chart/pie')
    require('echarts/lib/chart/radar')
    require('echarts/lib/chart/funnel')
    require('echarts/lib/chart/gauge')
    require('echarts/lib/chart/map')
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    require('echarts/lib/component/legend')
    if(this.state.init){
      myChart = echarts.getInstanceByDom(this.refs.myChart)
    }else{
      myChart = echarts.init(this.refs.myChart, 'macarons')
      this.setState({
        init: true
      });
    }
    echarts.registerMap('china', chinaJson)
    myChart.setOption(options, true)
  }

  render() {
    return (
      <div style={{width: this.props.width+'px', height: this.props.height+'px'}} ref="myChart"></div>
    );
  }
}

export default Echarts;