# Quick Starter Nuxt.js & Express.js
Dieses Template ist eine Erweiterung von nuxt-community/express-template
und dient zum schnellen Start einer serverfähigen Anwendung.
Folgende Element wurden erweitert:
 * Switch für Port-Änderung
 * PM2 Steuerung 
 * Sass Loader
 * Bootstrap 4 / Bootstrap Vue
 * Purgecss 
 
 Leitfaden für Servereinstellungen:
  * NGINX Routing auf Express
  * NGINX: Wartungsseite (502 abfangen)
  
Einstellungen speziell für Laravel Forge:
 * Deploy-Script anpassen 

## Quick Start
 * Repository herunterladen
 * npm install
 * Port anpassen
 * Host einrichten (Forge)
 * NGINX anpassen (Forge)
 * Deploy (Forge)
 * Deploy Script anpassen (Forge)

## Step by Step
Folgende Anleitung beschreibt alle Arbeitschritte vom Ausgangs-Template.

### express-template 


``` bash
# nuxt-community/express-template
vue init nuxt-community/express-template <project-name>
# move to your project
cd <project-name> 

# install packages
npm install

# install sass-loader
npm install sass-loader node-sass --save-dev

# install bootstrap-vue
npm install bootstrap-vue

# install bootstrap (latest version) 
npm install bootstrap

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Backpack

We use [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).
