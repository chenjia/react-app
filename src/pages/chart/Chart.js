import React from 'react';
import { NavBar, TabBar } from 'antd-mobile';
import Echarts from '../../components/Echarts';

const items = [{
  title: '柱',
  type: 'bar',
  datas: {
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  }
}, {
  title: '线',
  type: 'line',
  datas: {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['最高气温', '最低气温']
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: {readOnly: false},
        magicType: {type: ['line', 'bar']},
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    series: [{
      name: '最高气温',
      type: 'line',
      data: [11, 11, 15, 13, 12, 13, 10],
      markPoint: {
        data: [
        {type: 'max', name: '最大值'},
        {type: 'min', name: '最小值'}
        ]
      },
      markLine: {
        data: [
        {type: 'average', name: '平均值'}
        ]
      }
    },
    {
      name: '最低气温',
      type: 'line',
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [
        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
        ]
      },
      markLine: {
        data: [{
          type: 'average',
          name: '平均值'
        }, [{
          symbol: 'none',
          x: '90%',
          yAxis: 'max'
        }, {
          symbol: 'circle',
          label: {
            normal: {
              position: 'start',
              formatter: '最大值'
            }
          },
          type: 'max',
          name: '最高点'
        }]
        ]
      }
    }
    ]
  }
}, {
  title: '圆',
  type: 'pie',
  datas: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],

      label: {
        normal: {
          position: 'inner'
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [{
        value: 335,
        name: '直达',
        selected: true
      }, {
        value: 679,
        name: '营销广告'
      }, {
        value: 1548,
        name: '搜索引擎'
      }]
    }, {
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '55%'],

      data: [{
        value: 335,
        name: '直达'
      }, {
        value: 310,
        name: '邮件营销'
      }, {
        value: 234,
        name: '联盟广告'
      }, {
        value: 135,
        name: '视频广告'
      }, {
        value: 1048,
        name: '百度'
      }, {
        value: 251,
        name: '谷歌'
      }, {
        value: 147,
        name: '必应'
      }, {
        value: 102,
        name: '其他'
      }]
    }]
  }
}, {
  title: '雷',
  type: 'radar',
  datas: {
    tooltip: {},
    radar: {
      indicator: [{
        name: '销售',
        max: 6500
      }, {
        name: '管理',
        max: 16000
      }, {
        name: '信息技术',
        max: 30000
      }, {
        name: '客服',
        max: 38000
      }, {
        name: '研发',
        max: 52000
      }, {
        name: '市场',
        max: 25000
      }]
    },
    series: [{
      name: '预算 vs 开销',
      type: 'radar',
      data: [{
        value: [4300, 10000, 28000, 35000, 50000, 19000],
        name: '预算分配（Allocated Budget）'
      }, {
        value: [5000, 14000, 28000, 31000, 42000, 21000],
        name: '实际开销（Actual Spending）'
      }]
    }]
  }
}, {
  title: '漏',
  type: 'funnel',
  datas: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    legend: {
      data: ['展现', '点击', '访问', '咨询', '订单']
    },
    series: [{
      name: '预期',
      type: 'funnel',
      left: '10%',
      width: '80%',
      label: {
        normal: {
          formatter: '{b}预期'
        },
        emphasis: {
          position: 'inside',
          formatter: '{b}预期: {c}%'
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          opacity: 0.7
        }
      },
      data: [
      {value: 60, name: '访问'},
      {value: 40, name: '咨询'},
      {value: 20, name: '订单'},
      {value: 80, name: '点击'},
      {value: 100, name: '展现'}
      ]
    }, {
      name: '实际',
      type: 'funnel',
      left: '10%',
      width: '80%',
      maxSize: '80%',
      label: {
        normal: {
          position: 'inside',
          formatter: '{c}%',
          textStyle: {
            color: '#fff'
          }
        },
        emphasis: {
          position: 'inside',
          formatter: '{b}实际: {c}%'
        }
      },
      itemStyle: {
        normal: {
          opacity: 0.5,
          borderColor: '#fff',
          borderWidth: 2
        }
      },
      data: [
      {value: 30, name: '访问'},
      {value: 10, name: '咨询'},
      {value: 5, name: '订单'},
      {value: 50, name: '点击'},
      {value: 80, name: '展现'}
      ]
    }
    ]
  }
}, {
  title: '仪',
  type: 'gauge',
  datas: {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        restore: {},
        saveAsImage: {}
      }
    },
    series: [{
      name: '业务指标',
      type: 'gauge',
      detail: {
        formatter: '{value}%'
      },
      data: [{
        value: 54,
        name: '完成率'
      }]
    }]
  }
}, {
  title: '地',
  type: 'map',
  datas: {
    tooltip: {
      trigger: 'item',
      formatter: '{b}'
    },
    series: [{
      name: '中国',
      type: 'map',
      mapType: 'china',
      selectedMode: 'multiple',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      data: [{
        name: '广东',
        selected: true
      }]
    }]
  }
}];

class Chart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 'bar',
    }
  }

  getData = (active) => {
    for (let item of items) {
      if (active === item.type){
        return item.datas;
      }
    }
  }

  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent={(<i onClick={()=>this.props.history.push('./home')} className={'fa fa-fw fa-chevron-left'} />)}
        >图表</NavBar>

        <Echarts type={this.state.active} width={this.props.screenWidth} height={this.props.screenHeight-95} options={this.getData(this.state.active)} />

        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {items.map((item, index) => (
            <TabBar.Item icon={<div style={{transition: 'all 200ms'}}>{item.title}</div>} selectedIcon={<div style={{transition: 'all 200ms', fontSize: '18px'}}>{item.title}</div>} key={item.type} selected={this.state.active === item.type}
              onPress={() => {
                this.setState({
                  active: item.type,
                });
              }}
            ></TabBar.Item>
          ))}
        </TabBar>
      </div>
    );
  }
}

export default Chart;