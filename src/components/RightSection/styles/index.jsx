// Dependencies
import styled from 'styled-components';

export const RightSectionStyled = styled.div`
  /* Control the right side */
  right: 0;
  background-color: #ffffff;

  /* These are the styles for the projects section */
  .bottoned {
    width: 100%;
    left: 50%;
    text-align: center;
  }

  .rightboxes {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .leftsectiontable {
    width: 30vw;
    text-align: right;
  }

  .rightsectiontable {
    width: 30vw;
    text-align: left;
    font-size: 18px;
  }

  .rightsectiontable p {
    font-weight: 300;
  }

  .rightsectiontable a p {
    font-weight: 500;
    color: #f9ca24;
    width: fit-content;
    padding-bottom: 2px;
    border-bottom: 1px solid #353b48;
  }

  .bottomline {
    padding-bottom: 5px;
    border-bottom: 5px solid #f9ca24
  }

  .ulclass {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-weight: 300;
  }

  .liclass {
    margin: 8px 0;
    line-height: 1.2em;
  }

  .rightboxes a {
    text-decoration: none;
    color: #353b48;
  }

  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 20vw;
    margin: 0px 15px;
    /* border-radius: 10px 10px 0px 0px; */
  }

  .card img {
    width: 20vw;
    /* border-radius: 10px 10px 0px 0px; */
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    outline: 4px solid #f9ca24;
    background-color: #353b48;
    color: #ffffff!important;
  }

  /* Add some padding inside the card container */
  .cardcontainer {
    padding: 2px 16px;
  }

  .cardcontainer h4 {
    font-weight: 900;
    margin-bottom: auto;
  }

  .cardcontainer p {
    font-weight: 300;
  }

   /* This is the footer section */
   .footer {
    margin: 0;
    padding: 12px 0;
    text-align: center;
    background-color: #353b48;
    font-weight: 300;
  }

  .footer-text {
    margin: 8px 0;
    color: #ffffff;
  }

  @media screen and (min-width: 1024px) {
    height: 100%;
    width: 70%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    /* padding-top: 20px; */

    .card {
      /* Add shadows to create the "card" effect */
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      width: 18vw;
      margin: 0px 8px;
      /* border-radius: 10px 10px 0px 0px; */
    }

    .card img {
      width: 18vw;
      /* border-radius: 10px 10px 0px 0px; */
    }

    /* Add some padding inside the card container */
    .cardcontainer {
      padding: 2px 8px;
    }

    .cardcontainer h4 {
      font-weight: 900;
      margin-bottom: auto;
      font-size: 16px
    }

    .cardcontainer p {
      font-weight: 300;
      font-size: 14px
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    height: 100%;
    width: 70%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    /* padding-top: 20px; */

    .bottomline {
      font-size: 24px;
      padding-bottom: 5px;
      border-bottom: 5px solid #f9ca24
    }

    .leftsectiontable {
      width: 30vw;
      text-align: right;
      font-size: 16px
    }

    .rightsectiontable {
      width: 30vw;
      text-align: left;
      font-size: 16px;
    }

    .rightsectiontable p {
      font-weight: 300;
    }

    .rightsectiontable a p {
      font-weight: 500;
      color: #f9ca24;
      width: fit-content;
      padding-bottom: 2px;
      border-bottom: 1px solid #353b48;
    }

    .card {
      /* Add shadows to create the "card" effect */
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      width: 18vw;
      margin: 0px 8px;
      /* border-radius: 10px 10px 0px 0px; */
    }

    .card img {
      width: 18vw;
      /* border-radius: 10px 10px 0px 0px; */
    }

    /* Add some padding inside the card container */
    .cardcontainer {
      padding: 2px 8px;
    }

    .cardcontainer h4 {
      font-weight: 900;
      margin-bottom: auto;
      font-size: 12px
    }

    .cardcontainer p {
      font-weight: 300;
      font-size: 12px
    }
  }

  @media screen and (max-width: 425px) {
    /* position: absolute;
    top: 60%; */
    display: inline;

    .bottomline {
      text-align: center;
      font-size: 24px;
      padding-bottom: 5px;
      border-bottom: 5px solid #f9ca24
    }

    .leftsectiontable {
      width: 45vw;
      text-align: right;
      font-size: 14px
    }

    .rightsectiontable {
      width: 45vw;
      text-align: left;
      font-size: 14px;
    }

    .rightsectiontable p {
      font-weight: 300;
    }

    .rightsectiontable a p {
      font-weight: 500;
      color: #f9ca24;
      width: fit-content;
      padding-bottom: 0;
      border: none;
    }

    .card {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      width: 80vw;
      margin: 16px;
    }

    .card img {
      width: 80vw;
    }

    .cardcontainer {
      padding: 2px 8px;
    }

    .cardcontainer h4 {
      font-weight: 900;
      margin-bottom: auto;
      font-size: 16px
    }

    .cardcontainer p {
      font-weight: 300;
      font-size: 16px
    }

    /* This is the footer section */
    .footer {
      margin: 0;
      padding: 12px 0;
      /* position: fixed;
      left: 0;
      bottom: 0; */
      /* width: 100vw; */
      /* text-align: center; */
      background-color: #353b48;
      font-weight: 300;
      font-size: 12px;
    }

    .footer-text {
      margin: 8px 0;
      color: #ffffff;
    }
  }
`;
