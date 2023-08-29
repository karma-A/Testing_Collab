import {Router, Routes, Route} from 'react-router-dom'
import './App.css'
import {Home, PageNotFound} from './components/index'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={<Home />}  />
          <Route path="*" component={<PageNotFound />}  />
        </Routes>
      </Router>
    </>
  )
}

export default App
