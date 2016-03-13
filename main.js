'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var Tray = require('tray');
var Menu = require('menu');
var appIcon = null;
var mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();

    mainWindow.on('page-title-updated', function () {
        console.log('BrowserWindow page-title-updated');
    });

    mainWindow.on('close', function () {
        console.log('BrowserWindow close');
    });

    mainWindow.on('closed', function () {
        console.log('BrowserWindow closed');
        mainWindow = null;
    });

    mainWindow.on('unresponsive', function () {
        console.log('BrowserWindow unresponsive');
    });

    mainWindow.on('responsive', function () {
        console.log('BrowserWindow responsive');
    });

    mainWindow.on('blur', function () {
        console.log('BrowserWindow blur');
    });

    mainWindow.on('focus', function () {
        console.log('BrowserWindow focus');
    });

    mainWindow.on('show', function () {
        console.log('BrowserWindow show');
    });

    mainWindow.on('hide', function () {
        console.log('BrowserWindow hide');
    });

    mainWindow.on('maximize', function () {
        console.log('BrowserWindow maximize');
    });

    mainWindow.on('unmaximize', function () {
        console.log('BrowserWindow unmaximize');
    });

    mainWindow.on('minimize', function () {
        console.log('BrowserWindow minimize');
    });

    mainWindow.on('restore', function () {
        console.log('BrowserWindow restore');
    });

    mainWindow.on('resize', function () {
        console.log('BrowserWindow resize');
    });

    mainWindow.on('move', function () {
        console.log('BrowserWindow move');
    });

    mainWindow.on('enter-full-screen', function () {
        console.log('BrowserWindow enter-full-screen');
    });

    mainWindow.on('leave-full-screen', function () {
        console.log('BrowserWindow leave-full-screen');
    });

    mainWindow.on('enter-html-full-screen', function () {
        console.log('BrowserWindow enter-html-full-screen');
    });

    mainWindow.on('leave-html-full-screen', function () {
        console.log('BrowserWindow leave-html-full-screen');
    });
}

app.on('will-finish-launching', function () {
    console.log('will-finish-launching');
});

app.on('ready', function () {
    console.log('ready');
    createWindow();

    appIcon = new Tray(__dirname + '/img/icon.png');
    var array = [];
    var item = {};

    item["label"] = "show";
    item["click"] = function () {
        mainWindow.show();
    };
    array.push(item);

    item = {};
    item["label"] = "hide";
    item["click"] = function () {
        mainWindow.hide();
    };
    array.push(item);

    var contextMenu = Menu.buildFromTemplate(array);
    appIcon.setContextMenu(contextMenu);
});

app.on('window-all-closed', function () {
    console.log('window-all-closed');
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('before-quit', function () {
    console.log('before-quit');
});

app.on('will-quit', function () {
    console.log('will-quit');
});

app.on('quit', function () {
    console.log('quit');
});

app.on('browser-window-blur', function () {
    console.log('browser-window-blur');
});

app.on('browser-window-focus', function () {
    console.log('browser-window-focus');
});

app.on('browser-window-created', function () {
    console.log('browser-window-created');
});