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
  
  /*window.addEventListener('popstate', e => {
    setProducts(prods);
    window.location.reload();
  })
  
  function listProducts(products) {
    let section = document.querySelector('.section');
    products.forEach(product => {
      let item = createItem(product);
      section.appendChild(item);
    })
  }

  function createItem(product) {
    let item = document.createElement('div')
    item.setAttribute("class", "item");
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "delete-checkbox");
    checkbox.setAttribute("idfordelete", product.id);
    let sku = document.createElement('p');
    let name = document.createElement('p');
    let price = document.createElement('p');
    let attribute = document.createElement('p');

    sku.innerHTML = product.sku;
    name.innerHTML = product.name;
    price.innerHTML = product.price;
    attribute.innerHTML = checkType(product);

    item.appendChild(checkbox);
    item.appendChild(sku);
    item.appendChild(name);
    item.appendChild(price);
    item.appendChild(attribute);

    return item;
  }*/

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

  window.addEventListener('load', async () => {
    const response = await api.get(`/`)
    const listProds = JSON.parse(response.data.body);
    const section = document.querySelector('.section');
    listProds.forEach(product => {
      let item = document.createElement('div')
      item.setAttribute("class", "item");
      let checkbox = document.createElement('input');
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("class", "delete-checkbox");
      checkbox.setAttribute("idfordelete", product.id);
      let sku = document.createElement('p');
      let name = document.createElement('p');
      let price = document.createElement('p');
      let attribute = document.createElement('p');
  
      sku.innerHTML = product.sku;
      name.innerHTML = product.name;
      price.innerHTML = product.price;
      attribute.innerHTML = checkType(product);
  
      item.appendChild(checkbox);
      item.appendChild(sku);
      item.appendChild(name);
      item.appendChild(price);
      item.appendChild(attribute);
          
      section.appendChild(item);
    });
  });
  /*useEffect(() => {
    async function fetchProducts() {
      //const response = await api.get(`/`);
      fetch("https://scandiweb-api.cloud")
      .then(response => response.json())
      .then(responseJson => {
        const listProds = JSON.parse(responseJson.data.body);
        const section = document.querySelector('.section');
        console.log(listProds);
        listProds.forEach(product => {
          let item = document.createElement('div')
          item.setAttribute("class", "item");
          let checkbox = document.createElement('input');
          checkbox.setAttribute("type", "checkbox");
          checkbox.setAttribute("class", "delete-checkbox");
          checkbox.setAttribute("idfordelete", product.id);
          let sku = document.createElement('p');
          let name = document.createElement('p');
          let price = document.createElement('p');
          let attribute = document.createElement('p');
  
          sku.innerHTML = product.sku;
          name.innerHTML = product.name;
          price.innerHTML = product.price;
          attribute.innerHTML = checkType(product);
  
          item.appendChild(checkbox);
          item.appendChild(sku);
          item.appendChild(name);
          item.appendChild(price);
          item.appendChild(attribute);
          section.appendChild(item);
        });
      });
    };
    fetchProducts();
  }, []);*/

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
        
        </div>
      </main>
      <Footer />
    </Container>
  );
}

/*{
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
        }*/