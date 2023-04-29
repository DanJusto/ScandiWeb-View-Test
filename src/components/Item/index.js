import React, { useState } from "react";
import { Container } from "./style";

export function Item({ product }) {
    const [checked, setChecked] = useState(null);

    const arrIndex = ['dvd', 'book', 'furniture'];
    const index = arrIndex.indexOf(product.type);

    const arrExt = ['MB', 'KG', ''];
    const arrName = ['Size: ', 'Weight: ', 'Dimension: '];
    const attribute = arrName[index] + product.attribute + arrExt[index];

    return (
        <Container>
            <input 
                className="delete-checkbox" 
                type="checkbox"
                idfordelete={product.id}
            />
            <p>{product.sku}</p>
            <p>{product.name}</p>
            <p>{product.price} $</p>
            <p>{attribute}</p>
        </Container>
    );
}