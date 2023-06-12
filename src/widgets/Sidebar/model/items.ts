import { RoutePath } from 'shared/config/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    icon?: string;
    authOnly: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    authOnly: false,
  },
  {
    path: RoutePath.about,
    text: 'О нас',
    authOnly: false,
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    authOnly: true,
  },
  {
    path: RoutePath.todo,
    text: 'Списки задач',
    authOnly: true,
  },
];
