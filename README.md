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


# Resumen de Desarrollo

1. "["Crear los componentes del proyecto"]"
Antes de crear los componentes, consegui un diseno de un amigo Disenador UI. Que me facilto para realizar este proyecto. Behance @Daviddeviantart gracias David!

Una vez decidido el diseno, procedi a hacer un boceto de como iban a ir distribuidos los contenedores y la estructura del proyecto. Como no sabia Figma(despues me di cuenta lo util que hubiese sido) hice a mano todos los bosquejos y defini los contenedores. 

Decidi Flex. Aunque el fondo sabia que quizas Grid me ayudaria un poco mas. Pero en instancias que soy un desarrollador nuevo en este mundo y que este es mi primer proyecto en React. Decidi defenderme con las herramientas que mas confianza me daban asi que use ambos donde Flex es el principal y Grid un complementario.

Configure antes de comenzar todo el proyecto, actualize dependencias, configure webpack, babel, eslint, agregue loaders html y css, mantuve Stylus como preprocesador y comence!

2. [Añadir estilos]

Defini primero mis variables, tamano de fuentes, colores, font familys, margenes, paddings, bordes, iconos, imagenes.

Despues de definir, empece a integrar, ya que mis componentes HTML ya estaban listos con sus calses y todos(si los hice primero HTML, pude haber entrado directo con REACT pero lo descubri despues) 

En el camino me di cuenta que tardaba demasiado, asi que borre todo. Y empeze a componentizar en React directamente Porque? porque estaba pensando en un proyecto comun y no en react asi que tenia muchos errores, muchos contenedores estaban Extra, y no estaba aprovechando las ventajas de mi libreria.

Solucinado eso, cree mi carpeta Styles/Components y empeze a estilizar. 

Sufri con stylus, fue el primero curso que hice en el mes antes de empezar la Escuela de JS, y ya no recordaba nada. Repase, hice preguntas en la comunidad y logre retomar el hilo. Con un poco de frustracion cargue mi pagina para ver como iba y cargo todo EUREKA mis loaders y mi sintaxis ya no tenian errores. Pude relajarme un poco.

Evaluando mis antiguos proyectos me di cuenta que mis clases estaban muy mal(desde mi perspectiva) definidas, las borre todas y las defini de nuevo. 
Para mi suerte todo se rompio. No cargaba los estilos, todo era undefined, no se encontraban los modulos y aparecio un error que me tuvo 1 dia entero solucionarlo. Warning: Received `false` for a non-boolean attribute. 

Al dia siguiente me di cuenta ya un poco mas calmado, que habia un div al lado de un atributo sin definir, y claro react al verlo solo y definido como atributo lo llamaba verdadero y ese era el error. Lo borre y Eureka. Pude pasar a la siguiente Etapa la API

3. [Crear función getData.js]
La api, sufri de nuevo no recordaba nada de asincronismo, me vi el video de Oscar(Que es muy bueno por cierto) como 9 veces para entender como se llama la API y todo lo que ocurre en la peticion desde que sale ahsta que llegue. Una vez que etendi como funcionaba, defini mi funcion getData, con async y await. Y se la pase a mi estado con Hooks. Porque? Porque con hooks react me permite guardar en el estado el valor actual de esta y su funcion. Y poder llamar la funcion desde cualquier sitio :D

Y si, tuve el famoso error Don’t call Hooks inside loops, conditions, or nested functions. 


4. [Integrar API]
    Personalize un poco la API, al entender que info tenia, le pase estas propiedades como Props a mis componentes, y los mande a llamar en cada componenete de manera individual. En algunos cosas tuve que recurrir a un metodo de recorrido de arrays porque me encontraba con array de objetos y por mas que intentara no podia acceder a la propiedad. Integre toda la informacion y agregue ademas colores y iconos que utilizaria para algunos tips y progres bars.

5. [Personalizar API]

Definido arriba sin mucho detalle, cambiar informacion ajustar un poco, y recorrer la API.
Al final debia hacer commits pero las pruebas no me pasaron, en ultima instancias estuve solucionando temas responsive y no alcance a indagar mucho sobre jest, intente hacer unas modificaciones en este pero no hubo caso al parecer no me reconocia las clases o items que se creaban con el metodo .map().


6. [Documentar]

Recursos
API: Fake Api local

Utilerias de desarrollo
React Documentación: https://es.reactjs.org/

Styled Components: https://www.styled-components.com/

React Hooks: https://es.reactjs.org/docs/hooks-intro.html

Box Shadow CSS: https://www.cssmatic.com/box-shadow

Favicon: https://www.favicon-generator.org/

CSS Grid: https://www.w3schools.com/css/css_grid.asp

Font Awesome: https://fontawesome.com/v4.7/icons/

7.[Aprendizaje]

"Que sabia antes?"
**HTML5, CSS3, Responsive, JsBasico.**

**Que aprendi despues** y que tambien aplique.
Ecmascript, Asincronismo, Javascript, React, Trabajar con Archivos JSX, Stylus, Responsive con Styled Components, Scope y sus problemas u.u, Props, Webpack, Babel, EsLInt, Terminal, Manejar un JSON, APIS y manipularalas, Git Hooks, Imports, Requires. Me falto optimizarlo un poco mejor, peor al final me di cuenta que lo primero que debia ahcer era actualizar Webpack XD asi que no pude instalar nada mas despues ni Terser, etc. 

-Configurar un proyecto
-Instalar React
-Instalar y configurar Babel
-Instalar y configurar Webpack
-Crear un servidor de desarrollo local
-Estructura del proyecto
-React Hooks - useState()
-React Hooks - useEffect()
-Styled Components
-Stylus

**Conclusion**

Muchas gracias por este reto, me llevo mucho mas de lo que esperaba. jamas pense que en 1 mes cambiaria tanto, y trabajaria en un proyecto asi. Me pondo mucha expeectativa asi que se que di lo mejor y que puedo aprender mas, hice nuevos companeros, y maneje tecnologias que a mi pensar eran prohibidas, pero sobretodo me diverti, y trate de cumplir con todo sin rendirme(me falto Jest u.u)

Platzi si cambia vidas.





