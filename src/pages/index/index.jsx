import Nerv, { Component } from 'nervjs'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <van-button type='primary' className='but'>
          121
        </van-button>
        <van-image
          className='image'
          width='100rpx'
          height='100rpx'
          src='https://img.yzcdn.cn/vant/cat.jpeg'
        />
        <View
          style='height:100px;width:100px;background-color:red;'
          className='van-hairline--surround'
        >
          1212
        </View>
      </View>
    )
  }
}
