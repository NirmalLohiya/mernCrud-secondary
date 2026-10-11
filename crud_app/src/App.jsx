import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './components/home'
// import Create from './components/create'
// import Update from './components/update'
import {BrowserRouter,Routes,Route } from 'react-router-dom'



// some code to normal arra base crud
// function App() {
//   return (
//     <>
//      <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='create/' element={<Create/>}/>
//         <Route path='update/' element={<Update/>}/>
//       </Routes>
//      </BrowserRouter>
//     </>
//   )
// }
// export default App



// some app code json server base
// import Home from './jsoncomponents/home'
// import Create from './jsoncomponents/create'
// import Update from './jsoncomponents/update'
// // some json server base crud 
// function App(){
//   return(
//   <>
//   <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/create' element={<Create/>}/>
//       <Route path='/update/:id' element={<Update/>}/>
//     </Routes>
//   </BrowserRouter>
//   </>
//   )
// }
// export default App



// App render to access node backend
import Home from './connectnode/home'
import Create from './connectnode/create'
import Update from './connectnode/update'
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update/:_id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App; 