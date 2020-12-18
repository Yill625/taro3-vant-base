import Nerv, { Component } from 'nervjs'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { test } from '@/api/test'
import { dateFormat } from '@/utils/time'
import './index.scss'
import throttle from '../../decorator/throttle'
import debounce from '../../decorator/debounce'

export default class Index extends Component {
  state = {
    active: 0,
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {
    this.getTest()
  }
  async getTest() {
    const res = await test()
    console.log(res)
  }
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
  @throttle(500, { leading: false })
  clickText() {
    console.log(11111)
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
        {/* <View style='height:100px;width:100px;' className='van-hairline--surround'>
          {dateFormat('YYYY-MM-DD hh:mm:ss', 1111111111111)}
        </View> */}
        <View
          style='height:100px;width:100px;'
          className='van-hairline--surround'
          onClick={this.clickText.bind(this)}
        >
          1212
        </View>

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
