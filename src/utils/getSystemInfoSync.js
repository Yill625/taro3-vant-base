import { getSystemInfoSync } from '@tarojs/taro'

export const systemInfo = getSystemInfoSync()
export const isIphoneX = /iPhone X/gi.test(systemInfo.model)
export const isInWxWork = !!systemInfo.environment || false
export const screenWidth = systemInfo.screenWidth
