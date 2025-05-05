import './App.css';
// import CarouselSection from './Components/Carousel/Carousel';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
// import SignInPage from './Components/Signin/Signin';
// import SignUpPage from './Components/Signup/Signup';
import {  Routes, Route } from 'react-router-dom';
import UploadServices from './Components/Uploadproducts/Uploadproducts';
import AuthChoice from './Components/Auth/AuthChoice';
import DoctorsSignin from './Components/Auth/DoctorsSignin';
import DoctorsSignUp from './Components/Auth/DoctorsSignup';
import PatientSignIn from './Components/Auth/PatientsSignin';
import PatientSignUp from './Components/Auth/PatientsSignup';
import GetServicesPage from './Components/Getservices'; // Match the casing exactly!
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/footer';
import MakePayment from './Components/Makepayment/Makepayment';



function App() {
  return (
  
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage />
                <Carousel/>
                <Footer/>
                
              </>
            }
          />
          {/* <Route path="/signup" element={<SignUpPage />} /> */}
          {/* <Route path="/signin" element={<SignInPage />} /> */}
          <Route path="/uploadservices" element={<UploadServices/>} />
          <Route path="/signin" element={<AuthChoice type="signin" />} />
          <Route path="/signup" element={<AuthChoice type="signup" />} />
          <Route path="/get-services" element={<GetServicesPage/>} />
          <Route path='/makepayment'  element={<MakePayment/>} />
          
          

          <Route path="/signin/doctor" element={<DoctorsSignin />} />
          <Route path="/signup/doctor" element={<DoctorsSignUp />} />
          <Route path="/signin/patient" element={<PatientSignIn />} />
          <Route path="/signup/patient" element={<PatientSignUp />} />


          
        </Routes>
      </div>
  
  );
}

export default App;
