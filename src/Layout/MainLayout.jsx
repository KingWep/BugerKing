import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import AppRouters from "../Route/AppRouters";

export default function MainLayout(){
  return(
    <> 
      <div className="w-full h-[100vh] bg-green-700">
        <Nav/>
          <AppRouters/>
        <Footer/>
      </div>
    </>
  )
}