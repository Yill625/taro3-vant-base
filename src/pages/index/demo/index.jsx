import Nerv from 'nervjs'
import { useState } from 'react' // 框架 Hooks （基础 Hooks）
import { View, Button } from '@tarojs/components'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <View>
      Count: {count}
      <Button onClick={() => setCount(0)}>Reset</Button>
      <Button onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
      <Button onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>
      <van-button type='primary' className='but' onClick={() => setCount(0)}>
        111111111
      </van-button>
    </View>
  )
}

export default Counter
