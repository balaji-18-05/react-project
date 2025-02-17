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
function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<MainPage/>}/>
      <Route path="/Fruits" element={<Fruits/>} />
      <Route path="/Login" element={<LoginPage/>} />
      <Route path='/dairy' element={<Diary/>}/>
      <Route path='/vegetables' element={<Vegetables/>}/>
      <Route path='/riceandgrains' element={<Riceandgrains/>}/>
      <Route path='/Beverages' element={<Beverages/>}/>
      <Route path='/loginpage' element={<LoginPage/>}/>
      <Route path='/oilandpulses' element={<Oilandpulses/>}/>
      <Route path='/oilandpulses' element={<Oilandpulses/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;