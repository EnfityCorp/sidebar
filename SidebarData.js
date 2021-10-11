import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Explore",
        path: '/explore',
        icon: <MdIcons.MdExplore />,
        cName: "nav-text"
    },
    {
        title: "Notifications",
        path: '/notifications',
        icon: <MdIcons.MdNotificationsActive/>,
        cName: "nav-text"
    },
    {
        title: "Profile",
        path: '/profile',
        icon: <CgIcons.CgProfile />,
        cName: "nav-text"
    },
    {
        title:"Logout",
        path: '/logout',
        icon:<MdIcons.MdOutlineLogout/>,
        cName: 'nav-btm'

    },
]
