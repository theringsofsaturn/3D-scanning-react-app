
import "./Card.css";
import { Images } from "../../assets";
const cardData = [
  {
    title: "Real Estates",
    image: Images.CardOne,
  },
  {
    title: "Resorts & Event Venues",
    image: Images.CardTwo,
  },
  {
    title: "Auto Dealership",
    image: Images.CardThree,
  },
  {
    title: "Property Assuranse & Resortation",
    image: Images.CardFour,
  },
  {
    title: "Healthcare Facilities",
    image: Images.CardFive,
  },
  {
    title: "Schools & Universities",
    image: Images.CardSix,
  },
  {
    title: "Show room and retail stores",
    image: Images.CardSeven,
  },
  {
    title: "Museums",
    image: Images.CardEight,
  },
  {
    title: "Warehouse & Factory",
    image: Images.CardNine,
  },
];

function Card() {
  return (
    <>
      <div className="card-grid">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <p className="Title">{card.title}</p>
            <img src={card.image} alt={card.title} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
