import React from 'react';
import Cart from './redux/Cart';
import { Provider } from 'react-redux';
import { mystore } from './redux/store/store';
import Products from './redux/Products';
import AppNvaigator from './src/screen/AppNvaigator';
const App=()=> {
  return (
<Provider store={mystore}>
  <AppNvaigator/>
</Provider>
  );
}


export default App;
