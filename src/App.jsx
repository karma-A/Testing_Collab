import { BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css'
import {Home, PageNotFound} from './components/index'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="*" element={<PageNotFound />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
