import { HomeIcon, CalendarAltIcon, PlusCircleIcon } from 'react-line-awesome';
import { routes } from '../routes';

export const navigationArray = [
  {
    id: 1,
    text: 'Home',
    slug: 'home',
    path: routes.mainHome,
    Icon: HomeIcon
  },
  {
    id: 2,
    text: 'My Tasks',
    slug: 'mytasks',
    path: routes.tasks,
    Icon: PlusCircleIcon
  },
  {
    id: 3,
    text: 'Calendar',
    slug: 'calendar',
    path: routes.calendar,
    Icon: CalendarAltIcon
  }
];
