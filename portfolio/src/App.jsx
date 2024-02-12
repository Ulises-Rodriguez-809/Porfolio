import './App.css';
import {Routes, Route} from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from './pages/home/Home';
import {Skills} from './pages/skills/Skills';
import { Courses} from './pages/courses/Courses';
import { Proyects } from './pages/proyects/Proyects';
import { BlogContainer } from './pages/blog/BlogContainer';

function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/habilidades' element={<Skills />}/>
        <Route path='/proyectos' element={<Proyects />} />
        <Route path='/cursos' element={<Courses />}/>
        <Route path='/blog' element={<BlogContainer />}/>
        <Route path='*' element={<h1>Foto de tino enojado</h1>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App
