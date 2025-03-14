import HeroVideo from "../components/Herovideo/HeroVideo";
import BasicPie from "../components/charts/PieChart";
import SimpleLineChart from "../components/charts/LineChartDeluxe";
import CircularText from "../components/RotatingText/CircularText";

function HomePage() {
  return (
    <div>
      <HeroVideo />
      <h2 className="text-2xl font-bold text-center text-black">
        Important things in life
      </h2>
      <div className="flex justify-center gap-8">
        <BasicPie />
        <SimpleLineChart />
      </div>
      <section className="mt-5">
        <CircularText text="Bitcoin" />
      </section>
    </div>
  );
}

export default HomePage;
