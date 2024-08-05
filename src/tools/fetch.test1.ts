import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { Fetch } from './fetch';

describe('Fetch', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let requests: SinonFakeXMLHttpRequest[];
  let instance: Fetch;

  beforeEach(() => {
    requests = [];
    xhr = sinon.useFakeXMLHttpRequest();
    global.XMLHttpRequest = xhr as any;
    xhr.onCreate = (req: SinonFakeXMLHttpRequest) => {
      requests.push(req);
    };
    instance = new Fetch('');
  });

  afterEach(() => {
    xhr.restore();
  });

  it('should handle errors correctly', (done) => {
    const url = '/error';
    instance.get(url).catch((error) => {
      /* eslint-disable no-unused-expressions */
      expect(error).to.exist;
      done();
    });

    requests[0].respond(500, { 'Content-Type': 'application/json' }, JSON.stringify({ error: 'Internal Server Error' }));
  });
});
