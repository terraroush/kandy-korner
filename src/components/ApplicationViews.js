import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
// import { ProductCard } from "./product/ProductCard"

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* <Route path="/products">
                <ProductCard />
            </Route> */}

        </>
    )
}