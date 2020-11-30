import request from '@/util/request/index'

export async function test() {
  return await request({ url: '/api/test' })
}
