import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import AppRouters from "../Route/AppRouters";

export default function MainLayout(){
  return(
    <> 
      <div className="w-full bg-orange-200/60">
        <Nav/>
          <AppRouters/>
        <Footer/>
      </div>
    </>
  )
}