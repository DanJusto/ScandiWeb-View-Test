import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Item } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";


export default function Home({prods}) {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  
  function navigateToAdd() {
    navigate("/add");
  }
  
  window.addEventListener('popstate', e => {
    //window.location.reload();
    setProducts(prods);
  })
  
  function checkType(product) {
    const arrIndex = ['dvd', 'book', 'furniture'];
    const index = arrIndex.indexOf(product.type);
    const arrExt = ['MB', 'KG', ''];
    const arrName = ['Size: ', 'Weight: ', 'Dimension: '];
    const attribute = arrName[index] + product.attribute + arrExt[index];
    return attribute;
  }

  async function handleMassDelete() {
    const ids = [];

    const itens = document.getElementsByClassName("delete-checkbox");

    for(let i = 0; i < itens.length; i++) {
      if(itens[i].checked) {
        ids.push(itens[i].getAttribute("idfordelete"))
      }
    }
    
    if (ids.length <= 0) {
        alert("Need select the products to delete");
        return;
    }

    fetch("https://scandiweb-api.cloud", {
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

  /*window.addEventListener('load', async () => {
    const response = await api.get(`/`);
    setProducts(JSON.parse(response.data.body));
  });*/
  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/`);
      setProducts(JSON.parse(response.data.body));
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Header className='header'>
        <h1>Product List</h1>
        <div className="buttons">
          <Button id="add-product-btn" title="ADD" onClick={navigateToAdd} ></Button>
          <Button id="delete-product-btn" title="MASS DELETE" onClick={handleMassDelete} ></Button>
        </div>
      </Header>
      <main>
        <div className="section">
        {
          products.map(product => {
            const attribute = checkType(product);
            return (
              <Item key={product.id}>
                <input 
                  className="delete-checkbox" 
                  type="checkbox"
                  idfordelete={product.id}
                />
                <p>{product.sku}</p>
                <p>{product.name}</p>
                <p>{product.price} $</p>
                <p>{attribute}</p>
              </Item>
            )
          })
        }
        </div>
      </main>
      <Footer />
    </Container>
  );
}