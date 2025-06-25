import { Routes, Route } from "react-router"
import Common from "./components/commonLayouts/Common"
import NewsFeed from "./pages/NewsFeedPage"
import Profile from "./pages/ProfilePage"
import Friends from "./pages/FriendsPage"
import About from "./pages/AboutPage"
import Store from "./pages/StorePage"
import Product from "./pages/ProductPage"
import Cart from "./pages/CartPage"
import ProductDetails from "./pages/ProductDetailsPage"
import Checkout from "./pages/CheckoutPage"
function App() {

  return (
     
    <Routes>
      <Route element = {<Common/>}>
         <Route index element={< NewsFeed/>} />
         <Route path="/profile" element={<Profile/>} />
         <Route path="/friends" element={<Friends />} />
         <Route path="/about" element={<About/>}/>
         <Route path="/store" element={<Store/>}/>
         <Route path="/product" element={<Product/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/product-details" element={<ProductDetails/>}/>
         <Route path="/checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
    
  )
}

export default App
