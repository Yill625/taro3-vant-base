import Nerv, { Component } from 'nervjs'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { test } from '@/api/test'
import { dateFormat } from '@/utils/time'
import './index.scss'
import throttle from '../../decorator/throttle'
import debounce from '../../decorator/debounce'

export default class Index extends Component {
  state = {
    active: 0,
    show: false,
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
    Taro.stopPullDownRefresh()
    this.getTest()
    this.setState({
      show: true,
    })
  }

  change(e) {
    this.setState({
      active: e.detail,
    })
  }
  @throttle(500, { leading: false })
  clickText() {
    this.setState({
      show: false,
    })
  }

  toDemo() {
    console.log(1111)
  }
  render() {
    return (
      <View>
        <van-image
          onClick={this.toDemo}
          className='image'
          width='100rpx'
          height='100rpx'
          src='https://img.yzcdn.cn/vant/cat.jpeg'
        />
        {/* <View style='height:100px;width:100px;' className='van-hairline--surround'>
          {dateFormat('YYYY-MM-DD hh:mm:ss', 1111111111111)}
        </View> */}

        <van-transition show={this.state.show} custom-class='block' name='fade-right'>
          <van-button type='primary' className='but' onClick={this.toDemo.bind(this)}>
            121
          </van-button>
        </van-transition>
        <View
          style='height:100px;width:100px;'
          className='van-hairline--surround'
          onClick={this.clickText.bind(this)}
        >
          1212
        </View>
        {new Array(15).fill(2).map((item, index) => {
          return (
            <van-image
              width='100'
              key={index}
              height='1000'
              lazy-load
              src='https://img.yzcdn.cn/vant/cat.jpeg?1'
            />
          )
        })}

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
