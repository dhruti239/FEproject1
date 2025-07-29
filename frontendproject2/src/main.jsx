import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Page2 from './Page2.jsx'
import Page3 from './page3.jsx'
import Page4 from './Page4.jsx';


createRoot(document.getElementById('root')).render(
 <BrowserRouter basename="frontendproject2">
 <Routes>
  <Route path="/" element={<App/>}></Route>
  <Route path='/Page2' element={<Page2/>}></Route> 
  <Route path='/Page3' element={<Page3/>}></Route>
  <Route path='/Page4' element={<Page4/>}></Route>
 </Routes>
 </BrowserRouter>
)
