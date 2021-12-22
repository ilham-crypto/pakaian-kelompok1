import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavbarComponent, Footer } from "./components";
import { Home, Sukses, OrderCart, Konfirmasi, OrderDetail } from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Sukses" component={Sukses} exact />
            <Route path="/OrderCart" component={OrderCart} exact />
            <Route path="/Konfirmasi" component={Konfirmasi} exact />
            <Route path="/OrderDetail" component={OrderDetail} exact />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}
