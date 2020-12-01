import request from '@/utils/request/index'

export async function test() {
  return await request({ url: '/api/test' })
}
