import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Item } from "../../components/Item";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";


export default function Home() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  function navigateToAdd() {
    navigate("/add");
  }

  async function handleMassDelete() {
    const ids = [];

    const deleteList = document.querySelectorAll("input[type=checkbox]:checked");

    deleteList.forEach(checked => {
      ids.push(checked.getAttribute("idfordelete"))
    })

    await fetch("https://scandiweb-api.cloud", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ids)
    });

    function reload(){
      window.location.reload();
    }

    reload();
  }

  useEffect(() => {
    async function fetchProducts() {
      await fetch("https://scandiweb-api.cloud")
      .then((response) => response.json())
      .then((responseJson) => {
        setProducts(JSON.parse(responseJson.body))
      })
    };
    fetchProducts();
  }, [])

  return (
    <Container>
      <Header className='header'>
        <h1>Product List</h1>
        <div className="buttons">
          <Button id="add-product-btn" title="Add" onClick={navigateToAdd} ></Button>
          <Button id="delete-product-btn" title="Mass Delete" onClick={handleMassDelete} ></Button>
        </div>
      </Header>
      <main>
        <div className="section">
          {
            products.map(product => (
              <Item product={product} key={product.id}/>
            ))
          }
        </div>
      </main>
      <Footer />
    </Container>
  );
}