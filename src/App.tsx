import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEvent from "./pages/AddEvent";
import EventDetails from "./pages/EventDetails";
import Awards from "./pages/Awards";
import AllEvents from "./pages/AllEvents";
import Articles from "./pages/Articles";
import UpcomingEvents from "./pages/UpcomingEvents";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Partners from "./pages/Partners";
import About from "./pages/About";
import GloCon from "./pages/GloCon";
import LGEC from "./pages/LGEC";
import LOWS from "./pages/LOWS";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/glocon" element={<GloCon />} />
        <Route path="/lgec" element={<LGEC />} />
        <Route path="/lows" element={<LOWS />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        {/* Hidden CMS Route as requested */}
        <Route path="/add-event" element={<AddEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

