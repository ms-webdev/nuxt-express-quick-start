# Quick Starter Nuxt.js & Express.js
Dieses Template ist eine Erweiterung von [nuxt-community/express-template](https://github.com/nuxt-community/express-template)
und dient zum schnellen Start einer serverfähigen Anwendung. Zusätzliche Einstellungen und Packages dienen als soliden Grundeinstieg für Projekte
auch im Hinblick auf SEO-Performance.

Folgende Element wurden erweitert:
 * Anleitung für Port-Änderung (process.env)
 * PM2 Steuerung / Server Monitoring
 * Sass Loader
 * Bootstrap 4 (css) / Bootstrap Vue (components)
 * Font-Icons (Fontawesome 4)
 * Purgecss
 * Manifest.json mit Grundeinstellungen (PWA)
 * SEO-Check via lighthouse
 
 Downtime vermeiden
  * Deploy ohne Downtime
  * npm start bzw. pm2 restart vermeiden
  * Build ggf. auslagern, erst nach Fertigstellung in .nuxt kopieren (?)
 
 Leitfaden für Servereinstellungen:
  * NGINX Routing auf Express
  * NGINX: Wartungsseite (502 abfangen)
  
Einstellungen speziell für Laravel Forge:
 * Deploy-Script anpassen 

## Quick Start
 * Repository herunterladen
 * npm install
 * Port anpassen (Production)
 * Host einrichten (Forge)
 * NGINX anpassen (Forge)
 * Deploy (Forge)
 * Deploy Script anpassen (Forge)

## Step by Step
Folgende Anleitung beschreibt alle Arbeitschritte vom Ausgangs-Template.
### express-template & setup
[vue-cli](https://github.com/vuejs/vue-cli) sollte installiert sein.

``` bash
# nuxt-community/express-template
vue init nuxt-community/express-template <project-name>

# Projektordner wählen
cd <project-name> 

# install packages
npm install

# install sass-loader
npm install sass-loader node-sass --save-dev

# install bootstrap (latest version) + bootstrap-vue
npm install bootstrap bootstrap-vue
```
### eslint setup
Alle eslint packages und Einstellungen (.eslintrc)
wurden vom [starter template](https://github.com/nuxt-community/starter-template) kopiert und ausgetauscht.

### Bootstrap & CSS/SASS konfigurieren (nuxt.config.js)
 * Bootstrap-Vue initialisieren (css: false)
 * Bootstrap 4 CSS Einstellungen 
 * 
 
 ### Purge CSS & Inline einbinden
 Installiert werden muss das [purgecss-webpack-plugin](https://github.com/FullHuman/purgecss-webpack-plugin),
 zusätzlich wird das package [glob-all](https://github.com/jpillora/node-glob-all) benötigt.
  * Nuxt so einstellen dass CSS extern über ein Stylesheet anstatt Inline eingebunden wird: extractCSS: true
  * PurgeCSS als Plugin laden
  * Bereinigtes CSS wieder inline einfügen (FEHLT NOCH!!!) 
 
 
 ### Production Build & Start
 Bevor die App als Production gestartet wird muss das Build erzeugt werden, wenn nicht dann wird vie 'npm start' das Dev-Build genutzt!!!
 ``` bash
 # erzeuge build
 npm run build
 
 # starte Server
 npm start
 ```
 
 
 
