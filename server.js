const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const upload = multer();
const app = express();
//let skillsData = require('./data/movies.json');


//Allow cros origin
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static(__dirname));

let data = [{
    name: 'Marco Baquero',
    avatar: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/06/04/15912219730543.jpg',
    profession: 'Engineer', 
    address: 'Medellin Antioquia', 
    email: 'marcobaquero@gmail.com',
    website: 'http://marcobaquero.wix.com/poxy',
    phone: '3506142615',
    profile: "'I am proactive, creative, and finding different solutions to problems, 'thinking outside the box, and having a taste for learning that does not end, I learn quickly, I have been able to optimize different system",
    experience: [
        {
          "company": "Halliburton",
          "endDate": "Jan 2021",
          "jobDescription": "Completion tools Specialist, liner hangers and Packers, Assembly of tools in the workshop and Installation of bottom tools in a well drill.",
          "jobTitle": "Sr, Tech professional completions",
          "startDate": "Sep 2018"
        },
        {
          "company": "Mansarovar Energy Ltd",
          "endDate": "Dec 2017",
          "jobDescription": "Control and optimization of well production, definition of control logic for optimization of surface facilities, gas compression and steam generation systems",
          "jobTitle": "Production Enginner",
          "startDate": "Jan 2013"
        },
        {
            "company": "OXY Colombia",
            "endDate": "Sep 2012",
            "jobDescription": "Formation damage study, using 3D simulation - LCI well stimulation, Review of production losses due to damage in injection wells",
            "jobTitle": "Intern",
            "startDate": "Jan 2012"
        },
        {
            "company": "ByT Soluciones LTDA",
            "endDate": "Jul 2008",
            "jobDescription": "I had my entrepreneurship dedicated to the trade of technological products, Trade of goods through the internet, Hosting service and server administration",
            "jobTitle": "Manager",
            "startDate": "Jul 2006"
        },
        {
            "company": "Network Power Ltda",
            "endDate": "Jun 2006",
            "jobDescription": "Direct the technical department, warehouse inventory control, management of equipment for delivery, repair of computers",
            "jobTitle": "Tech Chief",
            "startDate": "Jan 2005"
        },
      ],
    academic: [
        {
          "degree": "Master In Hydrocarbons Management",
          "description": "Design of an electricity generation plant to take advantage of the associated natural gas from the moqueta field (Colombia)",
          "endDate": "Jul 2016",
          "institution": "Viña del mar university- Chile",
          "startDate": "Jul 2014"
        },
        {
          "degree": "Petroleum Engineering",
          "description": "Multiphasic, multi-component and three-dimensional simulation, to identify and quantify problems of scale formation, organic deposits and bacterial formation applied in the LA CIRA INFANTAS field.",
          "endDate": "Jul 2012",
          "institution": "Surcolombiana University Colombia",
          "startDate": "Jul 2008"
        },
        {
          "degree": "Electronic Engineerng",
          "description": "I did a six sem of electronical engineering at this university, my first approach to OOP with C++.",
          "endDate": "Jul 2006",
          "institution": "Francisco José De Caldas District University",
          "startDate": "Jan 2003"
        },
        {
            "degree": "Bachelor With Emphasis In Mathematics",
            "description": "I did a studies in math pedagogics at this university.",
            "endDate": "Jul 2002",
            "institution": "Francisco José De Caldas District University",
            "startDate": "Jan 2001"
        },
      ],
    skills: [
        {
          "name": "HTML5",
          "percentage": "10%"
        },
        {
          "name": "CSS",
          "percentage": "10%"
        },
        {
          "name": "JavaScript",
          "percentage": "10%"
        },
        {
          "name": "Python",
          "percentage": "50%"
        }
      ],
    interest: [
        "Data Science",
        "Maths",
        "Machine Learning",
        "Artificial Intelligence",
        "Backend",
        "Frontend"
      ],
    languages: [
        {
          "name": "Spanish",
          "percentage": "Native"
        },
        {
          "name": "English",
          "percentage": "60%"
        }
      ],
  }
]
app.get('/test1', function(req, res){
//   res.sendFile(__dirname +"/mainPresentation.html");
res.json(data);
// console.log('test prueba')
});

let name = "";

app.post('/', function(req, res){
  name = req.body;
  console.log(name);
  res.sendFile(__dirname +"/views/presentation.html");
});

app.options('movies', cors());
app.post('/movies', cors(), function(req, res){
 
  if (req.body.akelab == "123456789"){
   
    res.json(skillsData);
  } else {
    res.json({error: "Can not get the data due to security reasons"})
  }
  
});

app.listen(process.env.PORT || 3030, () => {
  console.log("Server Listening on Port 3030");
});