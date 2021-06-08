# frontend

## React Curriculum vitae

Crear tu curriculum vitae en React, analiza la estructura propuesta e inspirate para mostrar tu información.

![react-cv](https://github.com/PlatziMaster/frontend/blob/main/screenshot.png?raw=true)

### Retos
1. [Crear los componentes del proyecto](https://github.com/platzimaster/frontend/issues/1)
2. [Añadir estilos](https://github.com/platzimaster/frontend/issues/2)
3. [Crear función getData.js](https://github.com/platzimaster/frontend/issues/3)
4. [Integrar API](https://github.com/platzimaster/frontend/issues/4)
5. [Personalizar API](https://github.com/platzimaster/frontend/issues/5)
6. [Documentar](https://github.com/platzimaster/frontend/issues/6)

### Instalación
```
npm install
```

### Ejecución
```
npm run start
```

### Server
```
npm run server
```

### Compilar
```
npm run build
```

### Pruebas Unitarias
```
npm run test
```

### ESlint
```
npm run lint
```

### Enviar solución de reto
Debes de crear un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia tu repositorio.

### Contribuir
Si alguien quiere agregar o mejorar algo, lo invito a colaborar directamente en este repositorio: [frontend](https://github.com/platzimaster/frontend/)

### Licencia
frontend se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).

### Issues Description
1. Issue #1
All the component were created on their file, and the tests were running. I create every component and their content based on the tests.
2. Issue #2 
I use The file on styles that works with stylus, and use that kind of propierties to make it work
3. Issue #3
I create a function getData, and exported it like i did with the other componentes
4. Issue #4
I did integrate the api created on the data.json, the way was using the function getData, and use console.log to see if it was working. 
Then i used useState to manage the data, and useEffect to set the data when it comes, and in that way show if i have the data in every component.
After that I send every data on its place and manage it to show the content
5. Issue #5
I entered my personal data on the data.json file to be showed in the App.
6. Issue #6
To save changes i had to commit, but the tests were bad again.
The first issue i had was that .map was not found as a method, so i had to check if the prop were empty with a thernary. 
After that the inside tags were not read by the tests, so i decided to create in the negative thernary choice that there would be 3 empty items until we have some props to show.
In that way i passed the issues and finish the proyect issues.