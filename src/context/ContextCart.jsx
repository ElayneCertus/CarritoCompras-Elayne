import { createContext, useState } from "react";

export const ContextCart = createContext()


export const ProviderContext = ({ children }) => {

    const [cartShopping, setCartShopping] = useState([])

    const [counterPrice, setcounterPrice] = useState(0)

    const addProductCart = (product) => {
        //SI EL PRODUCTO EXISTE O NO EXISTE DENTRO DE NUESTRO CARRUTO
        const existProduct = cartShopping.find((item) => item.id === product.id)

        setcounterPrice(counterPrice + product.price)
        console.log('product', product)

        if (existProduct) {

            //CUANDO EL PRODUCTO EXISTE
            const newProduct = {
                ...product,
                quantity: existProduct.quantity + 1
            }
            //BUSCAM,OS EL PRODUCTO EN EL CARRITO Y LO REEMPLAZAMOS CON SUS NUEVOS VALORES,
            //SI NO EXISTE DEVOLVEMOS EL CARRITO TAL CUAL
            const updateCarrito = cartShopping.map((item) => (
                item.id === existProduct.id ? newProduct : item
            ))
            setCartShopping(updateCarrito)
        } else {
            //CUANDO EL PRODUCTO NO EXISTE
            const newProduct = {
                ...product,
                quantity: 1
            }
            setCartShopping([...cartShopping, newProduct])
        }
    }

    const deletedProductCard = (productSeleted) => {
        console.log('productSeleted', productSeleted)

        setcounterPrice(counterPrice - (productSeleted.price * productSeleted.quantity))

        const newcartShopping = cartShopping.filter((data) => data !== productSeleted)
        setCartShopping (newcartShopping)



        console.log('cartShopping', cartShopping)
        console.log('newcartShopping', newcartShopping)
        // alert(data.price)
    }

    return (
        <ContextCart.Provider value={{ addProductCart, cartShopping, counterPrice, deletedProductCard }}>
            {children}
        </ContextCart.Provider>
    )
}