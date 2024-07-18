import { fetch } from '../tools/fetch';

export abstract class BaseAPI {
  protected http: fetch;

  protected constructor(endpoint: string) {
    this.http = new fetch(endpoint);
  }
}
