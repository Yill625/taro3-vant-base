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
        <van-image
          width='100rpx'
          height='100rpx'
          src='https://img.yzcdn.cn/vant/cat.jpeg'
        />
      </View>
    )
  }
}
