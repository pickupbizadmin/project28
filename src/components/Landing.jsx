import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home"; 
import { AvailableSeats } from "./AvailableSeats";
import { Nav } from "./Nav";

export const Landing=()=>{
    return(
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/available" element={<AvailableSeats />} />
            </Routes>
        </BrowserRouter>
    )
}
