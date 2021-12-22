import { useEffect, useState } from "react";
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
const TodoItem = ({ setRefresh, isRefresh }) => {
  const [form, setform] = useState([]);
  useEffect(() => {
    if (isRefresh) {
      fetch("http://localhost:3004/form")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setRefresh(false);
          setform(data);
        })
        .catch((err) => {
          setRefresh(false);
          if (err.name === "AbortError") {
            console.log("fetch aborted.");
          }
        });
    }
  }, [isRefresh, setRefresh]);
  return (
    <div>
      <Row className="app">
        <Col>
          <div style={{ margin: "10px" }}>
            <Col>
              <h4>Detail Pembeli</h4>
              <hr size="5" style={{ color: "black", width: "135px" }} />
              <Card className="order shadow" style={{ border: "hidden" }}>
                {form.map((todo) => (
                  <Card.Body
                    style={{
                      backgroundColor: "rgba(158, 158, 158, 0.096)",
                    }}
                  >
                    <Row>
                      <Col>
                        <p>
                          <b>Nama</b>
                        </p>
                      </Col>
                      <Col>
                        <p style={{ float: "right" }}>{todo.nama}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>
                          <b>Alamat</b>
                        </p>
                      </Col>
                      <Col>
                        <p style={{ float: "right" }}>{todo.alamat}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>
                          <b>Keterangan</b>
                        </p>
                      </Col>
                      <Col>
                        <p style={{ float: "right" }}>{todo.keterangan}</p>
                      </Col>
                    </Row>
                  </Card.Body>
                ))}
              </Card>
            </Col>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TodoItem;
