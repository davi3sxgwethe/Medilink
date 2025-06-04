import { Routes, Route } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Homepage from './Components/Homepage/Homepage';
import Customcarousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/footer';
import AuthChoice from './Components/Auth/AuthChoice';
import DoctorsSignin from './Components/Auth/DoctorsSignin';
import DoctorsSignUp from './Components/Auth/DoctorsSignup';
import PatientSignIn from './Components/Auth/PatientsSignin';
import PatientSignUp from './Components/Auth/PatientsSignup';
import GetServicesPage from './Components/Getservices';
import MakePayment from './Components/Makepayment/Makepayment';
import UploadServices from './Components/Uploadproducts/Uploadproducts';
import DoctorDashboard from './Components/DoctorDashboard/Doctordashboard';
import ViewAppointments from './Components/ViewAppointments.jsx/Viewappointments';
import Messages from './Components/Messages/Messages';
import Patients from './Components/Patients/Patients';
import DoctorApprovalPage from './Components/DoctorApprovalPage';
import ContactUs from './Components/Contactus/Contactus';
import Chatbot from './Components/Chatbot';
import Articles from './Components/Articles';
import NearbyHospitals from './Components/NearbyHospitals';
import AdminDashboard from './Components/AdminDashboard';
import AdminSignIn from './Components/AdminSignIn';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <Customcarousel/>
              <Footer />
            </>
          }
        />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/dashboard" element={<DoctorDashboard />} />
        <Route path="/viewappointments" element={<ViewAppointments />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/admin/approve-doctors" element={<DoctorApprovalPage />} />
        <Route path="/chatbot" element={<Chatbot/>}/>
        <Route path="/articles" element={<Articles/>}/>
        <Route path= "/nearby-hospitals" element={<NearbyHospitals/>}/>
        <Route path="/admin-dashboard"element={<AdminDashboard/>}/>
        <Route path="/adminpage"element={<AdminSignIn/>}/>
      </Route>

      {/* Auth Routes - No Sidebar or Navbar */}
      <Route path="/signin" element={<AuthChoice type="signin" />} />
      <Route path="/signup" element={<AuthChoice type="signup" />} />
      <Route path="/signin/doctor" element={<DoctorsSignin />} />
      <Route path="/signup/doctor" element={<DoctorsSignUp />} />
      <Route path="/signin/patient" element={<PatientSignIn />} />
      <Route path="/signup/patient" element={<PatientSignUp />} />

      {/* Public Routes - No Sidebar */}
      <Route path="/get-services" element={<GetServicesPage />} />
      <Route path="/makepayment" element={<MakePayment />} />
      <Route path="/uploadservices" element={<UploadServices />} />
      <Route path="contactus" element={<ContactUs/>}/>
    </Routes>
  );
}

export default App;
