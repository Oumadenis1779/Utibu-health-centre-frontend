// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';
import ForgotPassword from './components/Authentication/ForgotPassword';
import Dashboard from './components/Dashboard';
import OrderMedication from './components/OrderMedication';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderStatus from './components/OrderStatus';
import Statement from './components/Statement';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/ordermedication" component={OrderMedication} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orderstatus" component={OrderStatus} />
        <Route path="/statement" component={Statement} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
