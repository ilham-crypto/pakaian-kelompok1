import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "rgb(48, 48, 48)", color: "white" }}
      className="font-small pt-4 mt-4"
    >
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Produk</h6>
            <p>
              <a href="#!" style={{ color: "white" }}>
                Baju
              </a>
            </p>
            <p>
              <a href="#!" style={{ color: "white" }}>
                Jaket
              </a>
            </p>
            <p>
              <a href="#!" style={{ color: "white" }}>
                Celana
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Zanda Store
            </h6>
            <p>
              Zanda Store adalah toko online yang menyediakan pakaian untuk pria
              dan wanita, ada banyak berbagai macam pakaian seperti Celana,Jaket
              dll.
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Location</h6>
            <p>
              Jl. Kemantren Raya, Wonosari, Ngaliyan, Kota Semarang, Jawa
              Tengah, Indonesia
            </p>
            <p style={{ fontSize: "25px" }}>
              <i class="fas fa-mail-bulk"> 50181</i>
            </p>
          </MDBCol>
        </MDBRow>
        <hr style={{ width: "1100px" }} />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p
              className="text-center text-md-left grey-text"
              style={{ marginLeft: "300px" }}
            >
              &copy; {new Date().getFullYear()} Copyright: Orlynz Sambora
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul
                className="list-unstyled list-inline"
                style={{ fontSize: "30px", marginRight: "30px" }}
              >
                <li className="list-inline-item">
                  <i className="fab fa-whatsapp" />
                </li>
                <li className="list-inline-item">
                  <li className="fab fa-facebook-f" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-instagram" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-twitter" />
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
