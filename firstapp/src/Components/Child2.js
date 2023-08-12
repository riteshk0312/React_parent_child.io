import React from 'react'



const Child2 = (props) => {

    const returngift="Laptop";

    props.Return(returngift)

  return (
    <> 
            <h1>This is child and I received {props.childGift} from parent</h1>
    </>
  )
}

export default Child2