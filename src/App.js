import "./App.css";
// import FeedButton from "./components/FeedButton";
// import HeaderOptions from "./components/HeaderOptions";
import LogIn from "./components/LogIn";
// import NewOpportunityCard from "./components/NewOpportunityCard";
import NewOpportunityCardTop from "./components/NewOpportunityCardTop";
// import OldOpportunityCard from "./components/OldOpportunityCard";
// import LeftHeader from "./components/LeftHeader";
import Dashboard from "./components/Dashboard";
import People from "./components/People";
import Forum from "./components/Forum.js";
import Applications from "./components/Applications";
import Opportunity from "./components/Opportunity";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/*<LogIn />*/}
      {/* <NewOpportunityCard /> */} {/* <NewOpportunityCardTop /> */}{" "}
      {/*<OldOpportunityCard />*/}
      {/* <Forum /> */}
      {/*<PeopleCard />*/}
      {/*<PeopleList/>*/}
      {/* <FeedButton text={"Discover"} /> */}
      {/* {<LeftHeader />} */}
      {/*<LeftMenu />*/}
      {/* <Applications /> */}
      {/* <People /> */}
      {/* <Opportunity /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forum/:id" element={<Forum />} />
          <Route path="/application" element={<Applications />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/people" element={<People />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
