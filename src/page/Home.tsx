
import Card from "./card/Card";
import HotDetails from "./home/hotdetails/main/HotDetails";
import Slider from "./home/Slider";



const Home = () => {

  return (
    <div>

    <div
      className="bg-[url('/back.jpg')] bg-cover bg-center bg-white text-black flex items-center mx-28 rounded-2xl  justify-center"
      >
      <Card />
    </div>
    <div className="w-3/4 mx-auto mt-10">

    <Slider/>
    <HotDetails/>
    </div>
      </div>


  );
};

export default Home;