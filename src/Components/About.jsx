import React from 'react'
import styled from 'styled-components'


const About = () => {
    return (
        <Container>
            <div className="container__avatar">
                <div className="circle-avatar">
                    <img src="public\assets\images\perfil-photo.png" alt="avatar" />
                </div>
            </div>
            <section className="header__container">
                <div className="header__title">
                    <h1>Hi, I'm <span>Camilo Saavedra</span></h1>
                    <h2>UI Frontend Developer</h2>
                </div>
                <div className="header__info-contact">
                    <p>ci.saavedras@gmail.com</p>
                    <p>Santiago, Chile</p>
                </div>
            </section>
            <section className="header__container-cta">
                <div className="cta">
                    <a href="https://github.com/csaavedras/"><i class="fab fa-github"></i></a>
                </div>
                <div className="cta">
                    <a href="https://twitter.com/cisaavedras/"><i class="fab fa-twitter"></i></a>
                </div>
                <div className="cta">
                    <a href="https://www.linkedin.com/in/camilo-ignacio-saavedra-salas/"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </section>
        </Container>
    )
}

export default About


const Container = styled.div`

    display: flex;
    align-items: center;
    padding: 3% 8%;
    .container__avatar {
        margin-right: 5%;
    }
    img {
        width: 160px;
        height: 160px;
        object-fit: contain;
        clip-path: circle(70px at center);
    }
    
   .circle-avatar {
       background-color: white;
       width: 150px;
       height: 150px;
       border-radius: 50%;
       display: flex;
       justify-content: center;
       align-items: baseline;   
   }
   .header__title h2 {
       margin-top: -15px;
   }

   /* Title */
    .header__container {
      flex-grow: 2;
      min-with: 500px;    
    }
    .header__title h1 {
        color: #FFD60A;
        font-size: 2.5rem;
    }
    .header__title span {
        color: white;
        font-size: 2.5rem;
    }
    .header__title,p,h2 {
        color: #D1C0C0;
        font-weight: 400;
    }
    .header__info-contact {
        display: flex;
        justify-content: space-between;
        width: 50%;
        font-size: 1rem;
        flex-wrap: wrap;

    }

    /* CTA */
    .header__container-cta {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        width: 10%;
        min-width: 200px;
        margin-right: 5%;

        .cta {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
        } 
        .cta a {
            text-decoration: none;
            color: #001d3d;
            font-size: 1.5rem;
        }
    
    }
  
`
