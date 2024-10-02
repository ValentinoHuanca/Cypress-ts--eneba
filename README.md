# Cypress(ts)-eBay
Bienvenido este es una muestra de mis conocimientos con el framework Cypress con el uso de TypeScript en lugar de JavaScript.
A continuacion se explica como ejecutar los diferentes casos de prueba.

## Branch

## Instalar Dependecias

Se debe ejecutar el siguiente comando en terminal:
```
npm i
````
En casos de que resulte un error ejecute el siguiente comando en lugar del anterior:
```
npm i --legacy-peer-deep
````

## Abrir Cypress

En terminal ejecute el comando:
    ```
    npm test
    ````

## Ejecutar pruebas en terminal
Se puede ejecutar en tres navegadores chrome, firefox y edge:

1. **Chrome**:
    ```
    npm run report-edge **/*/<nameTestSuite>
    ````
2. **Firefox**:
    ```
    npm run report-firefox **/*/<nameTestSuite>
    ````    
3. **edge**
    ```
    npm run report-edge **/*/<nameTestSuite>
    ````

estos comando se deben ejecutar en la terminal, generaran cada uno tres informes(uno en html,json y xml) en la misma ruta "cyrpess/test-result"

## NOTA:

Por el uso de la dependencia "cypress-real-events", se descarta las pruebas en el browser firefox y la ejecucuion de los casos en git actions