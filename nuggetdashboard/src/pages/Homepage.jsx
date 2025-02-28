import FormComponent from "../components/Form";
import HeroComponent from "../components/Hero";
function HomePage() {
  return (
    <div>
      <HeroComponent></HeroComponent>
      <h1 className="bg-amber-200">hej monika</h1>
      <FormComponent></FormComponent>
    </div>
  );
}

export default HomePage;
