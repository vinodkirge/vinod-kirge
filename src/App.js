
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ReportIssue from './pages/ReportIssue';
import TrackReports from './pages/TrackReports';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<About/>}/>
      <Route path="/report-issue" element={<ReportIssue/>}/>
      <Route path="/track-reports" element={<TrackReports/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
