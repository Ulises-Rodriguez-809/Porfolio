import './App.css';
import {Routes, Route} from "react-router-dom";
import { Layout } from './components/Layout';

function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<h1>Hola</h1>}/>
        <Route path='/contacto' element={<h1>contacto</h1>}/>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App
