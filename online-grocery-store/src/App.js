import './App.css';
import MainPage from './Main';
import Fruits from './pages/Fruits';
import LoginPage from './pages/LoginPage';
import Diary from './pages/Diary';
import { Routes,BrowserRouter,Route} from 'react-router-dom';
function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<MainPage/>}/>
      <Route path="/Fruits" element={<Fruits/>} />
      <Route path="/Login" element={<LoginPage/>} />
      <Route path='/dairy' element={<Diary/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;