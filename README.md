Esse é um projeto para desenvolver um app de gerenciamento de recursos da policia militar de SC utilizando frameworks: Electron e React

Obs run:

"electron-build": "electron-builder" -> Gera o executavel do projeto
"release": "npm run react-build && electron-builder --publish=always" -> gera os executaveis em versao publish
"build": "npm run react-build && npm run electron-build" -> faz a build
"start": "concurrently \"cross-env BROWSER=none npm run react-start\" \"wait-on http://localhost:3000 && electron .\", -> testes de developer
"start:nodemon" : "nodemon --exec 'npm start'"