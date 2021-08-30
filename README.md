# frontend

## React Curriculum vitae

Crear tu curriculum vitae en React, analiza la estructura propuesta e inspirate para mostrar tu información.

![react-cv](https://github.com/PlatziMaster/frontend/blob/main/screenshot.png?raw=true)

### Retos
1. [Crear los componentes del proyecto](https://github.com/platzimaster/frontend/issues/1)

-Se crearon los componentes funcionales para cada una de las secciones del curriculum vitae. Se creó un componente llamado Container.jsx con el fin de 
encapsular algunos de los componentes. Finalmente, se creo un componente Title.jsx para reutilizarlo en cada uno de los títulos de las secciones.

2. [Añadir estilos](https://github.com/platzimaster/frontend/issues/2)

-Para los estilos se utilizó el preprocesador de CSS denominado Stylus. Se creo un archivo de estilos para cada uno de los componentes, y un archivo llamado 
Vars.styl con el fin de colocar variables y bloques de código que se utilizan varias veces en el proyecto. 

3. [Crear función getData.js](https://github.com/platzimaster/frontend/issues/3)

- Se creó la función getData.js usando fetch para recuperar los datos del archivo data.json.

4. [Integrar API](https://github.com/platzimaster/frontend/issues/4)

- La integración de la API se llevo a cabo con la importación de la función getData(). En el componente (contenedor) denominado App.jsx, se agregaron todos los demás componentes, y se realizaron las iteraciones necesarias para renderizar la información del archivo data.json. 

5. [Personalizar API](https://github.com/platzimaster/frontend/issues/5)

- La personalización de la API se llevo a cabo modificando el archivo data.json, adicionando mi información personal. 

6. [Documentar](https://github.com/platzimaster/frontend/issues/6)

- La documentación se completó en el archivo README.md. 

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
