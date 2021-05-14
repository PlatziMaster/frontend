const express = require('express');
const app = express();
const port = 3000;

const data = {
    data: {
      name: 'Nicolas Jiménez',
      profession: 'FrontEnd Developer',
      address: 'Bogotá, Colombia.',
      email: 'nicolasj680@gmail.com',
      website: 'https://cutt.ly/GbLxhfn',
      phone: '+57 3176235068',
      avatar: 'https://cutt.ly/1bLxq0s',
      profile:
        'Web development enthusiast, mainly interested in client-side development, I like to offer good browsing experiences, eager to learn every technology about both front-end and backend web development.',
      certificate: [
        {
          date: 'Abril 2021',
          description:
            'Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, SASS, Multiple Routers',
          institution: 'Udemy',
          name: 'React: De cero a experto ',
        },
        {
          date: 'October 2020',
          description:
            'Crea una SPA (Single Page Aplication) con JavaScript Vanilla. Diseña una experiencia de navegación fluida para tus usuarios a través del manejo de rutas y el llamado a una API para mostrar la información y navegar entre los detalles de cada personaje.',
          institution: 'Platzi',
          name: 'Single Page Application con JavaScript Vanilla',
        },
      ],
      academic: [
        {
          degree: 'Technology in software development.',
          description: 'Remote',
          endDate: 'Present',
          institution: 'Institución Universitaria Digital de Antioquia.',
          startDate: 'July 2019',
        },
        {
          degree: 'Software programming technician.',
          description: 'Presential',
          endDate: 'Decenber 2021',
          institution: 'Servicio Nacional de Aprendizaje (Sena)',
          startDate: 'July 2019',
        },
      ],
      experience: [
        {
          projectName: 'Developer Road',
          complete: true,
          url: 'http://developerroad.herokuapp.com/',
          projectDescription:
            'The platform where Developers share knowledge about technology and programming, I helped to Built a responsive web app using Django and Bootstrap that allows users to write tech post.',
          stak: 'Django Bootstrap Css',
        },
        {
          projectName: 'Classic-Instagram-Clone',
          complete: false,
          url: 'https://github.com/Dvs-Projects/Classic-Instagram-Clone',
          projectDescription: 'Classic clone of Instagram.',
          stak: 'Typescript Reactjs Sass',
        },
        {
          projectName: 'Box Shadow Generator',
          complete: true,
          url: 'https://github.com/Nicolas-alt/shadow-generator',
          projectDescription: 'Simple box shadow generator.',
          stak: 'Typescript Reactjs Tailwind',
        },
      ],
      skills: [
        {
          name: 'HTML5',
          percentage: '80%',
        },
        {
          name: 'CSS',
          percentage: '75%',
        },
        {
          name: 'JavaScript',
          percentage: '80%',
        },
        {
          name: 'Typescript',
          percentage: '80%',
        },
        {
          name: 'Tailwind Css',
          percentage: '80%',
        },
        {
          name: 'React',
          percentage: '80%',
        },
      ],
      interest: ['JavaScript', 'Typescript', 'Mobile development', 'Front-end'],
      languages: [
        {
          name: 'Spanish',
          percentage: '90%',
        },
        {
          name: 'English',
          percentage: '50%',
        },
      ],
      social: [
        {
          name: 'Twitter',
          url: 'https://twitter.com/Nicolas35103573',
        },
        {
          name: 'Github',
          url: 'https://github.com/Nicolas-alt',
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/nicolas-jimenez-b20660184/',
        },
      ],
    },
}

app.get('/', (req, res) => {
  res.status(200).json(data);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
