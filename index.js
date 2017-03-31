import React, { Component } from 'react'

import ScrollVertical from './scrollVertical'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // 测试数据
    let data = []
    for(let i=4; i--; ) {
      data.push({content: 'animatedScroll ' + i})
    }
    return (
      <Temp
        data={data}
        delay={1000}
        duration={300}
        scrollHeight={40}
        scrollStyle={{backgroundColor:'skyblue', paddingLeft:20}}
        textStyle={{color:'#666', fontSize:20}}/>
    )
  }
}