import { default as PATHS } from "./paths";
import { DefaultTheme } from "vitepress";
import * as SIDEBARS from "./sidebars/index.ts";

const ALL_SIDEBARS:DefaultTheme.SidebarMulti = {
    [PATHS.HOME]: SIDEBARS.HOME_SIDEBAR,
    [PATHS.BACKEND_JAVA]: SIDEBARS.JAVA_SIDEBAR,
    [PATHS.BACKEND_SPRING]: SIDEBARS.SPRING_SIDEBAR,
}

export default ALL_SIDEBARS;