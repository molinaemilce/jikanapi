import React from 'react'

const Loading = () => {
  return (
    <div className='loading_container'>
        <div className="lds-dual-ring"></div>
        <span className='loading_container__texto'>Loading...</span>
    </div>
  )
}

export default Loading