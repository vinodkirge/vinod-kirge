import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ReportIssue from './pages/ReportIssue';
import TrackReports from './pages/TrackReports';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AllReports from './pages/AllReports';
import PastReports from './pages/PastReports';
import User from './pages/User';
import ChatBot from './pages/ChatBot';
import Map from './pages/Map';
import Ngo from './pages/Ngo';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/report-issue" element={<ReportIssue/>}/>
      <Route path="/track-reports" element={<TrackReports/>}/>
       <Route path="/all-reports" element={<AllReports/>}/>
      <Route path="/past-reports" element={<PastReports/>}/>
       <Route path="/faq" element={<ChatBot/>}/>
        <Route path="/map" element={<Map/>}/>
         <Route path="/ngo" element={<Ngo/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
       <Route path="/user" element={<User/>}/>
    </Routes>
    </>
  );
}

export default App;
