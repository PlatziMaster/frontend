# Platzi Master Frontend Test

## Resume in React

Creation of a resume using React.js that shows personal information brought in from an API.

First of all, I must say that I am very proud to be able to meet this challenge because I had to prepare myself by watching some of the courses offered by Platzi about Frontend Development with React and JavaScript and now I feel that I have made a lot of progress. I would like to thank Platzi for this opportunity.

### Deployment

1. [Go check the project](https://jorgetrad99.github.io/frontend/)
2. [Go check the API](https://frontend-test-resume-api.herokuapp.com/data)

### Results

![react-cv](https://i.ibb.co/GW5KGbd/Screen-Shot-2021-08-01-at-19-31-09.png)
![react-cv](https://i.ibb.co/dMY1czR/Screen-Shot-2021-08-01-at-19-32-26.png)
![react-cv](https://i.ibb.co/FDqQnYQ/Screen-Shot-2021-08-01-at-19-32-55.png)

### Main tools applied to the project

```
* HTML
* CSS
* JavaScript
* React.js
* Webpack
* Jest
```

To meet this React test, the following objectives were met:

### Challenges

1. [Create the project components](https://github.com/platzimaster/frontend/issues/1)

   ![react-cv](https://github.com/PlatziMaster/frontend/blob/main/screenshot.png?raw=true)

   - Analyze the structure shown in the image above
   - A new git branch is created to work the components
   - Create the necessary component files
   - Comply with the requirements established in the component tests
   - A new component is created to handle the profile photo
   - The HTML structure was inserted in each of the components
   - Each component field was populated with test information
   - Configuration was added to be able to deploy the [project in github pages](https://jorgetrad99.github.io/frontend/)

2. [Add styles](https://github.com/platzimaster/frontend/issues/2)

   - A new git branch is created to work the styles of the components
   - The container for each element is styled.
   - A component called "Title" is created that will be called by each component to display a header with the name of each one.
   - Some mixins are created that help us to reuse the CSS code and use them easily in the styles of each component.
   - The components are styled following the Mobile First methodology
   - Media queries are implemented so that the project can be responsive and adaptive for any screen

3. [Create getData.js function](https://github.com/platzimaster/frontend/issues/3)

   ![getData function](https://i.ibb.co/xMb22qN/Screen-Shot-2021-08-01-at-18-31-14.png)

   - The getData function receives an argument that is the url of the API and returns a response from the request in JSON format.
   - This function can be accessed simply by importing into any document in which you want to occupy the function and can be used by passing any url of any api.

4. [Integrate API](https://github.com/platzimaster/frontend/issues/4)


    * The getData function is imported to the App.jsx container
    * The getData function is called by App.jsx. Once you get the data fetched from the API, it is saved in the "data" state using Hooks and all the main components are rendered.
    * A component called Loading is implemented that renderes in App.jsx while the information is being searched. This is controlled with a state defined with Hooks called "loading" and a conditional that is in charge of changing the state of "loading" from true to false, and then it renders the other main components.
    * The information is passed by props to each component from App.jsx

    ![Passing data by props](https://i.ibb.co/br5BHBX/Screen-Shot-2021-08-01-at-19-11-43.png)

    * The components will be in charge of receiving this information and using it to fill in the fields.
    * In those data that are inside an array, the map function was used to traverse it and provide the corresponding information.

    ![Map function in Header component](https://i.ibb.co/SsKmt40/Screen-Shot-2021-08-01-at-19-14-58.png)

5. [Custom API](https://github.com/platzimaster/frontend/issues/5)

   - The data in the data.json file was changed to real data
   - The github and heroku integration was used to [deploy the API](https://frontend-test-resume-api.herokuapp.com/data)

6. [Document](https://github.com/platzimaster/frontend/issues/6)

### Installation

```
npm install
```

### Execution

```
npm run start
```

### Server

```
npm run server
```

### Compile

```
npm run build
```

### Unit tests

```
npm run test
```

### ESlint

```
npm run lint
```

### Submit challenge solution

You must create a "Fork" of this project, scramble the problems and create a Pull Request to your repository.

### Contribute

If someone wants to add or improve something, you can collaborate directly in this repository: [frontend](https://github.com/platzimaster/frontend/)

### License

frontend is released under the license [MIT](https://opensource.org/licenses/MIT).
