import React from 'react'
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import 'animate.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AppOutlet from './AppOutlet'
import TopTitle from './components/TopTitle';

import HomeSection from './components/home/HomeSection';
import PublishSection from './components/home/PublishSection';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<AppOutlet />}>
            <Route path='/' element={
                <>
                    <TopTitle title="" />
                    <HomeSection />
                    <PublishSection />
                    {/* <SkillSection />
                    <PortfolioSection />
                    <ServicesSection />
                    <ServicesFeatuers />
                    <TestimonialSection /> */}
                </>
            } />
            <Route path='/home' element={
                <>
                    <TopTitle title="Home - " />
                    <HomeSection />
                    <PublishSection />
                    {/* <SkillSection />
                    <PortfolioSection />
                    <ServicesSection />
                    <ServicesFeatuers />
                    <TestimonialSection /> */}
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