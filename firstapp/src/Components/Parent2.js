import React from 'react'
import Child2 from './Child2';
import {useState} from 'react';

const Parent2 = () => {

    const [returnGift,setReturnGift]=useState();
    
    const gift = "Phone"

  return (
    <>
            <Child2 childGift={gift} Return={setReturnGift}/>

            <h1>This is parent and I received {returnGift} from child</h1>
    </>
  )
}

export default Parent2