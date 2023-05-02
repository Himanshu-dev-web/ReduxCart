import { useEffect } from "react"
import { add } from "../store/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import {STATUSES }from '../store/productsSlice'
const Products = () => {
    const dispatch = useDispatch();
    const {data:products,status} = useSelector((state) => state.product)

    //const [products, setProducts] = useState([]);

    useEffect(() => {
        
        dispatch(fetchProducts())

        // const fetchproducts = async() => {
        //     const res = await fetch("https://fakestoreapi.com/products");
        //     const data = await res.json();
        //     setProducts(data);
        // }
        // fetchproducts();
    },[]);


    const handleAdd = (product) => {
        dispatch(add(product));
    }

    if(status === STATUSES.LOADING){
        return <h2>Loading...</h2>
    }
    if(status === STATUSES.ERROR){
        return <h2>Something went gadbad...</h2>
    }

  return (
    <>
        <div className="flex flex-row flex-wrap my-4 justify-center">
                {
                    products.map(product => (
                        <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center m-2">
                            <img className="w-[30%]  h-[40%]" src={product.image} alt="Sunset in the mountains"></img>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{product.title}</div>
                                <div className="text-gray-700 text-base">
                                {product.price + " Rs"}
                                </div>
                                <button onClick={() => handleAdd(product)} className="mt-6 inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</button>
                            </div>
                            </div>
                    ))
                }
        </div>
    </>
  )
}

export default Products