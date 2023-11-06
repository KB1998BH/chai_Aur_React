


import Chai from "./chai"

function App() {
  
  const username = "chai aur code"

  return (
    <>
    <Chai/>
    { <h3> chai aur react {username}</h3>  /* {}- evaluation injection use for variable injection */}
    <p> test is ready</p>
    
    </>
    
  )
}

export default App
