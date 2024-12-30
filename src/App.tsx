import { useState } from 'react'
import './App.css'
import { productList } from './components/data'
import Product from './components/Product'
import Model from './components/UI/Model'
import Button from './components/UI/Button'


function App() {

  const [isOpen, setIsOpen] = useState(true)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const renderProductList = productList.map((product) => <Product key={product.id} product={product}/>)
  return (
    <main className="container">
      
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 rounded-md gap-5">

        {renderProductList}

      </div>
      
        <Model isOpen={isOpen} closeModel={close} >
          <div>
            <Button className='w-full bg-indigo-700 ' label='Submit'></Button>
            <Button label='Cancel'>cancel</Button>
          </div>
        </Model>


    </main>
  )
}

export default App