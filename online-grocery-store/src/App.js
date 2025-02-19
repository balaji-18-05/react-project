import './App.css';
import MainPage from './Main';
import Fruits from './pages/Fruits';
import LoginPage from './pages/LoginPage';
import Diary from './pages/Diary';
import { Routes,BrowserRouter,Route} from 'react-router-dom';
import Vegetables from './pages/Vegetables';
import Riceandgrains from './pages/Riceandgrains';
import Oilandpulses from './pages/Oilandpulses';
import Beverages from './pages/Beverages';
import Cakesandbiscuits from './pages/Cakesandbiscuits';
import Snackandchocolates from './pages/Snackandchocolates';
import Beautyandhygiene from './pages/Beautyandhygiene';
import Cleaningandhousehold from './pages/Cleaningandhousehold';
import Floursandmasala from './pages/Floursandmasala'
import Cart from './pages/Cart';
function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<MainPage/>}/>
      <Route path="/Login" element={<LoginPage/>} />
      <Route path="/Fruits" element={<Fruits/>} />
      <Route path='/dairy' element={<Diary/>}/>
      <Route path='/riceandgrains' element={<Riceandgrains/>}/>
      <Route path='/vegetables' element={<Vegetables/>}/>
      <Route path='/oilandpulses' element={<Oilandpulses/>}/>
      <Route path='/Beverages' element={<Beverages/>}/>
      <Route path='/cakes' element={<Cakesandbiscuits/>}/>
      <Route path='/snacks' element={<Snackandchocolates/>}/>
      <Route path='/beauty' element={<Beautyandhygiene/>}/>
      <Route path='/household' element={<Cleaningandhousehold/>}/>
      <Route path='/masala' element={<Floursandmasala/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;