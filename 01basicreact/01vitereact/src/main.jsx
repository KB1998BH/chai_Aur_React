import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1> Custom App | chai #</h1>
    </div>
  )
}


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a  href = "https://google.com" target = '_blank'> visit google</a>
)


const anotheruser = "chai aur react"
const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotheruser
 // anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
   //<App/>
   // <MyApp />
    ReactElement 
    // anotherElement
  
)
