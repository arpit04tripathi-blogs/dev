import { default as PATHS } from "./paths";

const TOP_NAVBAR = [
    { text: 'Home', link: PATHS.HOME },
    { text: 'Examples', link: '/markdown-examples' },
    { 
        text: 'Backend', 
        items: [
            { text: 'Java', link: PATHS.BACKEND_JAVA },
            { text: 'Spring', link: PATHS.BACKEND_SPRING }
        ] 
    }
]

export default TOP_NAVBAR;