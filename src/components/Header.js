import React from 'react';
import api from '../api.js';
import 'babel-polyfill';
import About from './About';
import Social from './Social';

class Header extends React.Component {
  /** Component <<Academic>> shows the education information of the person */
  /**State related to the component Academic. Managing the Api request data and the info for the user interface */
  state = {
    /**Loading when the info request is being processed */
    loading: true,
    /**error when the request fails */
    error: null,
    /**data brought from the api request */
    data: undefined,
  };

  /**componentDidMount: Default function to manage the data request */
  async componentDidMount() {
    /**Inner Component  data manager Function */
    this.fetchData();
  }

  fetchData = async () => {
    /**Init the loading and error managers in the state of the component data */
    this.setState({ loading: true, error: null });
    /**Call to the api listing data */
    try {
      const data = await api.items.list();
      /**In case of succes the data is managed to the component state data */
      this.setState({ loading: false, data });
    } catch (error) {
      /**In case of failure the error message is managed to the component state data */
      this.setState({ loading: false, error });
    }
  };

  /**HTML info sent to the navigator */
  render() {
    /**Loading manager information sent to the navigator */
    if (this.state.loading === true) {
      return ('Loading...');
    }
    /**Error manager information sent to the navigator */
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    /**Main info manager information sent to the navigator */
    return (
      /**From the component state is brought the Personal information
             * Mapped and showed in the following tags
             * @this.state.data is the main container
             * each prop is brought from it's single container
             */
      <div className='fullWidth headerColor HeaderClass'>
        {/**Profile picture URL @avatar*/}
        <img src={this.state.data.avatar} />
        <div className='infoHeader'>
          {/**Name of person @name*/}
          <h1>{this.state.data.name}</h1>
          {/**Main profession of person @profession */}
          <p>{this.state.data.profession}</p>
          {/**Contact and personal social media info of the person sent to the props
           *  @phone the phone number
           * @email the mail
           * @website link to the web
           * @address the address --State/country-- */}

          {/**Imported Section from @About Component*/}
          <About className='About' phone={this.state.data.phone} email={this.state.data.email} website={this.state.data.website} address={this.state.data.address} />
          {/**Imported Section form @Social Component
         * The Social media links reference
         */}
          <Social />
        </div>
      </div>
    );
  }
}
export default Header;
