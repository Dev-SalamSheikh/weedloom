import React from "react";
import Navbar from "../../components/navbar/Navbar";
import TopNav from "../../components/top nav/TopNav";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Footer/copyright/Copyright";
import LoginForm from "../../components/login logout form/LoginForm";

const Login = () => {
  return (
    <div className="login bg-sectionBg-900 h-screen overflow-x-hidden">
      <TopNav />
      <Navbar />
      <LoginForm />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Login;
