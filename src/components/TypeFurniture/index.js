import React from "react";
import { useState } from "react";
import { Container } from "./style";

export function TypeFurniture({ sethei, setwid, setlen }) {

  return (
    <Container>
      <div>
        <label htmlFor="height">Height (CM)</label>
        <input id="height" type="number" required onChange={e => sethei(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="width">Width (CM)</label>
        <input id="width" type="number" required onChange={e => setwid(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="length">Length (CM)</label>
        <input id="length" type="number" required onChange={e => setlen(e.target.value)}/>
      </div>
      <p>* Please, provide dimensions in HxWxL format</p>
    </Container>
  );
}