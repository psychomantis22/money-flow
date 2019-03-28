const electron = require('electron');

const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', () => {
    const mainWindow = new BrowserWindow({});
    //mainWindow.setMenu(null);
    //mainWindow.loadFile('./dist/index.html');
    mainWindow.loadFile('./test/index.html');
});

ipcMain.on('myevent', (event, data) => {
    event.sender.webContents.send('myresponse', 'it worked! ' + data.texto);
});