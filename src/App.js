import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo"
import SectionThree from "./components/SectionThree/SectionThree";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionSix from "./components/SectionSix/SectionSix";

function App() {
  return (
    <div>
       <Header/>
       <SectionOne/>
       <SectionTwo/>
       <SectionThree/>
       <SectionFour/>
       <SectionFive/>
       <SectionSix/>
       <Footer/>
    </div>
  );
}

export default App;
