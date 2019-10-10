import React, { Component } from "react";

const Error = props => {
  return (
    <>
      {props.four0four ? (
        <>
          <p>404 not found</p>
          <img src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.15752-9/72650429_679791989198729_7199813197665140736_n.jpg?_nc_cat=102&_nc_oc=AQmLPz6p215tTtsVP--p-jYMLjQCujm-KXPWMslnpZQ3yP5I-v1flvJERYcWV5DsK9E&_nc_ht=scontent-lhr3-1.xx&oh=fcc8f138527ed6383ca35d92e967883e&oe=5E34BD9B"></img>
        </>
      ) : (
        <p>
          {props.message} {props.notfound}
        </p>
      )}
    </>
  );
};

export default Error;
