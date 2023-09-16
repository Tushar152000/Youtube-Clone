import { Provider } from "react-redux";
import "./App.css";
import Body from './components/Body';
import Header from './components/Header';
import store from "./utilis/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
      // children will go where my outlet will be called
      path:"/",
      element:<MainContainer/>
      },
      {
      path:"watch",
      element:<Watchpage/>,
      
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
    <div>
       <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}
 
export default App;

/**
 * head
 * body
 *  sidebar
 *    menuitems
 *  Mainitems
 *   buttonlist
 *   videoContainer
 *     videoCard
 * 
 * 
 */