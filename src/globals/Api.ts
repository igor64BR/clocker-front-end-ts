import { Storager } from "./StorageManager";
import { toastEmitter } from "../component/Shared/Toaster";

interface ResponseData { 
  data?: any, 
  errors?: string[] 
}

export class Api {
  static apiUrl: string = "https://localhost:44379/";

  private static getApiUrl = (endpoint: string) => this.apiUrl + endpoint;

  static get = (
    endpoint: string, 
    setData: (data: any) => void, 
    setIsLoading?: (isLoading: boolean) => void
  ) => this.sendRequest("GET", endpoint, null, setData, setIsLoading);

  static post = (
    endpoint: string, 
    body: any,
    setData: (data: any) => void, 
    setIsLoading?: (isLoading: boolean) => void
  ) => this.sendRequest("POST", endpoint, body, setData, setIsLoading);

  static put = (
    endpoint: string, 
    body: any, 
    setData: (data: any) => void, 
    setIsLoading?: (isLoading: boolean) => void
  ) => this.sendRequest("PUT", endpoint, body, setData, setIsLoading);

  static delete = (
    endpoint: string, 
    body: any, 
    setData: (data: any) => void, 
    setIsLoading?: (isLoading: boolean) => void
  ) => this.sendRequest("DELETE", endpoint, body, setData, setIsLoading);

  static sendRequest(
    method: string, 
    endpoint: string, 
    body: any | null,
    setData: (data: ResponseData) => void, 
    setIsLoading?: (isLoading: boolean) => void
  ) {
    const token = Storager.token.get();

    if (setIsLoading)
      setIsLoading(true);

    fetch(
      this.getApiUrl(endpoint), 
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: token
            ? `Bearer ${token}`
            : null,
        } as HeadersInit,
        body: body ? JSON.stringify(body) : null,
      })
      .then((response: any) => {
        if (response.ok) return response.json();
        throw new Error(response.errors);
      })
      .then((data: ResponseData) => setData(data.data))
      .catch((errors) => {
        if (errors instanceof TypeError) toastEmitter.error("Ocorreu um erro inesperado");
      })
      .finally(() => setIsLoading && setIsLoading(false));
  }
}
