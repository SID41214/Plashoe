import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
// import Navbar from './Components/Navbar';
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Collection from "./Pages/Collection";
import Lookbook from "./Pages/Lookbook";
import Sale from "./Pages/Sale";
import Ourstory from "./Pages/Ourstory";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import { createContext, useState } from "react";
import Checkout from "./Components/Checkout";
import { AllshoeData } from "./Components/AllshoeData";
import AdminLogin from "./Pages/AdminLogin";
import Admin from "./Pages/Admin";
import AdminUser from "./Pages/AdminUser";
import AdminProducts from "./Pages/AdminProducts";
import AdminRevenue from "./Pages/AdminRevenue";
import AddProducts from "./Pages/AddProducts";
import EditProduct from "./Pages/EditProduct";
export const MyContext = createContext();

function App() {
  const [userData, setUserdata] = useState([
    { username: "amal", password: "123",email:"amal@gmail.com" },{ username: "dani", password: "123",email:"dani@gmail.com" },{ username: "noor", password: "123",email:"noor@gmail.com" }
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [carddata, Setcarddata] = useState([]);
  const [total, setTotal] = useState("");
  const [islogin, setIslogin] = useState(false);
  const [allproducts,setAllproducts]=useState(AllshoeData);
  
  const data = {
    userData,
    setUserdata,
    searchTerm,
    setSearchTerm,
    carddata,
    Setcarddata,
    total,
    setTotal,
    islogin,
    setIslogin,allproducts,setAllproducts
  };

  return (
    <div>
      <MyContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/ourstory" element={<Ourstory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} >
            <Route path="/admin/user" element={<AdminUser/>}/>
            <Route path="/admin/products" element={<AdminProducts/>}/>
            <Route path="/admin/revenue" element={<AdminRevenue/>}/>
            <Route path="/admin/addproducts" element={<AddProducts/>}/>
            <Route path="/admin/editproduct/:id" element={<EditProduct/>}/>
          </Route>

        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
