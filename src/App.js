import React, { useEffect, useState } from 'react';
import Crad from './dist/Crad';
import { useDispatch,useSelector } from 'react-redux';
import { fetchData } from './ReduxTK/Slices/ProductSlice';

function App() {

  const[products,setProducts] = useState();
  const data = useSelector(state=>state.products)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchData()).then((response) => {
      setProducts(response.payload); // Log the fetched data
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    })
  },[])

  return (
    <div className="App">
      <Crad products = {products}/>
    </div>
  );
}

export default App;
