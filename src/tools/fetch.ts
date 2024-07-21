import { queryStringify } from '../utils/fetchUtils';

export enum REST_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Methods = keyof typeof REST_METHODS;

export type Options = {
  method: Methods;
  data?: any;
  headers?: Record<string, string>;
  responseType?: 'json' | 'text' | 'document' | 'blob' | 'arraybuffer';
};

export type OptionsWithoutMethod = Omit<Options, 'method'>;

export type FetchResponse = {
  status: number;
  ok: boolean;
  data?: ArrayBuffer | Blob | Document | JSON | string;
};

export class Fetch {
  options: Options;

  constructor(options: Options = { method: REST_METHODS.GET }) {
    this.options = options;
  }

  get(url: string, options: OptionsWithoutMethod = {}): Promise<FetchResponse> {
    let queries = '';
    if (options.data) {
      queries = queryStringify(options.data);
    }
    return this.request(url + queries, { ...options, method: REST_METHODS.GET });
  }

  post(url: string, options: OptionsWithoutMethod = {}): Promise<FetchResponse> {
    return this.request(url, { ...options, method: REST_METHODS.POST });
  }

  put(url: string, options: OptionsWithoutMethod = {}): Promise<FetchResponse> {
    return this.request(url, { ...options, method: REST_METHODS.PUT });
  }

  patch(url: string, options: OptionsWithoutMethod = {}): Promise<FetchResponse> {
    return this.request(url, { ...options, method: REST_METHODS.PATCH });
  }

  delete(url: string, options: OptionsWithoutMethod = {}): Promise<FetchResponse> {
    return this.request(url, { ...options, method: REST_METHODS.DELETE });
  }

  request(url: string, options: Options = { method: REST_METHODS.GET }): Promise<FetchResponse> {
    this.options = { ...this.options };
    return new Promise((resolve, reject) => {
      const {
        method, data, headers, responseType = 'json',
      } = options;

      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.responseType = responseType;

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }

      xhr.onload = () => {
        resolve({
          status: xhr.status,
          ok: xhr.status >= 200 && xhr.status < 300,
          data: xhr.response,
        });
      };

      const handleError = (err: ProgressEvent) => {
        reject(err);
      };

      xhr.onabort = handleError;
      xhr.onerror = handleError;
      xhr.ontimeout = handleError;

      if (method === REST_METHODS.GET || data === undefined) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
