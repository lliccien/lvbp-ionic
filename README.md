# App Liga Venezolana de BeisbOl Profesional

## Prerequisitos

Instalar `npm i -g ionic @angular/cli json-serve` como administrador

## Backend

Ejecutar jsosn-server con el siguiente comando en la raiz del proyecto `json-server --watch db.json` para colocar en marcha el servidor basado en el archivo db.json (Debe estar ejecutandose para poder consumirse en el frontend)

## Frontend

Ejecutar `npm install` para descargar la dependencias

Ejecutar `ionic serve` para iniciar el proyecto en el navegador

Ejecutar `ionic build` para construir el proyecto (Es indispensable para poder generar las apps y se debe realizar cada vez que se agrege un cambio)


Para instalar las plataformas usar segun sea el caso 
```
npx cap add android
npx cap add ios
```

Para copiar el proyecto a las plataformas correspondientes
```
npx cap copy android
npx cap copy ios
```

Para construir las apps y abrir los editores correspondientes de cada caso (Android Studio y Xcode)
```
npx cap open android
npx cap open ios
```
