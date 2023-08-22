import HomePage from './pages/HomePage.js';
import ProjectPage from './pages/ProjectPage.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import {Helmet} from 'react-helmet';

const router = createBrowserRouter([
  {path: '/', element: <HomePage/>},
  {path: '/project/:name', element: <ProjectPage/>}
]);



function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Nick Stuhldreher</title>
      </Helmet>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
