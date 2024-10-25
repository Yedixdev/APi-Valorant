import SectionHome from "../components/home/SectionHome";
import SectionAgents from "../components/home/SectionAgents";
import SectionNews from "../components/home/SectionNews";
import SectionWeAre from "../components/home/SectionWeAre";
import SectionAllAgents from "../components/home/SectionAllAgents";
import SectionMaps from "../components/home/SectionMaps";
import SectionArms from "../components/home/SectionArms";
import Footer from "../components/Footer";

const Home = () => {
   return (
      <>
         <SectionHome/>
         <SectionAgents/>
         <SectionNews/>
         <SectionWeAre/>
         <SectionAllAgents/>
         <SectionMaps/>
         <SectionArms/>
         <Footer/>
      </>
   );
};

export default Home