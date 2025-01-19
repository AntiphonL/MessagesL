import { app, MenuItemConstructorOptions } from "electron";
import {
  checkForUpdatesMenuItem,
  installUpdatesMenuItem,
} from "./items/updates";
import { separator } from "./items/separator";

export const fileMenuTemplate: MenuItemConstructorOptions = {
  label: "&File",
  submenu: [
    checkForUpdatesMenuItem,
    installUpdatesMenuItem,
    separator,
    {
      label: "Quit MessagesL",
      click: (): void => app.quit(),
    },
  ],
};
