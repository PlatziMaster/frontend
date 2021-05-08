import React from 'react';
import api from '../api.js';
import 'babel-polyfill';

class Experience extends React.Component {
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
      <div className=' fullWidth mintColor '>
        <div className=' commonText '>
          <h1>Experience</h1>
          <div className='tablecolumn'>
            {/**From the component state is brought the Certification achievements Array
             * Mapped and showed in the following tags
             * @ this.state.data.certificate is the Array
             * @ item is the single achievement in the Array
             */}
            {this.state.data.certificate.map((item, id) => {
              return (
                <div className='tableExp'>
                  {/**Name of the achievement */}
                  <h3 className='listeditems' id={id}>
                    {item.name}
                  </h3>
                  {/**Place or institution */}
                  <p className='listeditems' id={id}>
                    {item.institution}
                  </p>
                  {/**Date of the achievement */}
                  <p className='listeditems' id={id}>
                    {item.date}
                  </p>
                  {/**Description of the achievement */}
                  <p className='listeditems' id={id}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Experience;
