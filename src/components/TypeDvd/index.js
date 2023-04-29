import React from "react";
import { useState } from "react";
import { Container } from "./style";

export function TypeDvd({ setatt }) {

  return (
    <Container>
      <div>
        <label htmlFor="size">Size (MB)</label>
        <input id="size" type="number" required onChange={e => setatt(e.target.value)}/>
      </div>
      <p>* Please, provide size of product</p>
    </Container>
  );
}