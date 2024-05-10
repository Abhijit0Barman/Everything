import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from '../Pages/AllProducts'
import ProductDetails from '../Pages/ProductDetails'

export default function AllRoutes() {
    return (
        <div>
            <div>
                <Link to="/">AllProducts</Link>
                <Link to="/P">AllProducts</Link>
            </div>
            <Routes>
                <Route to="/" element={<AllProducts />} />
                <Route to="/products/:id" element={<ProductDetails />} />
            </Routes>
        </div>
    )
}
