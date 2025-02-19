import { CardItems, CardItemsText } from "./components/CardItems";
import { CardImage } from "./components/CardImage";
import "./App.scss";

function App() {
  const propsCard = {
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  };

  return (
    <>
      <CardItems
        title={propsCard.title}
        text={propsCard.text}
        image={<CardImage />}
      />
      <CardItemsText title={propsCard.title} text={propsCard.text} />
    </>
  );
}

export default App;
