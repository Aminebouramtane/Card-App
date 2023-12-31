import React, { useEffect, useState } from 'react';
import Crad from './dist/Crad';
import { useDispatch,useSelector } from 'react-redux';
import { fetchData } from './ReduxTK/Slices/ProductSlice';
import Navbar from './layouts/Navbar';

function App() {

  const[products,setProducts] = useState();
  // const data = useSelector(state=>state.products)
  // console.log(data);
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(fetchData()).then((response) => {
      setProducts(response.payload);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    })
  },[])

  return (
    <div className="App">
      <Navbar/>
      <Crad products = {products}/>
    </div>
  );
}

export default App;
