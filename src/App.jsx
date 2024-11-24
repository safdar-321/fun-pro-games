import React from 'react'
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import 'animate.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AppOutlet from './AppOutlet'
import TopTitle from './components/TopTitle';

import HomeSection from './components/home/HomeSection';
import PublishSection from './components/home/PublishSection';
import ContactUs from './components/contactUs/ContactUs';
import AboutUs from './components/aboutUs/AboutUs';
import GameSection from './components/games/GameSection';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<AppOutlet />}>
            <Route path='/' element={
                <>
                    <TopTitle title="" />
                    <HomeSection />
                    <PublishSection />
                </>
            } />
            <Route path='/home' element={
                <>
                    <TopTitle title="Home - " />
                    <HomeSection />
                    <PublishSection />
                </>
            } />
            <Route path='/about-us' element={
                <>
                    <TopTitle title="About Us - " />
                    <AboutUs />
                </>
            } />
            <Route path='/games' element={
                <>
                    <TopTitle title="Games - " />
                    <GameSection />
                </>
            } />
            <Route path='/contact-us' element={
                <>
                    <TopTitle title="Contact Us - " />
                    <ContactUs />
                </>
            } />
        </Route>
    )
)

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App