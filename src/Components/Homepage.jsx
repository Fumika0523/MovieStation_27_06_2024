import AboutUs_Section from "./AboutUs_Section"
import ContactUs_Section from "./ContactUs_Section"
import MovieDisplay from "./Movie/MovieDisplay"
import Service_Section from "./Service_Section"
import Header from "./Header"

function Homepage({movie}){
    return(
        <>
        {/* <MovieDisplay movie={movie}/> */}
        <Header/>
        <AboutUs_Section/>
        <Service_Section/>
        <ContactUs_Section/>
        </>
    )
}
export default Homepage