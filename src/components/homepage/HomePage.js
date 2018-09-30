import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {FormattedMessage} from 'react-intl';
import Header from './header/Header';
import Navbar from '../common/navbar/Navbar';
import Service from './service/Service';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Feature from './feature/Feature';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Feature />
        <Service />
        <Contact />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
