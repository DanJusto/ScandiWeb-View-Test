import React from "react";
import { useState } from "react";
import { Container } from "./style";

export function TypeBook({ setatt }) {

  return (
    <Container>
      <div>
        <label htmlFor="weight">Weight (KG)</label>
        <input id="weight" type="number" required onChange={e => setatt(e.target.value)}/>
      </div>
      <p>* Please, provide weight of product</p>
    </Container>
  );
}