const {app, BrowserWindow} = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const { ipcMain } = require('electron');

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({width: 900, height: 680, frame: false });
    mainWindow.loadURL(
        isDev //decide se executa a compilacao do react ou em ambiente de dev
        ? "http//localhost:3000"
        : `file:${path.join(__dirname, "../build/index.html")}`
    );

    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);
app.on("window-all-closed", ()=>{
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on("active", ()=>{
    if(mainWindow == null){
        createWindow();
    }
});

ipcMain.on('close-app', () => {
    // Fecha a janela atual
    const window = require('electron').remote.getCurrentWindow();
    window.close();
  });


  ipcMain.on('minimize-app', () => {
    // Minimiza a janela atual
    const window = require('electron').remote.getCurrentWindow();
    window.minimize();
  });


ipcMain.on('expand-app', () => {
  // Expande a janela atual
  const window = require('electron').remote.getCurrentWindow();
  window.maximize();
});