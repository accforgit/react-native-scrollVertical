# react-native-scrollVertical
纯JavaScript实现仿京东app首页 京东快报 上下滚屏效果

![image](https://github.com/accforgit/react-native-scrollVertical/blob/master/scroll-vertical.gif)

### Installation
```
npm install --save https://github.com/accforgit/react-native-scrollVertical.git
```

### Basic Usage
```
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
```
### Properties

|Props|Default|Type|Description|
|---|---|---|---|
|data|[]|array(object{content})|上下滚屏的数据条目|
|delay|500|number|每一次滚动切换之前延迟的时间，单位为 ms|
|duration|500|number|每一次滚动切换的持续时间，单位为 ms|
|scrollHeight|32|number|滚屏高度|
|scrollStyle|null|style|滚屏样式|
|textStyle|null|style|滚屏文字样式|
