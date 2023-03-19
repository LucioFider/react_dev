import React from "react";

export default function ConditionalRender() {
  // using if statement to conditionally include JSX;
  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  return <div>{content}</div>;
}

// using conditional ? operator

<div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;
