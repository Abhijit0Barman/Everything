import { Routes, Route } from "react-router-dom"
import React from 'react'
import Home from "../Pages/Home"
import About from "../Pages/About"
import Products from "../Pages/Products"
import Contact from "../Pages/Contact"


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path={`/`} element={<Home />} />
                <Route path={`/about`} element={<About />} />
                <Route path={`/products`} element={<Products />} />
                <Route path={`/contact`} element={<Contact />} />
            </Routes>
        </div>
    )
}

export { AllRoutes }