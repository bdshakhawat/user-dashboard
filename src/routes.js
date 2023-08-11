import { IoGridOutline, IoHomeOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";

 const routes=[
    {
        to: '/',
        name: 'Home',
        Icon: IoHomeOutline
    },
    {
        to: '/profile',
        name: 'Profile',
        Icon: BiUserCircle
    },
    {
        to: '/dashboard',
        name: 'Dashboard',
        Icon: BsSpeedometer2
    },
    {
        to: '/test-components',
        name: 'Test Components',
        Icon: IoGridOutline
    },
    {
        to: '/statistics',
        name: 'Statistics',
        Icon: AiOutlineBarChart
    }
];
export default routes;