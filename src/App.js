
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Cart } from './components/Cart';
import { Dashboard } from './components/Dashboard';
import { Product } from './components/Product';
import { RootLayout } from './components/RootLayout';


//import { Counter } from './features/counter/Counter';
//import { PostsLists } from './features/post/PostsLists';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index element = {<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))
  return (
    <div className="">
      {/* <Counter /> */}
      {/* <PostsLists /> */}
      <RouterProvider router={router}/>
      {/* <Product /> */}
    </div>
  );
}

export default App;
