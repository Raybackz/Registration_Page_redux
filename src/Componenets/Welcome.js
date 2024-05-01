import React from 'react'

const Welcome = (props) => {
  return (
    <div>
        
      <h1 style={{color:'violet', margin:'20px', textAlign:'center'}}>Welcome {props.data}</h1>
    </div>
  )
}

export default Welcome