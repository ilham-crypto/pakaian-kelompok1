import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { API_URL } from "../utils/constants";

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };

    axios.post(API_URL + "pesanans", pesanan).then((res) => {
      this.props.history.push("/Sukses");
    });
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <div>
        <a href="/Konfirmasi">
          <Button className="mt-3 btn" size="md" variant="outline-dark">
            <strong>BACK</strong>
          </Button>
        </a>
        <Button
          className="mt-3 btn"
          size="md"
          onClick={() => this.submitTotalBayar(totalBayar)}
          variant="outline-dark"
          style={{ float: "right" }}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
        </Button>
      </div>
    );
  }
}
