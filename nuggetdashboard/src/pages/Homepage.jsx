import FormComponent from "../components/Form";
import HeroComponent from "../components/Hero";
import HeroVideo from '../components/Herovideo/HeroVideo'



function HomePage() {
  return (
    <div>
      <HeroComponent></HeroComponent>
      < HeroVideo />
      <FormComponent></FormComponent>
    </div>
  );
}

export default HomePage;
