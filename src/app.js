import { Component } from 'nervjs'
import Taro, { canIUse, showModal, getUpdateManager } from '@tarojs/taro'
import { systemInfo } from '@/utils/getSystemInfoSync'
import './app.scss'

class App extends Component {
  componentDidMount() {
    // 获取系统参数
    console.log(systemInfo)
  }

  componentDidShow(res) {
    this.getShareInfo(res.shareTicket)
    console.log(res)
    this.setUpdate()
  }
  getShareInfo(shareTicket) {
    console.log(shareTicket)
    Taro.getShareInfo({ shareTicket }).then(res => {
      console.log(res)
    })
  }
  setUpdate() {
    if (canIUse('getUpdateManager')) {
      const updateManager = getUpdateManager()
      updateManager.onCheckForUpdate(function(res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function() {
            showModal({
              showCancel: false,
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: response => {
                // res: {errMsg: "showModal: ok", cancel: false, confirm: true}
                if (response.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate()
                }
              },
            })
          })
          updateManager.onUpdateFailed(function() {
            // 新的版本下载失败
            showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
            })
          })
        }
      })
    }
  }
  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
