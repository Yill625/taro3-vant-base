import Taro from '@tarojs/taro'

// eslint-disable-next-line no-undef
const baseUrl = apiHost

export default function request(options) {
  const {
    url,
    method = 'GET',
    data = {},
    header = {},
    isShowLoading = true,
  } = options
  const timeout = 30 * 1000
  const enableCache = true
  isShowLoading ? showLoading() : ''

  return Taro.request({
    url: baseUrl + url,
    method,
    data,
    header,
    timeout,
    enableCache,
  })
    .then(res => {
      isShowLoading ? hideLoading() : ''

      if (res.statusCode === 200) {
        if (res.data.code === 200) {
          return Promise.resolve(res.data.result)
        } else {
          Taro.showToast({ title: res.data.desc, icon: 'none' })
        }
      } else {
        return Promise.reject(res)
      }
    })
    .catch(res => {
      Taro.showToast({ title: JSON.stringify(res), icon: 'none' })
    })
  // .finally(() => {
  //   // 真机上小程序不支持？？
  //   isShowLoading ? hideLoading() : ''
  // })
}

const showLoading = () => {
  Taro.showLoading()
  Taro.showNavigationBarLoading()
}

const hideLoading = () => {
  Taro.hideNavigationBarLoading()
  Taro.hideLoading()
}
