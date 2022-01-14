// 참고 소스: https://gist.github.com/ulises-jeremias/a27b85e3eea083278188f24de955989b
import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

//import { commonNotification } from './common';
import { useAxios } from './axios-hook';
import { useErrorHandler } from './error-hook';

const API_BASE_URL = 'http://localhost:8080';
const REQUEST_TIMEOUT = 5000;

/**
 *
 * @param {Object} options request options
 * @param {String} options.url The request url
 * @param {String} options.method The request http method
 * @param {Object} requestParams.initialValue The response data initial value
 *
 * @see useAxios
 * @see axiosDefaultConfig
 * @see mapResponseToData
 *
 * @return {Object} return an object containing the data, isLoading and the request strategy.
 *
 */
export const useRequest = (options = {}, axiosConfig = {}) => {
  const [data, setData] = useState(options.initialValue);
  const [isLoading, setLoading] = useState(false);

  //const setNotification = useSetRecoilState(commonNotification);
  const { handleError } = useErrorHandler();
  const { axios, initialized: axiosInitialized } = useAxios({
    ...axiosDefaultConfig,
    ...axiosConfig,
  });

  const history = useHistory();

  /**
   * Specific request for options
   *
   * @param {Object} requestParams Request
   * @param {Object} requestParams.params The request query params
   * @param {Object} requestParams.data The request body data
   *
   */
  const request = (requestParams, callback = () => {}) => {
    if (!axiosInitialized) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios({ ...options, ...requestParams });
        const responseData = mapResponseToData(response);
        
        callback(response);
        setData(responseData);
        setLoading(false);
      } catch (err) {
        const [message, redirect] = handleError(err);

        setLoading(false);
        //setNotification({ message, isVisible: true });
        callback(err.response)

        if (redirect) {
          history.push(redirect);
        }
      }
    };

    fetchData();
  };

  const fetch = useCallback(request, [axiosInitialized]);

  return { isLoading, data, fetch };
};

/**
 * Request default config for axios creator
 *
 * @see API_BASE_URL
 * @see REQUEST_TIMEOUT
 */
const axiosDefaultConfig = {
  baseURL: API_BASE_URL,
  withCredentials: false,
  timeout: REQUEST_TIMEOUT,
};

/**
 * Maps axios response to data
 *
 * @param {Object} response
 *
 * @return {Object} the response data
 * @throws {Object} throws an object containing the axios response
 */
export const mapResponseToData = (response) => {
  const { data } = response;

  return data;
};

export default { useRequest };