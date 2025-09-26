import { Routes, Route } from "react-router-dom"
import Home from "../Page/Home"
import Restaurant from "../Page/Restaurant"
import Offer from "../Page/Offer"
import Menu from "../Page/Menu"
import Reward from "../Page/Reward"


export default function AppRouters() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reward" element={<Reward />} />
      </Routes>
    </>
  )
}