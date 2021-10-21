import { BsClipboardData, BsCardChecklist } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';

interface menuItem {
	label: string;
	link: string;
	icon: () => React.ReactNode;
}

export const menuItems: menuItem[] = [
	{
		label: 'Home',
		link: '/',
		icon: () => <AiOutlineHome />,
	},
	{
		label: 'Boards',
		link: '/boards',
		icon: () => <BsClipboardData />,
	},
	{
		label: 'Templates',
		link: '/templates',
		icon: () => <BsCardChecklist />,
	},
	{
		label: 'New board',
		link: '/new-board',
		icon: () => <IoMdAdd />,
	},
	{
		label: 'Settings',
		link: '/settings',
		icon: () => <AiOutlineSetting />,
	},
	{
		label: 'Logout',
		link: '/logout',
		icon: () => <BiLogOut />,
	},
];
