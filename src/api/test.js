import request from '@/util/request/index'

export async function test() {
  return request({ url: '/api/test' })
}
