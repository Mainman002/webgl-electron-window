const electron = require('electron');
const path = require('path');

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin',
    )},'electron');

const { app, BrowserWindow, Menu } = electron;
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

let mainWindow, index;

app.on('ready', () => {
    mainWindowLoad();
    const menu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(menu);
});

const index_Window = () => {
    index = new BrowserWindow({
        webPreferences: {
            nodeIntegration: false
        },
        title: 'Index'
    });

    index.loadURL(`file://${__dirname}/index.html`);
};

const mainWindowLoad = () => {
    mainWindow = new BrowserWindow({
        width: 512,
        height: 512,
        minWidth: 256,
        minHeight: 256,
        resizable: true,
        center: true,
        // titleBarStyle: 'hidden',
        fullscreen: false,
        webPreferences: {
            nodeIntegration: false
        }
    });
    // mainWindow.maximize();
    mainWindow.loadURL(`file://${__dirname}/index.html`);
};

const mainMenuTemplate = [
    {
        label: 'Devtool',
        accelerator: 'Ctrl+D',
        click() {
            mainWindow.webContents.openDevTools();
        }
    },
    {
        label: 'Index',
        click() {
            index_Window();
        }
    }
];


