import React, { Component } from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import { ListCategories, Menus } from "../components";
import { API_URL } from "../utils/constants";
import axios from "axios";
import swal from "sweetalert";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoriYangDipilih: "Pakaian",
      keranjangs: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoriYangDipilih)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });

    this.update();
  }

  update = () => {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: [],
    });

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  masukKeranjang = (value) => {
    axios
      .get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };

          axios
            .post(API_URL + "keranjangs", keranjang)
            .then((res) => {
              this.update();
              swal({
                title: "Sukses Masuk Keranjang",
                text: "Sukses Masuk Keranjang " + keranjang.product.nama,
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log("Error yaa ", error);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(API_URL + "keranjangs/" + res.data[0].id, keranjang)
            .then((res) => {
              this.update();
              swal({
                title: "Sukses Masuk Keranjang",
                text: "Sukses Masuk Keranjang " + keranjang.product.nama,
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log("Error yaa ", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  render() {
    const { menus, categoriYangDipilih } = this.state;
    return (
      <div className="mt-3">
        <Container>
          <h2 className="text-center">SELAMAT DATANG DI TOKO KAMI</h2>
          <div className="cardi">
            <div className="containere">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cf.shopee.co.id/file/aaed800c01bf4b2715178085f071215e"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cf.shopee.co.id/file/2abea3fcf2cc6614cf36fa63b2eb5ac6"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cf.shopee.co.id/file/295789a478600fdd7d8f8938f56e61d0"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="cardi">
            <div className="containere">
              <Container fluid>
                <Row>
                  <ListCategories
                    changeCategory={this.changeCategory}
                    categoriYangDipilih={categoriYangDipilih}
                  />
                  <Col className="mt-3">
                    <center>
                      <h3>
                        <strong>Daftar Produk</strong>
                        <hr width=" 15%" />
                      </h3>
                    </center>
                    <Row className="overflow-auto menu">
                      {menus &&
                        menus.map((menu) => (
                          <Menus
                            key={menu.id}
                            menu={menu}
                            masukKeranjang={this.masukKeranjang}
                          />
                        ))}
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
