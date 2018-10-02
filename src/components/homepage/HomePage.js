import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {FormattedMessage} from 'react-intl';
import Header from './header/Header';
import Team from './team/Team';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Feature from './feature/Feature';
import Subcribe from './subscribe/Subscribe';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Feature />
        <Team />
        <Contact />
        <Subcribe />
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
