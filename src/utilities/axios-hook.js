//참고 소스 : https://gist.github.com/ulises-jeremias/a27b85e3eea083278188f24de955989b
import axios from 'axios';
import { useRecoilState } from "recoil";
import { useState, useEffect } from 'react';
import { authState } from "../store/web2";

/**
 * Returns an authorizated axios instance
 *
 * @param {Object} config is the default config to be sent to the axios creator
 *
 * @return {Object} an object containing the axios instance and the initialized prop
 *
 */

export const useAxios = (config = {}) => {
  const [token, setToken] = useRecoilState(authState);

  const [initialized, setInitialized] = useState(false);
  const [axiosInstance, setAxiosInstance] = useState({});

  useEffect(() => {
    const instance = axios.create({
      ...config,
      headers: {
        ...(config.headers || {}),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });

    setAxiosInstance({ instance });
    setInitialized(true);

    return () => {
      setAxiosInstance({});
      setInitialized(false);
    };
  }, [token]);

  return { axios: axiosInstance.instance, initialized };
};

export default { useAxios };