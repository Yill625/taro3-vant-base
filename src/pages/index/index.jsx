import Nerv, { Component } from 'nervjs'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Toast from '../../components/vant-weapp/toast/toast'

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {
    Toast.success('成功文案')
  }

  componentDidHide() {}

  render() {
    return (
      <View>
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
        <van-toast id='van-toast' />
      </View>
    )
  }
}
