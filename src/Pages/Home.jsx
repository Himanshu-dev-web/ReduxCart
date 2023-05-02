import Products from "../components/Products"


const Home = () => {
  return (
    <>
      <div>
          <h2 className="px-3 py-1 text-xl font-semibold text-gray-700 mr-2 mb-2" >Welcome to the redux Toolkit Store </h2>

          <section className="">
            <h3 className="inline-block rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">Products</h3>
            <Products />
          </section>
      </div>
    </>
  )
}

export default Home