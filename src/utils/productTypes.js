import React, { useState } from "react";
import { TypeDvd } from "../components/TypeDvd";
import { TypeBook } from "../components/TypeBook";
import { TypeFurniture } from "../components/TypeFurniture";


export function ProductTypes(setatt, sethei, setwid, setlen) {

  return [
    <TypeDvd setatt={setatt} />,
    <TypeBook setatt={setatt} />,
    <TypeFurniture sethei={sethei} setwid={setwid} setlen={setlen} />
  ];
}