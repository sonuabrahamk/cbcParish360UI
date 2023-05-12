import { INavbarData } from "./submenu";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'diocese',
        icon: 'fa-solid fa-school',
        label: 'Diocese',
        items:[
            {
                routeLink: 'diocese',
                icon: 'fa-solid fa-file-lines',
                label: 'List Diocese'
            }
        ]
    },
    {
        routeLink: 'forane',
        icon: 'fa-solid fa-church',
        label: 'Forane',
        items:[
            {
                routeLink: 'forane',
                icon: 'fa-solid fa-file-lines',
                label: 'List Forane'
            }
        ]
    },
    {
        routeLink: 'parish',
        icon: 'fa-solid fa-church',
        label: 'Parish',
        items:[
            {
                routeLink: 'parish',
                icon: 'fa-solid fa-file-lines',
                label: 'List Parish'
            }
        ]
    },
    {
        routeLink: 'student',
        icon: 'fa-solid fa-graduation-cap',
        label: 'Students',
        items: [
            {
                routeLink: 'student',
                icon: 'fa-solid fa-file-lines',
                label: 'List Students'
            },
            {
                routeLink: 'student-info/create',
                icon: 'fa-solid fa-file-circle-plus',
                label: 'Add Students'
            }
        ]
    },
    {
        routeLink: 'dashboard',
        icon: 'fa-solid fa-person-chalkboard',
        label: 'Teachers'
    },
]