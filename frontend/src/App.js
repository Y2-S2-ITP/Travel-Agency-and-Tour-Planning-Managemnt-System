import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./components/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import Profile from "./user/Profile";
import ManageUsers from "./admin/ManageUsers";
import Infomation from "./components/Infomation";
import Application from "./components/Application";
import Inquriy from "./components/Inquriy";
import Instruction from "./components/Instruction";
import AddDocument from "./components/AddDocument";
import AdminSidebar from "./components/adminSidebar";
import AdminUserManagement from "./components/AdminUserManagement";
import AdminTravelDoc from "./components/adminTravelDoc";
import AdminTravelDocAdd from "./components/adminTravelDocAdd";
import adminTravelDocAddEdit from "./components/adminTravelDocAddEdit";

import AdminTravelDocInquriy from './components/adminTravelDocInquries';

import adminTravelDocApplication from './components/adminTraveldocApplication';
import adminTravelDocApplicationCreate from './components/adminTravelDocApplicationCreate';
import adminTravelDocApplicationEdit from './components/adminTravelDocApplicationEdit';

//yasiru
import Tour from "./components/tour";
import packageDetails from './components/packageDetails';
import Payment from "./components/payment";
import EditPackage from "./components/adminEditPackage";
import DeletePackage from "./components/adminDeletePackage";
import EditPackageReservation from "./components/adminEditPackageReservation";
import DeletePackageReservation from "./components/adminDeletePackageReservation";
import AdminTour from "./components/admin";

//nethunipuna
import AddAccommodation from './components/AddAccommodation';
import Allaccommodations from './components/Allaccommodations';
import UpdateAccommodation from './components/UpdateAccommodation';
import AccommodationMainPage from './components/AccommodationMainPage';
import AccommodationBookPage from './components/AccommodationBookPage';
import adminSidebar from './components/adminSidebar';
import BookAccommodation from './components/BookAccommodation';
import AllAccommodation_reservations from './components/AllAccommodation_reservations';
import reservationManageCustomer from './components/reservationManageCustomer';
import UpdateReservationsAdmin from './components/UpdateReservationsAdmin';
import Header from './components/header';
import Admin from './components/admin';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Menu from "./components/Menu";

//Gayashan Part
import ResHeader from './components/Reservation_Of_Ground_Header';
import ResBody from './components/Reservation_Of_Ground_Body';
import CarReservationHeader from './components/Car_Reservation_Header';
import CarReservationBody from './components/Car_Reservation_Body';
import UpdateCarDetails from './components/Update_Car_Details';
import AddNewCarAndAirportTaxi from './components/Add_New_Car_And_Airport_Taxi';
import GuideReservationBody from './components/Guide_Reservation_Body';
import AddNewGuideBody from './components/Add_New_Guide_Body';
import GroundAdmin from './components/Ground_Admin';
import AdminCarReservationView from './components/Admin_Car_Reservation_View';
//import Header from './components/header';
//import Admin from './components/admin';
//import Navbar from './components/navbar';
//import Footer from './components/footer';
import ViewGuideProfile from './components/View_Guide_Profile';
import UpdateGuideDetails from './components/Update_Guide_Details';
import AdminGuideReservationView from './components/Admin_Guide_Reservation_View';
import AirportTaxiReservationHeader from './components/Airport_Taxi_Reservation_Header';
import AirportTaxiReservationBody from './components/Airport_Taxi_Reservation_Body';
import ViewCarProfile from './components/View_Car_Profile';
import AdminCarReservationUpdate from './components/Admin_Car_Reservation_Update';
import AdminGuideReservationUpdate from './components/Admin_Guide_Reservation_Update'
import HomeFeed from './components/homeFeed';
import GuideReportView from './components/GuideReportView';
import CarReportView from './components/CarReportView';

//sachini
import TicketHome from './components/Ticket_Home';
import TicketHomeHeader from './components/Ticket_Home_Header';
import TicketHeader from './components/Train_Ticket';

import TrainPage from './components/Train';
import BusPage from './components/Bus';
import BusTicketHeader from './components/Bus_Ticket';
import AirlineTicketHeader from './components/Airline_Ticket';
import AirlinePage from './components/Airline';
import EventTicketHeader from './components/Event_Ticket';
import EventPage from './components/Event';

import AUBusPage from './components/Update_Bus_Admin';
import AUTrainPage from './components/Update_Train_Admin';
import AUAirlinePage from './components/Update_Airline_admin';
import BupdateReservation from './components/BupdateReservation';
import TupdateReservation from './components/TupdateReservation';
import RUEventPage from './components/EupdateReservation';
import AUpdateReservation from './components/AupdateReservation';

import PaymentPage from "./components/Tpayment";

//himanka
import Insurance from "./components/Insurance";
import InsuranceDetails from './components/InsuranceDetails';
import ApplyInsurance from "./components/ApplyInsurance";


import navbar from './components/navbar';
import admin from './components/admin';

import header from './components/header';
import footer from './components/footer';

import AirplaneView from "./components/AirplaneView";


