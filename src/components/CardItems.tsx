type CardsProps = {
  title: string;
  text: string;
  image?: string;
};

export const CardItems = ({ title, text, image }): CardsProps => (
  <div className="card" style={{ width: "18rem" }}>
    {image}
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);
