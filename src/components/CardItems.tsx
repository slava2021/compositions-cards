import * as React from "react";

type CardsProps = {
  title: string;
  text: string;
  image?: string;
};

export const CardItems = (props): CardsProps => (
  <div className="card" style={{ width: "18rem" }}>
    {props.image}
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

export const CardItemsText = (props: Omit<CardsProps, "image">) => {
  // console.log(props);

  const newProps = {
    ...props,
  };
  return <CardItems {...newProps} />;
};
