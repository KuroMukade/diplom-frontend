import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

export function getAccessTokenFromStorage() {
  const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  if (!userData) {
    return null;
  }
  const parsedData = JSON.parse(userData);
  const { accessToken } = parsedData;
  return accessToken;
}
