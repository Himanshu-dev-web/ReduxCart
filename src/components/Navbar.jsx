import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

const Navbar = () => {

  const items = useSelector((state) => state.cart);
  return (
    <>
        <div className="flex flex-row justify-between ">
            <span className="bg-yellow-100 rounded-full px-4 py-2  text-xl font-semibold text-gray-700 mr-2 mb-2">Redux Store </span>
            <div className="flex flex-row justify-around items-center  w-[30%]">
                <Link className="px-3  text-xl font-semibold text-gray-700 mr-2 mb-2 hover:bg-yellow-100" to="/">Home</Link>
                <Link className="px-3  text-xl font-semibold text-gray-700 mr-2 mb-2 hover:bg-yellow-100" to="/cart">Cart</Link>
                <Link  className="inline-bold  bg-gray-200 rounded-full px-3  text-xl font-semibold text-gray-700 mr-2 mb-2"> CartItems:{items.length}</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar