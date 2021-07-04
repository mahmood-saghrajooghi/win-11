import React from 'react';
import { Route, Switch } from 'react-router';
import Account from '../Pages/Account';
import Address from '../Pages/Address';
import Customers from '../Pages/Customers';
import Home from '../Pages/Home';
import Orders from '../Pages/Orders';
import Products from '../Pages/Products';
import Drawer from './Drawer';
import Navbar from './Navbar';
import RightPanel from './RightPanel';
const Layout: React.FC = () => {

  return (
    <div className="layout">
      <Drawer />
      <RightPanel />
      <div className="content-wrapper">
        <Navbar />
        <div className="content">

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/orders" component={Orders} />
            <Route path="/products" component={Products} />
            <Route path="/address" component={Address} />
            <Route path="/customers" component={Customers} />
            <Route path="/account" component={Account} />
          </Switch>

        </div>
      </div>
    </div>
  )
}

export default Layout;