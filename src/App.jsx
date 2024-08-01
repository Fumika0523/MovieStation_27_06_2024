import './App.css'
import AboutUs_Section from './Components/AboutUs_Section';
import MovieDisplay from './Components/Movie/MovieDisplay';
import NavBar from './Components/NavBar';
import Service_Section from './Components/Service_Section';
import ContactUs_Section from './Components/ContactUs_Section';
import Homepage from './Components/Homepage';
import {Route,Routes} from 'react-router-dom';
import Footer from './Components/Footer';
import MovieInfo_ReactBoostrap from './Components/Movie/MovieInfo_ReactBoostrap'
import React, {useEffect,useState} from 'react'
import AddMovie_UI from './Components/Material_UI/AddMovie_UI'
import EditMovie from './Components/Movie/EditMovie';
// https://66760c9da8d2b4d072f24534.mockapi.io/movie/movie
import cartContext from "./utils/cartContext";
import textContext from './utils/textContext';
import store from './utils/store';
import {Provider} from 'react-redux'; 
import textSlice from './utils/textSlice';
import Cartpage from './Components/Cartpage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MovieCard from './Components/Movie/MovieCard

function App() {
  const AboutUs_LastSection = [
    {    
        AboutUs_comment:
        "We work tirelessly to make the experience of using our apps the best that it can be and we love any feedback or suggestions you may have in order for us to improve further."
    },
    {    
        AboutUs_comment:
        "If you would like to find out more about opportunities to work with us, visit our talent page, we are always looking to get more skilled and inspired people on our team."
    },
    {    
        AboutUs_comment:
        " If you are interested in running campaigns with us for your upcoming movie, home entertainment release or VOD service we are happy to hear from you."
    },
]

  const [movieData,setMovieData] = useState([])
  const [cartUCtxt,setCartUtxt] = useState(0)  
  const [textUseContext,setTextUseContext] = useState("Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer.")

  const getMovieData = async()=>{
    console.log("Movie data is called...")
    let res = await fetch ('https://66760c9da8d2b4d072f24534.mockapi.io/movie/movie')
    let data = await res.json()
    console.log(data)
    setMovieData(data)
  }
    //   const movieDetails = [
    //     {
    //         movieTrailer:"https://www.youtube.com/embed/YqNYrYUiMfg",
    //     }
    // ]

  useEffect(()=>{
    getMovieData()
  },[]) //API Call
//initial value is stored as dark
const [mode, setMode]=useState("dark")

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
  <ThemeProvider theme={theme}>
     {/* your design */}
  <CssBaseline /> 
  <Provider store={store}>
    <cartContext.Provider value={[cartUCtxt,setCartUtxt]}>
    <textContext.Provider value={[textUseContext,setTextUseContext]}>
    {/* <div style={{backgroundColor:"black",color:"white",}}> */}
    <div>
    <NavBar mode={mode} setMode={setMode} />
    {/* <AddMovie_Formik setMovieData={setMovieData}/>   */}
    {/* <MovieDisplay movie={movie} /> */}
    <Routes>
      <Route path="/" element={<Homepage movieData={movieData}/>}/>
      {/* prop name should be same as a useState valiable */}
      <Route path='/allmovies' element={<MovieCard movieData={movieData} setMovieData={setMovieData}/>}/>
      {/* <Route path='/allmovies' element={<MovieDisplay movieData={movieData} setMovieData={setMovieData} />}/> */}
      {/* <Route path='/addmovie' element={<AddMovie setMovieData={setMovieData} />}/> */}
      <Route path='/addmovie' element={<AddMovie_UI setMovieData={setMovieData}/>}/>
      <Route path='/about' element={<AboutUs_Section/>}/>
      <Route path='/services' element={<Service_Section/>}/>
      <Route path='/contact' element={<ContactUs_Section/>}/>
      {/* <Route path="/movie/in/:id" element={<MovieInfo movie={movie}/>}/> */}
      {/* link to the particular URL and search in the route to Render */}
      {/*When you click the INFO btn and it will take you to the specic URL (/movie/in/xx) change, (Dynamic routing /: xxx), so you can get I movie */}
      <Route path="/movie/in/:id" element={<MovieInfo_ReactBoostrap movieData={movieData}/>}/>
      <Route path="/editmovie/:id" element={<EditMovie movieData={movieData} />}/>
      <Route path="/cartpage" element={<Cartpage/>}></Route>
    </Routes>
    <div style={{position:"relative"}}>
    <Footer />
    </div>
    {/* {
        movieData.map((element,index)=>(
          // console.log(element.movieposter)
         <MovieCard {...element}/>
        ))
    } */}
    </div>
    {/* </div> */}
    </textContext.Provider>
    </cartContext.Provider>
  </Provider>
  </ThemeProvider>
  </>
  )
}


export default App

// Collect and replace to the HD image of movie and name and casting, rating (GIVE A STAR : 1,2,3,,,,),summary (array of the object )
// MovieDisplay.jsx:12 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `MovieDisplay`. See https://reactjs.org/link/warning-keys for more information.
//     at MovieCard (http://localhost:5173/src/Components/MovieCard.jsx?t=1718060192109:20:22)
//     at MovieDisplay (http://localhost:5173/src/Components/MovieDisplay.jsx?t=1718060192109:18:25)
//     at div
//     at App

// Warning: Each child in a list should have a unique "key" prop.//Analyse why Im getting this warning,
// >> 

//create a service page, like AboutUs, create components ★　　https://www.justwatch.com/in/apps
//NavBar (No Testimonial,), navy colour: x,
//array of object, create for movies,
//footer component, justWatch only 1st line, -

//Asos.com re-create in React, Boostrap., own css,

//TASK:
//1:before the theme button , create the search box >> input BOx
// Type and search, onchange, useState useState variable <<< Filter method

//2:Only visible on All Movie page

//Footer, check the title
//AllMovies page, 3 films in 1 row with a more width
//Add the icon for add to cart, Redux  
//3 dots will link to particular page , trailer page, (Infor button)
//Summary for arrow function hire/unhide (show only 3-4 line) all the cards are similar
//Cast in rating
//Add Movie, use Use Material, & UseFormik, side by side for input tag similar  to Contact Us page
//Add Movie, message should be changed. check from other film website   
//Remove Add Cart, and keep only Redux (Shopping Icon with number)    <<<--- DONE
//About US is after the HOme page   <<<---- DONE
//Remove the heading from All Movie page.     <<<------


