import { useContext, useState } from "react";
import { ContextCart } from "../context/ContextCart";

export const Modal = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { cartShopping, counterPrice, deletedProductCard } = useContext(ContextCart)

    const openModal = () => {
        console.log('cartShopping', cartShopping)
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div onClick={openModal} className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                    <div className="bg-white p-5 rounded flex flex-col justify-center items-ccenter gap-5 h-4/5 overflow-auto">

                        <div className="h-full">

                            <div className="text-right">
                                <button onClick={closeModal} className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 no-border border-gray-400 rounded shadow">
                                    <b>Cerrar</b>
                                </button>
                            </div>

                            {
                                cartShopping.length == 0 ? (
                                    <div className="mt-16">
                                        <h1 className="text-3xl text-red-500">No tiene productos</h1>
                                    </div>
                                )
                                    : (
                                        <div>
                                            {cartShopping.map((data) =>
                                                <div key={data.id} >
                                                    <div className="grid grid-cols-4 gap-4 border-2 border-indigo-600 rounded-lg m-2 p-2">
                                                        <div className="m-auto">
                                                            <img src={data.image} className="w-full max-w-48" />
                                                        </div>
                                                        <div className="col-span-2 self-center">
                                                            <h5 className="mb-2 text-xl"><b>{data.title}</b></h5>
                                                            <div className="grid">
                                                                <label>Cantidad: <b>{data.quantity}</b></label>
                                                                <label>Precio x unidad: <b>S/. {data.price.toFixed(2)}</b></label>
                                                            </div>
                                                            <button onClick={() => deletedProductCard(data)} className="mt-3 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                                                                Eliminar
                                                            </button>
                                                        </div>
                                                        <div className=" m-auto text-center">
                                                            <h6 className="text-xl text-cyan-600">Precio: <br /><b>S/. {(data.price * data.quantity).toFixed(2)}</b></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )
                            }

                            <div className="pt-4 pb-6 text-right">
                                <h1 className="text-4xl"><b>TOTAL: S/. {counterPrice.toFixed(2)}</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}


