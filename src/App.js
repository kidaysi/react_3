import Header from './component/header/header'
import Banner from './component/banner/banner'
import Catalog from './pages/catalog/catalog'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>
    <Router>
    <Routes>
      <Route path="/main" element={<main />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
    </Router>
    </>
  )
}

export default App



