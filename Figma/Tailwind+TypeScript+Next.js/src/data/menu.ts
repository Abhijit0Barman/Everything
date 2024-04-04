interface MenuItem {
  id: number
  label: string
  url: string
  submenu: boolean
}

const MenuItems: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    url: "/",
    submenu: false,
  },
  {
    id: 2,
    label: "IDO",
    url: "/#ido",
    submenu: false,
  },
  {
    id: 3,
    label: "Tokenomics",
    url: "/#tokenomics",
    submenu: false,
  },
  {
    id: 4,
    label: "Roadmap",
    url: "/#roadmap",
    submenu: false,
  },
  {
    id: 5,
    label: "Coming Soon",
    url: "/",
    submenu: true,
  },
]

export default MenuItems
