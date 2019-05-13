/* eslint-disable no-unused-vars */
function BrowserWindow(accountName, windowName, tabs = [{tabURL: 'defaultHomePage.com'}]){
    this.accountName = accountName;
    this.windowName = windowName;
    this.tabs = tabs;
}

BrowserWindow.prototype.joinWindows = function(){
    return this.tabs.length;    
}
BrowserWindow.prototype.newTab = function(){
    return this.tabs.length;
}
BrowserWindow.prototype.closeTab = function(){
    return this.tabs.length;
}
