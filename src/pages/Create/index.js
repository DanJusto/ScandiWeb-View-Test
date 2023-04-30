import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Form } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { ProductTypes } from "../../utils/productTypes";
import { TypeDvd } from "../../components/TypeDvd";
import { TypeBook } from "../../components/TypeBook";
import { TypeFurniture } from "../../components/TypeFurniture";

export default function Create() {
  const navigate = useNavigate();
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState(null);
  const [wrap, setWrap] = useState(null);
  const [attribute, setAttribute] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  
  function navigateToHome() {
    navigate("/");
  }

  const setatt = (data) => {
    setAttribute(data);
  }

  const sethei = (data) => {
    setHeight(data);
  }

  const setwid = (data) => {
    setWidth(data);
  }

  const setlen = (data) => {
    setLength(data);
  }

  async function validate () {
    const message = "All values are required";
    const positiveMessage = "The value must be positive";
    if (sku === '' || name === '' || type === '' || price === '') {
      alert(message);
      return;
    }

    if (attribute === '') {
      if (height < 0 || width < 0 || length < 0) {
        alert(positiveMessage);
        return
      } else if (height === '' || width === '' || length === '') {
        alert(message);
        return
      }
    }

    if (attribute < 0 || price < 0) {
      alert(positiveMessage);
      return;
    }

    const checkSku = sku.toUpperCase();
    let products;

    fetch("https://scandiweb-api.cloud")
      .then((response) => response.json())
      .then((responseJson) => {
        products = JSON.parse(responseJson.body)
      }).then(() => {
        let counter = 0;
        products.forEach(product => {
          if (checkSku === product.sku) {
            counter++;
          }
        })
        if(counter > 0) {
          alert("This SKU is already in use");
        } else {
          handleNewProduct()
        }
      });
  }
  async function handleNewProduct() {
    let attr = attribute

    if (attribute === '') {
      const array = [height, width, length];
      attr = array.join('x');
    }

    const upperSku = sku.toUpperCase();

    const newProduct = {
      sku: upperSku,
      name,
      type: type.toString(),
      price,
      attribute: attr
    };

    await fetch("https://scandiweb-api.cloud", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      });

    navigateToHome();
    window.location.reload();
  }

  useEffect(() => {
    function changeView() {
      const productTypes = ProductTypes(setatt, sethei, setwid, setlen);
      setWrap(productTypes[type]);
      setAttribute('');
      setHeight('');
      setWidth('');
      setLength('');
    };
    changeView();
  }, [type])

  return (
    <Container>
      <Header className='header'>
        <h1>Product Add</h1>
        <div className="buttons">
          <Button id="save-product-btn" title="Save" onClick={validate}></Button>
          <Button id="cancel-btn" title="Cancel" onClick={navigateToHome}></Button>
        </div>
      </Header>
      <main>
        <Form id="product_form" >
          <div className="input-wrap">
            <label htmlFor="sku">SKU</label>
            <input id="sku" type="text" placeholder="SKU123456" required onChange={e => setSku(e.target.value)}/>
          </div>
          <div className="input-wrap">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Name of Product" required onChange={e => setName(e.target.value)}/>
          </div>
          <div className="input-wrap">
            <label htmlFor="price">Price ($)</label>
            <input id="price" type="number" required onChange={e => setPrice(e.target.value)}/>
          </div>
          <div className="input-wrap">
            <label htmlFor="type">Type Switcher</label>
            <select id="productType" defaultValue={"default"} required onChange={e => setType(e.target.value)}>
              <option value="" >Select type</option>
              <option id="DVD" value="0">DVD</option>
              <option id="book" value="1">Book</option>
              <option id="furniture" value="2">Furniture</option>
            </select>
          </div>
          {wrap}
        </Form>
      </main>
      <Footer />
    </Container>
  );
}