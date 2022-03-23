import { contextBridge, shell } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
  openTab: (link: string) => {
    shell.openExternal(link);
  },
});
