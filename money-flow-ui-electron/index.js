const electron = require('electron');
const { app, BrowserWindow } = electron;

app.on('ready', () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.setMenu(null);
    mainWindow.loadFile('./dist/index.html');
});