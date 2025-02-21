import React,{memo} from 'react'

const Header = () => {
    console.log("heade render");
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}

export default React.memo(Header)
