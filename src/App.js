import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceDeails from "./pages/ServiceDetais/ServiceDeails";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Registration from "./pages/Registration/Registration";
import Services from "./pages/Services/Services";
import Therapists from "./pages/Therapists/Therapists";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import TherapistDetails from "./pages/TherapistDetails/TherapistDetails";
import SuccessStory from "./pages/SuccessStory/SuccessStory";
import Contact from "./pages/Contact/Contact";
import MakeAppointment from "./pages/MakeAppointment/MakeAppointment";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute exact path="/service/:serviceId">
              <ServiceDeails></ServiceDeails>
            </PrivateRoute>
            <PrivateRoute path="/therapists">
              <Therapists></Therapists>
            </PrivateRoute>
            <PrivateRoute path="/therapist/:therapistId">
              <TherapistDetails></TherapistDetails>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <MakeAppointment></MakeAppointment>
            </PrivateRoute>
            <Route path="/story">
              <SuccessStory></SuccessStory>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
