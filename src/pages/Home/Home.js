import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import SuccessStory from "../SuccessStory/SuccessStory";
import Therapists from "../Therapists/Therapists";

const Home = () => {
  return (
    <div className="row">
      <Slider />
      <Services></Services>
      <Therapists></Therapists>
      <SuccessStory></SuccessStory>
    </div>
  );
};

export default Home;
