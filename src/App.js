// App.js
import { useState } from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import SignIn from './components/Authentification/SignIn';
import SignUp from './components/Authentification/SignUp';
import ForgotPassword from './components/Authentification/ForgotPassword';
import Dashboard from './components/Dashboard';
import Order from './components/Order';
import Cart from './components/Cart';
import Medication from './components/Medication';

import OrderItem from './components/OrderItem';
import Statement from './components/Statement';

const App = () => {
  const [userId,setUsreId]=useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/medication" element={<Medication/>} />
        <Route path="/signin" element={<SignIn setUserId={setUsreId}/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/ordermedication" element={<Order/>} />
        <Route path="/cart" element={<Cart userId={userId}/>} />
        <Route path="/orderstatus" element={<OrderItem/>} />
        <Route path="/statement" element={<Statement/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
