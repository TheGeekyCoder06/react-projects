import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom' // <-- Import 'Route' here
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import  Github ,{githubLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path = '' element = {<Home />} />
        <Route path = 'about' element = {<About />} />
        <Route path = 'contact' element = {<Contact />} />
        <Route path = 'github' element = {<Github />} />
        <Route 
        loader = {githubLoader}
        path='user/:userId' element={<User />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

