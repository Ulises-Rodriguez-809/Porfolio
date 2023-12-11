import './App.css';
import {Routes, Route} from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Courses} from './pages/Courses';

function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cursos' element={<Courses />}/>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App
