import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import image from './images/image.png';
import FooterPagePro from './components/footer'

import Marquee from 'react-double-marquee';

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data });
    }

    handleCountryChange = async(country) => {
        const data = await fetchData(country);

        this.setState({ data, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
          <div>
          <div className = { styles.container } >
          <div
          style={{
        width: '800px',
        alinContent:'center',
        height: '30px',
        whiteSpace: 'nowrap',
        color:'red',
        backgroundColor:'#C7BFBF',
        fontWeight: 'bold',
        fontSize:'18px',

      }}
      >
      <Marquee>
        STAY SAFE   ||  SANITIZE   || STAY SAFE   ||  SANITIZE  ||  STAY SAFE   ||  SANITIZE  ||  STAY SAFE   ||  SANITIZE  ||  STAY SAFE   ||  SANITIZE  ||
      </Marquee>
    </div>
          <h5 style={{color:'#152F8D'}}> Subscribe to our email newsletter today to receive  latest news on Covid-19 </h5>
          <MailchimpSubscribe url = { process.env.REACT_APP_MAILCHIMP_URL }/>
          <img className = { styles.image }src = { image } alt = "COVID-19"/>
          <hr className="my-4" />
          <div
          style={{
        width: '800px',
        alinContent:'center',
        height: '30px',
        whiteSpace: 'nowrap',
        color:'red',
        backgroundColor:'#C7BFBF',
        fontWeight: 'bold',
        fontSize:'18px',

      }}
      >
      <Marquee>
        STAY SAFE   ||  SANITIZE   || STAY SAFE   ||  SANITIZE  ||  STAY SAFE   ||  SANITIZE  ||  STAY SAFE   ||  SANITIZE  ||  STAY SAFE   ||  SANITIZE  ||
      </Marquee>
    </div>
          <Cards data = { data }/>
          <CountryPicker handleCountryChange = { this.handleCountryChange }/>
          <Chart data = { data } country = { country }/>
          <hr className="my-4" />
          <div
          style={{
        width: '800px',
        alinContent:'center',
        height: '30px',
        whiteSpace: 'nowrap',
        color:'red',
        backgroundColor:'#C7BFBF',
        fontWeight: 'bold',
        fontSize:'18px',

      }}
      >
      <Marquee>
        STAY SAFE   ||  SANITIZE   || STAY SAFE   ||  SANITIZE  ||  STAY SAFE   ||  SANITIZE  ||  STAY SAFE   ||  SANITIZE  ||  STAY SAFE   ||  SANITIZE  ||
      </Marquee>
    </div>
          </div>
           <hr className="my-4" />
          <div style={{alinContent:'center', backgroundColor:'#365CE7'}}>

<MDBFooter class="page-footer font-small blue">


  <div class="footer-copyright text-center py-3" style={{fontSize:'30px'}}> © 2020 Copyright:Wiciko Inc
  </div>


</MDBFooter>
          </div>
          </div>
        );
    }
}

export default App;
