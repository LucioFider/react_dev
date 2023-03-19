import React from "react";

const user = {
  name: "Harlie Smith",
  imageUrl:
    "https://cdn.pixabay.com/photo/2023/03/12/02/04/spot-billed-pelican-7845682__340.jpg",
  imageSize: 90,
};

export default function Button() {
  return (
    <>
      <button>Button</button>

      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={"Photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
