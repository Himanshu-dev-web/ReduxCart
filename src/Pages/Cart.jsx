import { useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';


const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart);

  const handleRemove = (product) => {
    dispatch(remove(product));
}
  return (
    <>
      <div >
        <h3 className='px-4 py-2  text-xl font-semibold text-gray-700 mr-2 mb-2'>Cart</h3>
        <div className='flex flex-col items-center w-[100%]'>
          {products.map(product =>(
              <div key={product.id} className="w-[100%]  flex flex-row justify-around items-center   rounded overflow-hidden shadow-lg  my-[1rem]">
                  <img className='w-[5rem] h-[8rem]' src={product.image} alt="" />
                  <h5 >{product.title}</h5>
                  <h5>{product.price}</h5>
                  <button className='bg-red-500 rounded-full px-4 py-2  text-xl font-semibold text-white mr-2 mb-2' onClick={() => handleRemove(product.id)} >Remove</button>
              </div>
          ))
          }
        </div>
      </div>
    </>
  )
}

export default Cart