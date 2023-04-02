import React from "react";

const Card = (props) => {
  return <div className={"Card w-fit h-fit md:w-1/2 xl:w-1/3"}>{props.children}</div>;
};

export default Card;
