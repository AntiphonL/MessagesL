import { app, MenuItemConstructorOptions } from "electron";
import { aboutMenuItem } from "./items/about";
import { separator } from "./items/separator";
import {
  checkForUpdatesMenuItem,
  installUpdatesMenuItem,
} from "./items/updates";
import { settingsMenu } from "./settingsMenu";

// This is the "Application" menu, which is only used on macOS
export const appMenuTemplate: MenuItemConstructorOptions = {
  label: "MessagesL",
  submenu: [
    aboutMenuItem,
    checkForUpdatesMenuItem,
    installUpdatesMenuItem,
    separator,
    {
      role: "close",
    },
    settingsMenu,
    separator,
    {
      label: "Hide MessagesL",
      accelerator: "Command+H",
      click: (): void => app.hide(),
    },
    separator,
    {
      label: "Quit",
      accelerator: "Command+Q",
      click: (): void => app.quit(),
    },
  ],
};
