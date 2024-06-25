import logo from './logo.svg';
import './App.css'; // Import the CSS file
import NavBar from './componnents/NavBar/NavBar';
import MainContnet from './componnents/MainContnet/MainContnet';
import OnlineExperiance from './componnents/OnlineExperiance/OnlineExperiance';
import Card from './componnents/Card/Card';
import PersonPic from './images/person.png';


function App() {
  const cardData = [
    {
      imgSrc: PersonPic,
      status: 'SOLD OUT',
      rating: 6,
      place: 'USA',
      name: 'Life lessons with Katie Zaferes',
      price: 136,
      job: 'person'
    },
    {
      imgSrc: PersonPic,
      status: 'AVAILABLE',
      rating: 5,
      place: 'Canada',
      name: 'Learning to Cook with Gordon Ramsay',
      price: 200,
      job: 'person'
    },
    {
      imgSrc: PersonPic,
      status: 'AVAILABLE',
      rating: 5,
      place: 'Canada',
      name: 'Learning to Cook with Gordon Ramsay',
      price: 200,
      job: 'person'
    },
    {
      imgSrc: PersonPic,
      status: 'AVAILABLE',
      rating: 5,
      place: 'Canada',
      name: 'Learning to Cook with Gordon Ramsay',
      price: 200,
      job: 'person'
    },
    {
      imgSrc: PersonPic,
      status: 'AVAILABLE',
      rating: 5,
      place: 'Canada',
      name: 'Learning to Cook with Gordon Ramsay',
      price: 200,
      job: 'person'
    },
    {
      imgSrc: PersonPic,
      status: 'AVAILABLE',
      rating: 5,
      place: 'Canada',
      name: 'Learning to Cook with Gordon Ramsay',
      price: 200,
      job: 'person'
    },
    // Add more card data objects as needed
  ];

  return (
    <div className='container'>
      <NavBar />
      <MainContnet />
      <OnlineExperiance />
      <div className="CardContainerDiv">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            status={card.status}
            rating={card.rating}
            place={card.place}
            name={card.name}
            price={card.price}
            job={card.job}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
