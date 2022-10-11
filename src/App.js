import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import ReactQuiz from './components/ReactQuiz/ReactQuiz';


import Statistics from './components/Statictics/Statistics';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          
          loader:()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
            
          },
          element:<Home></Home>
        },
       {
          path:'/quiz/:quizId',
          loader:({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<ReactQuiz></ReactQuiz>
       },
       
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
     
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }
    
  ])
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
      
    </div>
  );
}

export default App;
