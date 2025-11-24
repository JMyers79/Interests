
import './App.css';
import Accordion from './componets/Accordion';
import Header from './componets/Header';
import Carousel from './componets/Carousel';
import Pricing from './componets/Pricing';
import Footer from './componets/Footer';

const fTitle ='J-Mobile. All rights reserved.';
const iLink = 'https://twitter.com';
const tLink = "https://www.instagram.com";
const text = 'Follow J-Mobile on';
const lColor = 'text-blue-400'

const accordionData = [
  {
    title: "New in Two",
    content:
      "Oppurtunity to get a free phone every two years!",
  },
  {
    title: "Satalite Service",
    content:
      "Be connected anywhere, even in Space" ,
  },
  {
    title: "Achievements",
    content: "Officially partnered with Tesla",
  },
];

const carouselData = [
  {
    image: "./images/iphone.webp",
    title: "IPhone 17 Series",
    description: "Free with Trade in of IPhone 11 or newer",
  },
  {
    image: "./images/samsung.webp",
    title: "Galaxy S25 Series",
    description: "4 Lines for $100",
  },
  {
    image: "./images/pixel.webp",
    title: "Google Pixel 10 Series",
    description: "Get $300 when you switch",
  }
];

const title = "J-Mobile Service"
function App() {
  return (
    <div className="App">
      <Header
      title = {title}
      />
      <section className="w-full">
        <h2 className="text-2xl font-semibold mb-4 px-6">Phone Offers</h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <Carousel items={carouselData} />
          </div>
          <div className="flex-1">
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Pricing />
        </div>
      </section>
      <Footer
      fTitle = {fTitle}
      instaLink = {iLink}
      twitterLink = {tLink}
      text = {text}
      linkColor = {lColor}
      />
    </div>
  );
}

export default App;
