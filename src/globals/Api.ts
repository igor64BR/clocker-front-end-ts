import { Storager } from './StorageManager';
import { toastEmitter } from '../sharedComponents/Toaster';
import translate from './Translate';

interface ResponseData {
  data?: any;
  errors?: string[];
}

const apiUrl: string = 'https://localhost:44379/';

export const Api = {
  apiUrl,
  get,
  post,
  put,
  del,
};

const getApiUrl = (endpoint: string) => apiUrl + endpoint;

async function get(
  endpoint: string,
  setData: (data: any) => void,
  setIsLoading?: (isLoading: boolean) => void,
  params?: any,
) {
  await sendRequest('GET', endpoint, null, setData, setIsLoading, params);
}

async function post(
  endpoint: string,
  body: any,
  setData: (data: any) => void,
  setIsLoading?: (isLoading: boolean) => void,
) {
  await sendRequest('POST', endpoint, body, setData, setIsLoading);
}

async function put(
  endpoint: string,
  body: any,
  setData: (data: any) => void,
  setIsLoading?: (isLoading: boolean) => void,
) {
  await sendRequest('PUT', endpoint, body, setData, setIsLoading);
}

async function del(
  endpoint: string,
  body: any,
  setData: (data: any) => void,
  setIsLoading?: (isLoading: boolean) => void,
) {
  await sendRequest('DELETE', endpoint, body, setData, setIsLoading);
}

async function sendRequest(
  method: string,
  endpoint: string,
  body: any | null,
  setData: (data: ResponseData) => void,
  setIsLoading?: (isLoading: boolean) => void,
  params?: any,
) {
  const token = Storager.token.get();

  setIsLoading?.(true);

  if (params) {
    const filterParams = new URLSearchParams(params);
    const queryString = filterParams.toString();
    endpoint += '?' + queryString;
  }

  try {
    const response = await fetch(getApiUrl(endpoint), {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (response.status === 403) {
      toastEmitter.error('Você não possui permissão para essa ação');
    } else if (response.status === 401) {
      window.location.href = '/login';
    } else {
      const data: ResponseData = await response.json();

      if (response.ok) setData(data.data);
      else data.errors?.forEach(async (error) => toastEmitter.error(await translate(error)));
    }
  } catch (errors) {
    toastEmitter.error('Ocorreu um erro inesperado');
  }

  setIsLoading?.(false);
}
