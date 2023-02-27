# Frontend

# React Curriculum vitae

This project was created in order to participate in the [Ethereum Developer Program](https://platzi.com/clases/6375-ethereum-developer-program/59317-que-es-el-ethereum-developer-program/) created by equipo de [Platzi](https://platzi.com/home) team and to have the opportunity to access not only a scholarship from the platform but also to be part of the students who will have access to a special training on blockchain with Ethereum.

## Results
### Frontend
[link to review](https://cv-kviera.onrender.com) 

![frontend](https://user-images.githubusercontent.com/53414453/221685313-de816684-99cd-43bc-807c-1a61e91a2683.png)

### Backend
[link to review](https://cv-data-kviera.onrender.com) 

![2023-02-27_16h07_52](https://user-images.githubusercontent.com/53414453/221685950-1b999028-0aa2-4133-9125-e6964289fc50.png)

## Project Structure
- Project
    - src
        - components : Folder that contains all react components
            - Header : This component show the avatar image and a parent of About component
            - About : This component show name, professional an contact information
            - Profile : Contains and small description of my person
            - Experience : Map the array of items of experience data
            - Academic : Map the array of items of academic data
            - Skills : Map the array of string of skills data
            - Interest : Show relevant interest from the data
            - Languages: Map the array of items of language data
        - containers
            - App.jsx : General file that contains all the react components and make the data request
        - utils
            - getData.js : I use this file to make the request to the API
        - styles
            - components
                -App.syl : Manage all the css styles in the app
## Project Steps
<details>
<summary>Create the project components #1: Analyze the project and identify its structure</summary>
&nbsp;&nbsp;&nbsp;The first thing I did was create all the files inside the APP.js file then I modified the location of the "About"component and started to create he whole structure to fit the test, finally, I had to modify some test to be relative to my information, for example the languajes, the original test are set to found more that 2 items, but as I only have 2 languages I modified to seek for more that 1 item.
</details>
<br>
<details>
<summary>Add styles #2: Create the styles to give it the desired design, keep the proposed structure.</summary>
&nbsp;&nbsp;&nbsp; I create all the syles in a general file named "App.styl" it's the default from the repositorie. I decided to create all the styles from scratch and try to make it simple and just fit the proposed structure without anything super elaborated.
</details>
<br>
<details>
<summary>Create getData.js function #3: Create getData.js function to consume an API</summary>
&nbsp;&nbsp;&nbsp; This was by far the easiest task of the project, I simple created a general funcion to manage a GET request by a dynamic url and return the reponse as a json object.
</details>
<br>
<details>
<summary>Integrate API #4: Start the test server and integrate the proposed information into your application.</summary>
&nbsp;&nbsp;&nbsp; I thought of only make one request to get the information when the app loads all the promps in the root "App.jsx" file using the function from the previous task.
</details>
<br>
<details>
<summary>Custom API #5: Customize the data.json file in the root of the project with your information. (If you deploy your own API in a cloud service it is a plus.)</summary>
&nbsp;&nbsp;&nbsp; I had already personalized the API in the previous task so I decided to create an small nodejs app with express to get the data and publish it in render. I also publish the frontend app in this same platform.
</details>

___
## Troubleshooting
1. When I tried to execute the projet with nodejs v18 I get the error [ERR_OSSL_EVP_UNSUPPORTED](https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported) so I had to downgrade to v16.3.0 with [nmv](https://github.com/nvm-sh/nvm).
2. For the fourth task I also had to modify the test because when I consumed the API I created all the items recursively with the map property every time I used and array and as I used function components the first time it loads the props all the info are null, so it was not loading the items.
## Project References
- [Render Cloud Service](https://render.com)
- [NMV](https://github.com/nvm-sh/nvm)
