import React from 'react';
import api from '../api.js';
import 'babel-polyfill';

class Interest extends React.Component {
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
      <div className='halfWidth mintColor leftContainer commonText'>
        <div className='commonText'>
          <h1>Interests</h1>
          <div className='tablecolumn'>
            {/**From the component state is brought the Interests Array
             * Mapped and showed in the following tags
             * @ this.state.data.interest is the Array
             * @ item is the single interest in the Array
             */}
            {this.state.data.interest.map((item, id) => {
              return (
                /**each item @interest Info */
                <p id={id} className='listeditemsInterest'>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Interest;
