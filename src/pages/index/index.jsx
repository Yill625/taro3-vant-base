import Nerv, { Component } from 'nervjs'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  state = {
    active: 0,
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onPullDownRefresh() {
    console.log('下拉刷新了')
    Taro.vibrateShort()
    setTimeout(() => {
      Taro.stopPullDownRefresh()
    }, 1000)
  }

  change(e) {
    this.setState({
      active: e.detail,
    })
  }

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
        <van-toast />
        <van-tabbar
          id='van-toast'
          active={this.state.active}
          onChange={this.change.bind(this)}
        >
          <van-tabbar-item icon='home-o'>标签</van-tabbar-item>
          <van-tabbar-item icon='search'>标签</van-tabbar-item>
          <van-tabbar-item icon='friends-o'>标签</van-tabbar-item>
          <van-tabbar-item icon='setting-o'>标签</van-tabbar-item>
        </van-tabbar>
      </View>
    )
  }
}
