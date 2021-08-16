# frontend

## React Curriculum vitae

Crear tu curriculum vitae en React, analiza la estructura propuesta e inspirate para mostrar tu información.

![react-cv](https://github.com/PlatziMaster/frontend/blob/main/screenshot.png?raw=true)

## Proposed Design

### Mobile
![Mobile simple mockup](./design/images/MobileMockup.png)
![Mobile mouckup with menu](./design/images/MobileMockup.png)

### Desktop
![Desktop design](./design/images/Desktop.png)

### Retos
1. [Crear los componentes del proyecto](https://github.com/platzimaster/frontend/issues/1)
2. [Añadir estilos](https://github.com/platzimaster/frontend/issues/2)
3. [Crear función getData.js](https://github.com/platzimaster/frontend/issues/3)
4. [Integrar API](https://github.com/platzimaster/frontend/issues/4)
5. [Personalizar API](https://github.com/platzimaster/frontend/issues/5)
6. [Documentar](https://github.com/platzimaster/frontend/issues/6)

### Installation
The installation is something pretty important for me because of my computer's memory. Therefore I had to get rid of some stuff I considered as 'not strictly necessary', among these items were:
- Stylus preprocessor
- Prettier
- Husky

I know prettier help us with the code, but it is not a big deal for the app to work properly, so...

```
npm install
```

### Execution
I have worked in some React projects before and I have some experience with components, pages and router. The way how the project is organized is pretty straight forward. Among the essential directories we have:
- assets: Only icons were used in this project
- components: The Layout works as a template. It is useful to gather all the components that will be in all the pages. In this case, the Header and the ProfileIntro are included in all the pages
- containers: We only have App, which works as the router
- pages: All the pages for this project, included the NotFound one, althought the latest doesn't have any special design
- styles: Separated into two sections, one for components and other for pages. All was done with plain css

```
npm run start
```

### Server
It was no any major problem with this 'fake API', it works nice and my app renders all the data just fine. I wanted to add a loader, but I think it was no so-necessary because the page mantains statics almost always...

```
npm run server
```

### Compilar
No problem at all

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
