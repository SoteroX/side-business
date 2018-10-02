import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {IntlProvider} from 'react-intl';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import messages from '../messages';
// Custom Components
import AboutPage from './AboutPage';
import HomePage from './homepage/HomePage';
import Navbar from './common/navbar/Navbar';
// import Navigation from './Navigation';


class App extends Component {
  render() {
    const {lang} = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <BrowserRouter>
          <div>
            {/* <Navigation/> */}
            <Navbar />
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/about' component={AboutPage}/>
          </div>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  lang: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang,
  };
}

export default connect(mapStateToProps)(App);
