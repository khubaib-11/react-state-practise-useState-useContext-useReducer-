import { useState } from 'react';
import './App.css';

import Checkout from './components/Checkout';
import Shop from './components/Shop';
import Product from './components/Product';

// Image Sources
import icecream from './images/icecream.webp';
import bread from './images/bread.webp';
import coffe from './images/coffe.jpeg';

const DATA = [
  {
    name: 'Ice Cream',
    price: '120 PKR',
    quantity: 0,
    image: icecream,
  },
  {
    name: 'Bread',
    price: '500 PKR',
    quantity: 0,
    image: bread,
  },
  {
    name: 'COffee',
    price: '310 PKR',
    quantity: 0,
    image: coffe,
  },
];

function App() {
  // USE STATE
  const [totalCartItemsQuantity, setTotalCartItemsQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);

  const data = DATA;
  return (
    <div className="App">
      <div className="App-left">
        <Shop>
          <h1>Shop</h1>
          {data.map((product, index) => (
            <Product
              key={index}
              product={product}
              setTotalCartItemsQuantity={setTotalCartItemsQuantity}
              cart={cart}
              setCart={setCart}
              setTotalBill={setTotalBill}
            />
          ))}
        </Shop>
      </div>
      <div className="App-right">
        <Checkout
          cart={cart} // Cart Array
          setCart={setCart} // Cart Array
          totalCartItemsQuantity={totalCartItemsQuantity}
          setTotalCartItemsQuantity={setTotalCartItemsQuantity}
        />
      </div>

      <h2 style={{ textAlign: 'center' }}>Bill : {totalBill}</h2>
    </div>
  );
}

export default App;
