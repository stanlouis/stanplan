import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from "react-redux";

const Navbar = ({auth}) => {
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks/>
  return (
    <nav className="nav-wrapper navbg">
      <div className="container">
        <Link to="/" className="brand-logo">
          StanPlan
        </Link>
        { links }
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Navbar);
