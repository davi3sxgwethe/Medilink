import { Routes, Route } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Homepage with Sidebar */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Homepage />
              <Carousel />
              <Footer />
            </MainLayout>
          }
        />

        {/* Auth Routes - No Sidebar */}
        <Route path="/signin" element={<AuthChoice type="signin" />} />
        <Route path="/signup" element={<AuthChoice type="signup" />} />
        <Route path="/signin/doctor" element={<DoctorsSignin />} />
        <Route path="/signup/doctor" element={<DoctorsSignUp />} />
        <Route path="/signin/patient" element={<PatientSignIn />} />
        <Route path="/signup/patient" element={<PatientSignUp />} />

        {/* General Routes - No Sidebar */}
        <Route path="/get-services" element={<GetServicesPage />} />
        <Route path="/makepayment" element={<MakePayment />} />
        <Route path="/uploadservices" element={<UploadServices />} />

        {/* Routes with Sidebar via MainLayout wrapper */}
        <Route element={<MainLayout />}>
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/dashboard" element={<DoctorDashboard />} />
          <Route path="/viewappointments" element={<ViewAppointments />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/admin/approve-doctors" element={<DoctorApprovalPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
