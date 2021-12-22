import React, { Component } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { API_URL } from "../utils/constants";
import App from "./App";
import axios from "axios";
import swal from "sweetalert";
export default class DetailPemesan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      keranjangDetail: false,
      jumlah: 0,
      keterangan: "",
      totalHarga: 0,
    };
  }

  handleShow = (menuKeranjang) => {
    this.setState({
      showModal: true,
      keranjangDetail: menuKeranjang,
      jumlah: menuKeranjang.jumlah,
      keterangan: menuKeranjang.keterangan,
      totalHarga: menuKeranjang.total_harga,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  tambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
      totalHarga:
        this.state.keranjangDetail.product.harga * (this.state.jumlah + 1),
    });
  };

  kurang = () => {
    if (this.state.jumlah !== 1) {
      this.setState({
        jumlah: this.state.jumlah - 1,
        totalHarga:
          this.state.keranjangDetail.product.harga * (this.state.jumlah - 1),
      });
    }
  };

  changeHandler = (event) => {
    this.setState({
      keterangan: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.handleClose();

    const data = {
      jumlah: this.state.jumlah,
      total_harga: this.state.totalHarga,
      product: this.state.keranjangDetail.product,
      keterangan: this.state.keterangan,
    };

    axios
      .put(API_URL + "keranjangs/" + this.state.keranjangDetail.id, data)
      .then((res) => {
        this.props.update();
        swal({
          title: "Update Pesanan!",
          text: "Sukses Update Pesanan " + data.product.nama,
          icon: "success",
          button: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  hapusPesanan = (id) => {
    this.handleClose();

    axios
      .delete(API_URL + "keranjangs/" + id)
      .then((res) => {
        this.props.update();
        swal({
          title: "Hapus Pesanan!",
          text:
            "Sukses Hapus Pesanan " + this.state.keranjangDetail.product.nama,
          icon: "error",
          button: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    const { keranjangs } = this.props;
    return (
      <Container>
        <div className="cardi">
          <div className="containere">
            <h3 className="text-center">
              <strong>KONFIRMASI</strong>
            </h3>
            <hr />
            <Row className="app">
              <Col>
                <App />
              </Col>
              {keranjangs.length !== 0 && (
                <Col>
                  <div style={{ margin: "10px" }}>
                    <Col>
                      <h4>Order Anda</h4>
                      <hr size="5" style={{ color: "black", width: "3cm" }} />
                      <Card
                        className="order shadow"
                        style={{ border: "hidden" }}
                      >
                        <Card.Header>
                          <Row>
                            <Col className=" mt-4">
                              <h6>Product</h6>
                            </Col>
                            <Col className=" mt-4">
                              <h6 style={{ float: "right" }}>Total</h6>
                            </Col>
                          </Row>
                        </Card.Header>
                        {keranjangs.map((menuKeranjang) => (
                          <Card.Body
                            style={{
                              backgroundColor: "rgba(158, 158, 158, 0.096)",
                            }}
                            key={menuKeranjang.id}
                            onClick={() => this.handleShow(menuKeranjang)}
                          >
                            <Row>
                              <Col>
                                <p>
                                  <b>{menuKeranjang.jumlah}x</b>
                                  &nbsp;{menuKeranjang.product.nama}
                                </p>
                              </Col>
                              <Col>
                                <p style={{ float: "right" }}>
                                  Rp.{" "}
                                  {numberWithCommas(menuKeranjang.total_harga)}
                                </p>
                              </Col>
                            </Row>
                          </Card.Body>
                        ))}
                        <Card.Footer
                          style={{
                            backgroundColor: "rgba(158, 158, 158, 0.096)",
                          }}
                        >
                          <Row>
                            <Col>
                              <p>
                                <b>Total Bayar</b>
                              </p>
                            </Col>
                            <Col>
                              <p style={{ float: "right" }}>
                                <b>Rp. {numberWithCommas(totalBayar)}</b>
                              </p>
                            </Col>
                          </Row>
                        </Card.Footer>
                      </Card>
                    </Col>
                  </div>
                </Col>
              )}
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}
