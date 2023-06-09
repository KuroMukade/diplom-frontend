import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { getAccessTokenFromStorage } from 'shared/lib/localstorage/getAccessToken';

interface RefreshQueryReponse {
  accessToken: string;
}

export const refreshAccessToken = async () => {
  const refreshData = await axios.get<RefreshQueryReponse>(`${__API__}/refresh`, {
    withCredentials: true,
  });

  let prevData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  prevData = JSON.parse(prevData!);
  prevData.accessToken = refreshData.data.accessToken;
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(prevData));

  return {
    accessToken: refreshData.data.accessToken,
  };
};

export const $api = axios.create({
  baseURL: __API__,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${getAccessTokenFromStorage()}` || '',
    'Access-Control-Origin': 'http://localhost:5000',
    'Access-Control-Allow-Credentials': true,
  },
});

$api.interceptors.request.use(
  async (config) => {
    const token = getAccessTokenFromStorage();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

$api.interceptors.response.use((response) => response, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const token = await refreshAccessToken();
    axios.defaults.headers.common.Authorization = `Bearer ${token.accessToken}`;
    return $api(originalRequest);
  }
  return Promise.reject(error);
});
