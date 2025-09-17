import { WebContainer } from '@webcontainer/api';

let webContainerInstance = null;


export const getWebContainer = async () => {
    if (webContainerInstance === null) {
      try {
        webContainerInstance = await WebContainer.boot();
      } catch (error) {
        console.error("Failed to boot WebContainer:", error);
        throw error; // or return null
      }
    }
    return webContainerInstance;
  };