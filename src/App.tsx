import "./App.css";
import Card from "./components/card";
import CardImg from './assets/img/spacejoy-YqFz7UMm8qE-unsplash.jpg';

function App() {
  // const Icon = () => (<img src={rightArrowIcon} />)
  return (
    <div className="flex flex-1 justify-center items-center w-full h-full">
      <Card 
        imgUrl={CardImg}
        badges={['Interior']}
        title="Top 5 Living Room Inspirations"
        content="Curated vibrants colors for your living, make it pop & calm in the same time."
        ctaLink="/top5"
      />
    </div>
  );
}

export default App;
