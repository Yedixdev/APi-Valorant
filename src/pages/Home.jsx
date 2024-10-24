import SectionHome from "../components/componets-home/SectionHome";
import SectionAgents from "../components/componets-home/SectionAgents";
import SectionNews from "../components/componets-home/SectionNews";
import SectionWeAre from "../components/componets-home/SectionWeAre";
import SectionAllAgents from "../components/componets-home/SectionAllAgents"

const Home = () => {
   return (
      <>
         <SectionHome/>
         <SectionAgents/>
         <SectionNews/>
         <SectionWeAre/>
         <SectionAllAgents/>
      </>
   )
}

export default Home