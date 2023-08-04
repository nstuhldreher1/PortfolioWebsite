import HomePage from './pages/HomePage.js';
import ProjectPage from './pages/ProjectPage.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';

const router = createBrowserRouter([
  {path: '/', element: <HomePage/>},
  {path: '/project/:name', element: <ProjectPage/>}
]);



function App() {
  return <RouterProvider router={router}/>;
}

export default App;
