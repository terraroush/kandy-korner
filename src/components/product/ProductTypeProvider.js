import React, { useState, createContext } from "react"

export const ProductTypeContext = createContext()

export const ProductTypeProvider = props => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/products/?_expand=productType")
        .then(res => res.json())
        .then(setProductTypes)
    }

    const addProductType = typeObj => {
        return fetch("http://localhost:8088/products/?_expand=productType", {
            method: "POST",
            headers: {
                "Content-Type":
                "application/json"
            },
            body: JSON.stringify(typeObj)
        })
            .then(getProductTypes)
        }

        return (
            <ProductTypeContext.Provider value={{
                productTypes, getProductTypes, addProductType
            }}>
                {props.children}
            </ProductTypeContext.Provider>
        )
}