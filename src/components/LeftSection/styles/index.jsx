// Dependencies
import styled from 'styled-components';

export const LeftSectionStyled = styled.div`
  /* Control the left side */
  left: 0;
  background: rgba(241,231,103,1);
  background: -moz-linear-gradient(-45deg, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(241,231,103,1)), color-stop(100%, rgba(254,182,69,1)));
  background: -webkit-linear-gradient(-45deg, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
  background: -o-linear-gradient(-45deg, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
  background: -ms-linear-gradient(-45deg, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
  background: linear-gradient(135deg, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1e767', endColorstr='#feb645', GradientType=1 );

  .logo {
    position: absolute;
    top: 20px;
    text-align: center;
    width: 100%;
    display: block;
  }

  .logoimage {
    height: 35px;
    margin: 0px 10px;
  }

  /* If you want the content centered horizontally and vertically */
  .centered {
    margin: 0;
    width: 100%;
    text-align: center;
  }

  .leftboxes {
    display: flex;
    flex-direction: column;
  }

  .leftbox {
    padding: 5%;
  }

  /* Style the image inside the centered container, if needed */
  .centered .profilepicture {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 8px solid #353b48;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }

  .centered .profilename {
    font-size: 32px;
    font-weight: 900;
  }

  .centered .career {
    font-weight: 500;
    padding-bottom: 5px;
    font-size: 16px;
    margin: 0px;
  }

  .centered .position {
    font-weight: 300;
    padding-bottom: 5px;
    font-size: 16px;
    margin: 0px;
  }

  .icons {
    padding: 24px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap
  }

  .iconimages {
    width: 35px;
    margin: 0px 10px;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }

  @media screen and (min-width: 1024px) {
    height: 100vh;
    width: 30vw;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .logoimage {
      height: 40px;
      margin: 0px 10px;
    }
    /* Style the image inside the centered container, if needed */
    .centered .profilepicture {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      border: 6px solid #353b48;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
    }

    .centered .profilename {
      font-size: 32px;
      font-weight: 900;
    }

    .centered .career {
      font-weight: 500;
      padding-bottom: 5px;
      font-size: 18px;
      margin: 0px;
    }

    .centered .position {
      font-weight: 300;
      padding-bottom: 5px;
      font-size: 18px;
      margin: 0px;
    }

    .icons {
      padding: 24px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap
    }

    .iconimages {
      width: 35px;
      margin: 0px 10px;
      border-radius: 50%;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    height: 100vh;
    width: 30vw;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .logoimage {
      height: 25px;
      margin: 0px 10px;
    }
    /* Style the image inside the centered container, if needed */
    .centered .profilepicture {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 6px solid #353b48;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
    }

    .centered .profilename {
      font-size: 18px;
      font-weight: 900;
    }

    .centered .career {
      font-weight: 500;
      padding-bottom: 5px;
      font-size: 14px;
      margin: 0px;
    }

    .centered .position {
      font-weight: 300;
      padding-bottom: 5px;
      font-size: 12px;
      margin: 0px;
    }

    .icons {
      padding: 8px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap
    }

    .iconimages {
      width: 24px;
      margin: 0px 10px;
      border-radius: 50%;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
    }
  }

  @media screen and (max-width: 425px) {
    display: grid;

    .logo {
      position: unset;
      margin-top: 20px;
      text-align: center;
      width: 100%;
      display: block;
    }

    /* .logoimage {
      height: 35px;
      margin: 0px 10px;
    } */

    .logoimage {
      height: 25px;
      margin: 0px 10px;
    }

    .centered .profilepicture {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 6px solid #353b48;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
    }

    .centered .profilename {
      font-size: 18px;
      font-weight: 900;
    }

    .centered .career {
      font-weight: 500;
      padding-bottom: 5px;
      font-size: 14px;
      margin: 0px;
    }

    .centered .position {
      font-weight: 300;
      padding-bottom: 5px;
      font-size: 12px;
      margin: 0px;
    }

    .icons {
      width: 70%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin: auto;
    }

    .iconimages {
      width: 24px;
      margin: 0px 10px;
      border-radius: 50%;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
    }
  }
`;
