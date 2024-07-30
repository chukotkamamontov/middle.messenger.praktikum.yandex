import { Fetch } from '../tools/fetch';

export abstract class BaseAPI {
  protected http: Fetch;

  protected constructor(endpoint: string) {
    this.http = new Fetch(endpoint);
  }
}
