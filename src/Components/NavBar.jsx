import { Link,useLocation } from "react-router-dom"
import cartContext from "../utils/cartContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




function NavBar ({mode,setMode}){
  const location = useLocation();
  console.log(location)

  // const excludedPaths = [`/movie/in/The%20Godfather`]; //paths where header should be excpluded
  const includedPaths = ["/","/allmovies","/about","/services","/contact"] //2nd option, rount you wanted you mention the all pages that you want to show
  //Check if current path is in the excludedPaths array
  const shouldRenderHeader = includedPaths.includes(location.pathname)
  console.log(shouldRenderHeader)

  const cartNavbar=useContext(cartContext)
  console.log(cartNavbar)
  console.log(useContext(cartContext))

  //subscribing to the store
  const cartItems=useSelector(store=>store.cart.items)
  console.log(cartItems.length)

    return(
        <>
        
    <nav className="navbar bg-black navbar-expand-lg sticky-top justify-content-between ps-5">
        <span className="fs-4 text-warning"><i className="fa-solid fa-couch"></i><i className="fa-solid fa-wine-glass"></i><a className="navbar-brand text-white fs-5 ms-1" href="#">MovieStation</a></span>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ms-auto">
        {/* <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav gap-3"> */}
            {/* <!-- Home --> */}
          <a className="nav-link"><Link to='/' className="text-secondary text-decoration-none">Home</Link></a>
          {/* <!-- About Us --> */}
          <a className="nav-link"><Link to='/about' className="text-secondary text-decoration-none" >About Us</Link></a>
          
          {/* Movie */}
          <a className="nav-link"><Link to='/allmovies' className="text-secondary text-decoration-none">All Movies</Link></a>
          {/* AddMovie */}
          <a className="nav-link"><Link to='/addmovie' className="text-secondary text-decoration-none">Add Movie</Link></a>
          {/* Cart */}
          {/* <div><Link to='/addtocart' className="text-secondary text-decoration-none">Add to Cart{cartNavbar}</Link></div> */}

            {/* Redux */}
            <a className="nav-link"><Link to='/cartpage' className="text-secondary text-decoration-none"><ShoppingCartIcon/>{cartItems.length}</Link></a>
            {/* <!-- Service --> */}
            <a className="nav-link"><Link to='/services' className="text-secondary text-decoration-none">Service</Link></a>
            {/* <!-- Contact Us --> */}
            <a className="nav-link"><Link to='/contact' className="text-secondary text-decoration-none">Contact Us</Link></a>
            </ul>
          {/* Search*/}
          <form>
          <div className="iput-icons">
          <i className="fas fa-search icon fs-5 pt-2 ms-2"></i>
            <input className="input-field" type="search" aria-label="Search" name="" id="" placeholder="Search movie"
            onChange={()=>{
              this.setState({
                query: this.search.value
            }, this.filterArray)
            }
             
          }/>
          </div>

          </form>
            <div className="me-5"><span 
            onClick={()=>{
              //setMode("light")
              //true?"truedata":"falsedata"
              setMode(mode=="light"?"dark":"light")//setMode(light)
              console.log(mode)
            }}>
              {mode==="light"?<DarkModeIcon/>:<LightModeIcon/>}
              </span></div>
         
        {/* </ul> */}
        {/* </div> */}
      
      </nav>
      {/* {shouldRenderHeader && <Header/>} */}
    </>
    )
}
export default NavBar