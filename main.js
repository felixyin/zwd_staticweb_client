// Modules to control application life and create native browser window
const {app,Menu, BrowserWindow} = require('electron')
const path = require('path')
function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        minWidth:1000,//窗口的最小宽度，单位: 像素值,
        minHeight:800,//窗口的最小高度，单位: 像素值,
        show:false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
// 隐藏菜单栏
    Menu.setApplicationMenu(null)
    // and load the index.html of the app.
    // mainWindow.loadURL('http://192.168.0.12:8000/')
    // mainWindow.loadURL('http://127.0.0.1:8080/')
    mainWindow.loadURL('http://localhost:8000/gen/a')
    // mainWindow.loadFile('jsoneditor.html')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
    mainWindow.maximize()
    mainWindow.show()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
