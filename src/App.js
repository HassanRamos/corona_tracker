import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import image from './images/image.png';


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

          <div className = { styles.container } >
          <h5 style={{color:'#152F8D'}}> Subscribe to our email newsletter today to receive  latest news on Covid-19 </h5>
          <MailchimpSubscribe url = { process.env.REACT_APP_MAILCHIMP_URL }/>
          <img className = { styles.image }src = { image } alt = "COVID-19"/>
            <Cards data = { data }/>
             <CountryPicker handleCountryChange = { this.handleCountryChange }/>
             <Chart data = { data } country = { country }/>
             </div>



        );
    }
}

export default App;
