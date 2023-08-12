import React from 'react'
import Child1 from './Child1'

const Parent1 = () => {

    const gift="Phone"

  return (
    <>
        <Child1 childgift={gift}/>
    </>
  )
}

export default Parent1