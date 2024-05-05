import './App.css';
import HomePage from './Pages/HomePage';
import ApplyPage from './Pages/ApplyPage';
import ReferralPage from './Pages/ReferralPage';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/ApplyPage' element ={<ApplyPage/>}/>
        <Route path='/ReferralPage' element ={<ReferralPage/>}/> */}
       </Routes>
    </div>
      
  );
}

export default App;
