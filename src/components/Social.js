import React from 'react';
import api from '../api.js';
import 'babel-polyfill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

class Social extends React.Component {
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
      return 'Loading...';
    }
    /**Error manager information sent to the navigator */
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    /**Main info manager information sent to the navigator */
    return (
      <div className='socialContainer'>
        {/**From the component state is brought the Social Media Contact Array
             * Mapped and showed in the following tags
             * @ this.state.data.social is the Array
             * @ maped as:
             * "social": [
      {
        "name": "facebook", ***[0]***
        "url": "https://www.facebook.com
      },
      {
        "name": "twitter", ***[1]***
        "url": "https://twitter.com
      },
      {
        "name": "github", ***[2]***
        "url": "https://github.com
      },
      {
        "name": "linkedin", ***[3]***
        "url": "https://www.linkedin.com/
      }
    ]
             */}
        <div className='social '>
          {/**Facebook info container
           * @social [0]
           * @icon Form Fontawesome @faFacebook
           * @name is the social media name
           * @url is the actual link info
           */}
          <a href={`  ${this.state.data.social[0].url}`}>
            <FontAwesomeIcon icon={faFacebook} />
            {this.state.data.social[0].name}
            {' '}
          </a>
          {/**Twitter info container
           * @social [1]
           * @icon Form Fontawesome @faTwitter
           * @name is the social media name
           * @url is the actual link info
           */}
          <a href={`  ${this.state.data.social[1].url}`}>
            <FontAwesomeIcon icon={faTwitter} />
            {this.state.data.social[1].name}
          </a>
          {/**Github info container
           * @social [2]
           * @icon Form Fontawesome @faGithub
            * @name is the social media name
           * @url is the actual link info
           */}
          <a href={`  ${this.state.data.social[2].url}`}>
            <FontAwesomeIcon icon={faGithub} />
            {this.state.data.social[2].name}
          </a>
          {/**LinkedIn info container
           * @social [3]
           * @icon Form Fontawesome @faLinkedin
           * @name is the social media name
           * @url is the actual link info
           */}
          <a href={`  ${this.state.data.social[3].url}`}>
            <FontAwesomeIcon icon={faLinkedin} />
            {this.state.data.social[3].name}
          </a>
        </div>
      </div>
    );
  }
}
export default Social;
