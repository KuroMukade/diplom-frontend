import { getUserAuthData } from 'entities/User';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export interface RequireAuthProps {
    children: JSX.Element;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  console.log(auth);
  return children;
};
