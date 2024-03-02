import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import { DataProvider } from "./context/DataContext";
import Home from "./Home";
import NutrionalChart from "./NutrionalChart";
import FitnessChart from "./FitnessChart";
import About from "./About";
import Footer from "./Footer";
import BmiNotes from "./BmiNotes";


function App() {
  return (
    <div className="App">
     <DataProvider>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="nutrionalchart" element={<NutrionalChart />}/>
        <Route path="fitnesschart" element={<FitnessChart />}/>
        <Route path="bmi" element={<BmiNotes />} />
        <Route path="about" element={<About />} />
      </Routes>
      
      <Footer />


     </DataProvider>
    </div>
  );
}

export default App;
