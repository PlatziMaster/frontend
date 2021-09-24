
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

## Documentación
### Componentes
Al inicio se comenzó a evaluar el diseño propuesto, por eso pense que una herramienta que facilitaria los estilos seria **Materialize CSS**.
Al principio tuve un inconveniente con la instalacion de las librerias de Materialize CSS debido a que presentaba fallas de compatibilidad con Stylus, por esa razon modifique el webpack.config para solo considerar CSS y que no presentara inconvenientes.

Se creo los componentes para cada seccion del CV, y al momento de agregar la foto de perfil se presento un inconveniente cuando React.js no reconocia la imagen, por lo tanto verifique y procedi a instalar los loaders requeridos.
### Estilos
Gracias a la libreria **Materialize CSS** pude aplicar los estilos apropiados.

## Resultado
![proyecto](https://github.com/Valmartinz/frontend/blob/main/cv.PNG)

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
