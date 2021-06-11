import React from 'react';

import './styles/styles.css';
import ProfileModel from './profile';


class Model extends React.Component{
  render(){
      return(
      <div className ="model">
        <header className="model_header">
          <h1 className="model_section-name" >Josué Israel Rivas Díaz
          </h1>
          <img className="model_avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQH94LwxokuBeQ/profile-displayphoto-shrink_800_800/0/1561072198656?e=1628726400&v=beta&t=BVl37qw_lx3mF02oo4O-3WaHT84iHXHcgeWs2Lfz3U8" alt="Foto de perfil" />
         
          <p className="model_header job">Game developer & Game Desing</p>

          <li className="model_header dataList">
            <ul>Numbre phone: 5537572085</ul>
            <ul>Email: rivadia@gmail.com</ul>
            <ul>Web page</ul>
          </li>

          <p className="model_header direction">Priv paseo Madreperla Maz 53 Lt8  viv 149</p>
        </header>

        <body>
          
          <div className= "profile_model_container">
          <ProfileModel    headerprofile="profile_model_header"  parrafoprofile="profile_model_parrafo" 
                 encabezado="Profile" parrafo="Soy artista visual, diseñador y desarrollador de juegos, actualmente me dedico a forma jóvenes universitarios para ser futuros desarrolladores dentro de la industria del videojuego y la realidad aumentada. Apasionado de la tecnología y buscando abrirse camino en este mundo de formación acelerada" />
          </div>

          <div className = "experience_model_container">
          <ProfileModel    headerprofile="experience_model_header"  
                 encabezado="Experience"
                 listaprofile="experience_lista_profile" 
                 encabezado1="Docente (febrero 2017 a la fecha)"
                 encabezado2="Docente (enero 2015 a febrero 2017)"
                 encabezado3="Desarrollador de videojuegos (abril 2012 a la 2015)"
                 subencabezado1="UNITEC campus Atizapán (Educación Superior)"
                 subencabezado2="Colegio Francés Hidalgo (Educación Media y Media superior)"
                 text1="Mediante formación práctica y centrada en lo que la industria requiere, enseño a jóvenes de la carrera Diseño, animación y arte digital programación, centrado en desarrollo de videojuegos y realidad aumentada. Además, apoyamos a la estructuración del programa de formación en videojuegos en el campus."
                 text2="Formar a jóvenes de secundaria y preparatoria en artes tradicionales, diseño, comunicación y robótica, para obtener una formación integral en ciencias y humanidades."
                 text3="Desarrollo de videojuegos para pc y móviles de forma independiente, centrado en la generación de una buena experiencia de usuario y entretenimiento"

                 listaText="experience_list_TextList"
                 
                 
                 
                 />

          </div>
          
          <div className="academic_container">


          <ProfileModel encabezado="Academic" 
            parrafo="Licencias en Artes Visuales (UNAM)"
            parrafoprofile="academic_parrafo"
          
          />


          </div>
          <div className="interest_container">


          <ProfileModel encabezado="Interest" 
          
             parrafo="Jugar y desarrollar videojuegos, las artes marciales chinas,
             series de terror, peliculas de zombies, leer sobre programación, las
             novelas de Terry prachet, enseñar sobre desarrollo de tecnología, 
             los comics de cualquier genero, jugar con mis hijos."
             parrafoprofile="interest_parrafo"
          
          
          />


          </div>

          <div className="skills_container">


          <ProfileModel encabezado="Skills"
          listaprofile="skills_list_container"
          encabezado1="Lenguajes de programación"
          encabezado2="Software"
          encabezado3="Hardware"
          text1="C#, C++,  HTML5, CSS3,JavaScript y C."
          text2="Unity 3D, Maya, Blender, Photoshop, Affinity Design, Visual Studio.
          Control de versions con git y github
          "
          text3="Lego Mindstorm y Arduino, Reparación, armado y mantenimiento    
          de equipo de cómputo
          "
          />


          </div>
          <div className="language_container">


          <ProfileModel encabezado="Language"
            parrafo="Inglés"

            parrafoprofile="language_parrafo"
          
          />


          </div>


        </body>
      </div>)


  }
  
}

export default Model;