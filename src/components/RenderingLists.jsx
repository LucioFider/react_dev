import React from "react";

// const products = [
//   { title: "Cabbage", id: 1 },
//   { title: "Avacado", id: 2 },
//   { title: "Garlic", id: 3 },
//   { title: "Banana", id: 4 },
// ];
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Avacado", isFruit: false, id: 2 },
  { title: "Garlic", isFruit: false, id: 3 },
  { title: "Banana", isFruit: true, id: 4 },
];

// const listItems = products.map((product) => (
//   <li key={product.id}>{product.title}</li>
// ));

export default function RenderingLists() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
    >
      {product.title}
    </li>
  ));

  return <div>{listItems}</div>;
}