const App = () => {
    return (
        <BrowserRouter>
            
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <PrivateRoute path="/profile/:userId" exact component={Profile} />
                <AdminRoute path="/admin/users" exact component={ManageUsers} />
                <AdminRoute path="/user/AdminDashboard" exact component={AdminDashboard} />
                <AdminRoute path="/AdminUserManagement" exact component={AdminUserManagement} />

                {/*yasiru user*/}
                <Route path="/tour" exact component={Tour} />
                <Route path="/package/:id" exact component={packageDetails}></Route>
                <Route path="/payment/:id/:pkg/:adult/:child/:total/:date" exact component={Payment}></Route>

                {/*yasiru admin*/}
                <Route path="/adminTourHome" exact component={AdminTour} />
                <Route path="/admin/editPackage/:id" exact component={EditPackage}></Route>
                <Route path="/admin/deletePackage/:id" exact component={DeletePackage}></Route>
                <Route path="/admin/EditPackageReservation/:id" exact component={EditPackageReservation}></Route>
                <Route path="/admin/DeletePackageReservation/:id" exact component={DeletePackageReservation}></Route>

                {/*oshen user*/}
                <Route path="/Information" exact component={Infomation} />
                <Route path="/Application" exact component={Application} />
                <Route path="/Inquriy" exact component={Inquriy} />
                <Route path="/Instruction" exact component={Instruction} />
                <Route path="/AddDocument" exact component={AddDocument} />

                {/*oshen admin*/}
                <AdminRoute path="/AdminSidebar" exact component={AdminSidebar} />
                <AdminRoute path="/adminTravelDoc" exact component={AdminTravelDoc} />
                <AdminRoute path="/AdminTravelDocAdd" exact component={AdminTravelDocAdd} />
                <AdminRoute path="/adminTravelDocAddEdit/:id" exact component={adminTravelDocAddEdit} />
                <AdminRoute path="/AdminTravelDocApplication" exact component={adminTravelDocApplication} />
                <AdminRoute path="/adminTravelDocApplicationCreate" exact component={adminTravelDocApplicationCreate} />
                <AdminRoute path="/adminTravelDocApplicationEdit/:id" exact component={adminTravelDocApplicationEdit} />
                <AdminRoute path="/adminTravelDocAddEdit/:id" exact component={adminTravelDocAddEdit} />
                <AdminRoute path="/adminTravelDocInquriy" exact component={AdminTravelDocInquriy} />



                {/* nethu nipuna */}
                

    <Route  path="/accommodation/main" exact component={Menu}></Route>
    <Route  path="/accommodation/main/booknow/:id"exact component={Menu}></Route>
    <Route  path="/accommodation/booknow/:id/:price" exact component={Menu}></Route>
    <Route  path="/accommodation/main/manage_reservation" exact component={Menu}></Route>


      <Route  path="/accommodation/main" exact component={Navbar}></Route>
      <Route  path="/accommodation/main/booknow/:id" exact component={Navbar}></Route>
      <Route  path="/accommodation/booknow/:id/:price" exact component={Navbar}></Route>
      <Route  path="/accommodation/main/manage_reservation"exact component={Navbar}></Route> 


      <Route path="/admin_panel/home" exact component={adminSidebar}/>

      <Route path="/admin_panel/accommodation_admin/addnew" exact component={AddAccommodation}/>
      <Route path="/admin_panel/accommodation_admin" exact component={Allaccommodations}/>
      <Route path="/admin_panel/accommodation_admin/accommodation_servations" exact component={AllAccommodation_reservations}/>
      <Route path="/update/:id" exact component={UpdateAccommodation} />
      <Route path="/admin_panel/reservation/update/:id" exact component={UpdateReservationsAdmin} />

      <Route path="/accommodation/booknow/:id/:price" exact component={BookAccommodation}/>
      <Route path="/accommodation/booknow/payment" exact component={Payment}></Route>
      <Route path="/accommodation/main" exact component={AccommodationMainPage} />
      <Route path="/accommodation/main/booknow/:id" exact component={AccommodationBookPage} />
      <Route path="/accommodation/main/manage_reservation" exact component={reservationManageCustomer} />

            {/*Gayashan Part*/}
            
              <Route exact path="/ground" component={Menu}></Route>
              <Route exact path="/ground/car" component={Menu}></Route>
              <Route exact path="/ground/guide" component={Menu}></Route>
              <Route exact path="/ground/airporttaxi" component={Menu}></Route>
              <Route exact path="/ground/guide/guideprofile/:id" component={Menu}></Route>

            
              <Route exact path="/ground" component={Navbar}></Route>
              <Route exact path="/ground/car" component={Navbar}></Route>
              <Route exact path="/ground/guide" component={Navbar}></Route>
              <Route exact path="/ground/airporttaxi" component={Navbar}></Route>
              <Route exact path="/ground/guide/guideprofile/:id" component={Navbar}></Route>
              <Route exact path="/groundadmin" component={GroundAdmin}></Route>
              
              <Route exact path="/ground" component={ResHeader}></Route>
              <Route exact path="/ground" component={ResBody}></Route>
              <Route exact path="/ground/car" component={CarReservationHeader}></Route>
              <Route exact path="/ground/car" component={CarReservationBody}></Route>
              <Route exact path="/admin/ground/car/update/:id" component={UpdateCarDetails}></Route>
              <Route exact path="/admin/ground/car" component={AddNewCarAndAirportTaxi}></Route>
              <Route exact path="/admin/ground/guide" component={AddNewGuideBody}></Route>
              <Route exact path="/admin/ground/guide/update/:id" component={UpdateGuideDetails}></Route>
              <Route exact path="/admin/ground/carreservation" component={AdminCarReservationView}></Route>
              <Route exact path="/admin/ground/guidereservation" component={AdminGuideReservationView}></Route>
              <Route exact path="/ground/guide" component={GuideReservationBody}></Route> 
              <Route exact path="/ground/guide/guideprofile/:id" component={ViewGuideProfile}></Route>
              <Route exact path="/ground/airporttaxi" component={AirportTaxiReservationHeader}></Route>
              <Route exact path="/ground/airporttaxi" component={AirportTaxiReservationBody}></Route>
              <Route exact path="/ground/car/carprofile/:id" component={ViewCarProfile}></Route> 
              <Route exact path="/admin/ground/carreservation/update/:id" component={AdminCarReservationUpdate}></Route>
              <Route exact path="/admin/ground/guidereservation/update/:id" component={AdminGuideReservationUpdate}></Route>

              <Route exact path="/admin/ground/guidereservation" component={GuideReportView}></Route>
              <Route exact path="/admin/ground/carreservation" component={CarReportView}></Route>
              

            
              <Route exact path="/ground" component={Footer}></Route>
              <Route exact path="/ground/car" component={Footer}></Route>
              <Route exact path="/ground/guide/guideprofile/:id" component={Footer}></Route>
              <Route exact path="/ground/airporttaxi" component={Footer}></Route>
             {/* <Route exact path="/ground/guide/" component={Footer}></Route>*/}



             {/*Sachini*/}
             <Route exact path="/ticketPayment" component={Menu} />
            <Route exact path="/ticketPayment" component={PaymentPage} />

            <Route exact path="/ticketManagement" component={Menu} />
           <Route exact path="/ticketManagement" component={navbar} />
           <Route exact path="/ticketManagement" component={TicketHomeHeader} />
           <Route exact path="/ticketManagement" component={TicketHome} />

          <Route exact path="/train" component={Menu} />
          <Route exact path="/train" component={navbar} />
          <Route exact path="/train" component={TicketHeader} />
        
         <Route exact path="/train" component={TrainPage} />

         <Route exact path="/bus" component={Menu} />
         <Route exact path="/bus" component={navbar} />
         <Route exact path="/bus" component={BusTicketHeader} />
         <Route exact path="/bus" component={BusPage} />

        <Route exact path="/airline" component={Menu} />
        <Route exact path="/airline" component={navbar} />
        <Route exact path="/airline" component={AirlineTicketHeader} />
        <Route exact path="/airline" component={AirlinePage} />

        <Route exact path="/event" component={Menu} />
        <Route exact path="/event" component={navbar} />
        <Route exact path="/event" component={EventTicketHeader} />
        <Route exact path="/event" component={EventPage} />

        <Route exact path="/abus" component={adminSidebar} />
        <Route exact path="/atrain" component={adminSidebar} />
        <Route exact path="/aairline" component={adminSidebar} />
        <Route exact path="/tickets" component={adminSidebar} />
        <Route exact path="/rbus" component={adminSidebar} />
        <Route exact path="/rtrain" component={adminSidebar} />
        <Route exact path="/rairline" component={adminSidebar} />
        <Route exact path="/revent" component={adminSidebar} />

        
        <Route exact path="/rairline" component={AirplaneView} />

        <Route exact path="/aubus/:id" component={AUBusPage} />
        <Route exact path="/autrain/:id" component={AUTrainPage} />
        <Route exact path="/auairline/:id" component={AUAirlinePage} />
        
        
        
        
        <Route exact path="/ticketManagement" component={footer} />
        <Route exact path="/train" component={footer} />
        <Route exact path="/bus" component={footer} />
        <Route exact path="/airline" component={footer} />
        <Route exact path="/event" component={footer} />
        <Route exact path="/ticketpayment" component={footer} />
       
       
        <Route exact path="/rubus/:id" component={BupdateReservation} />
        <Route exact path="/rutrain/:id" component={TupdateReservation} />
        <Route exact path="/ruairline/:id" component={AUpdateReservation}/>
        <Route exact path="/ruevent/:id" component={RUEventPage}/>

        {/*himanka */}
        <Route path="/Insurance" exact component={Insurance} />
        <Route path="/Insurance/:id" exact component={InsuranceDetails}></Route>
        <Route path="/ApplyInsurance/:id/:insuranceID/:price" exact component={ApplyInsurance}></Route>



        </BrowserRouter>
    );
};

export default App;
