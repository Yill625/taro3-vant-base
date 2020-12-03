// 时间格式化处理工具
import dayjs from 'dayjs'
// 返回当前时间 dayjs 对象
export const now = dayjs()

// 格式化时间 https://dayjs.gitee.io/docs/zh-CN/display/format
export const dateFormat = (format, time) => {
  return dayjs(time || now).format(format)
}
