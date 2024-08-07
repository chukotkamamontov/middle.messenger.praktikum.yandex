import { queryStringify, QueryStringifyParams } from '../utils/fetchUtils';

enum METHODS {
  DELETE = 'DELETE',
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
}

type Options = {
  data?: QueryStringifyParams | FormData;
  method: string;
  headers?: Record<string, string>;
  body?: string;
  timeout?: number;
};

type HTTPMethod = <T = unknown>(url: string, options?: Partial<Options>) => Promise<T>;

export class Fetch {
  protected BASE_URL = 'https://ya-praktikum.tech/api/v2';

  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${this.BASE_URL}${endpoint}`;
  }

  get: HTTPMethod = (url, options = {}) => this.request(
    this.endpoint + url,
    {
      ...options,
      method: METHODS.GET,
    },
    options.timeout,
  );

  post: HTTPMethod = (url, options = {}) => this.request(
    this.endpoint + url,
    {
      ...options,
      method: METHODS.POST,
    },
    options.timeout,
  );

  put: HTTPMethod = (url, options = {}) => this.request(
    this.endpoint + url,
    {
      ...options,
      method: METHODS.PUT,
    },
    options.timeout,
  );

  delete: HTTPMethod = (url, options = {}) => this.request(
    this.endpoint + url,
    {
      ...options,
      method: METHODS.DELETE,
    },
    options.timeout,
  );

  request<Response>(url: string, options: Options, timeout: number = 5000): Promise<Response> {
    const { data, headers = {}, method } = options;
    console.log('[request]: ', data);
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;
      let requestUrl = url;
      if (!(data instanceof FormData)) {
        requestUrl = isGet && !!data ? `${url}${queryStringify(data)}` : url;
      }

      xhr.open(method, requestUrl);

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data instanceof FormData ? data : JSON.stringify(data));
      }
    });
  }
}
