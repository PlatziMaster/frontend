import React from 'react';

class About extends React.Component {
  /** Component <<About>> shows the principal contact information of the person */
  render() {
    return (

      <div className='About'>
        {/**Prop brought from the Profile Component. It Shows the Phone Info of the person */}
        <p>{this.props.phone}</p>
        {/**Prop brought from the Profile Component. It Shows the email Info of the person */}
        <p>{this.props.email}</p>
        {/**Prop brought from the Profile Component. It Shows the website Info of the person
         * Link added to redirect to the actual website reference
        */}

        <a href={this.props.website}><p>{this.props.website}</p></a>
        <br />
        {/**Prop brought from the Profile Component. It Shows the Address Info of the person */}
        <p className='address'>{this.props.address}</p>
      </div>
    );
  }
}
export default About;
