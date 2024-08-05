// Mocha: Используется для организации тестов, с использованием таких функций, как describe, beforeEach, и afterEach.
// Sinon: Используется для создания поддельных объектов XMLHttpRequest, чтобы тесты могли проверять HTTP-запросы, отправляемые классом Fetch, без фактической отправки этих запросов.
// Chai: Используется для создания утверждений (assertions) в тестах, таких как expect.

import { afterEach, beforeEach, describe } from 'mocha';
import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { expect } from 'chai';
import { Fetch } from './fetch';

// Главный блок описания тестов для класса Fetch.
describe('HTTP Transport test', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: Fetch;
  const requests: SinonFakeXMLHttpRequest[] = [];

  // Устанавливает поддельный XMLHttpRequest с использованием sinon.useFakeXMLHttpRequest(). 
  // Это позволяет перехватывать все HTTP-запросы, создаваемые в тестах, и сохранять их в массиве requests.
  beforeEach(() => {
    // Stub (заглушка). Эта заглушка используется для перехвата и имитации HTTP-запросов.
    xhr = sinon.useFakeXMLHttpRequest();

    global.XMLHttpRequest = xhr as any;
    // Метод xhr.onCreate также является заглушкой, которая позволяет перехватывать создаваемые запросы и добавлять их в массив requests.
    xhr.onCreate = (req) => {
      // Spy (шпион): массив requests используется для отслеживания вызовов HTTP-запросов, 
      // что в некотором смысле можно рассматривать как шпионаж за вызовами методов отправки запросов (например, get, post, put, delete).
      requests.push(req);
    };

    instance = new Fetch('');
  });

  // Очищает массив requests и восстанавливает оригинальный XMLHttpRequest, который был заменен на поддельный в beforeEach.
  afterEach(() => {
    requests.length = 0;
    xhr.restore();
  });

  // Тесты на валидность данных HTTP-транспорта:
  // Проверяют, что передаваемые данные (запросы, параметры и тело запросов) корректно формируются и отправляются.
  describe('HTTP Transport data validity', () => {
    it('should invoke GET method with correct query params', () => {
      const url = '/chats';
      const params = {
        limit: 50,
      };
      instance.get(`${url}`, { data: params });
      const [request] = requests;
      expect(request.url).to.include(`${url}?limit=50`);
    });

    it('should invoke POST method with correct data', () => {
      const url = '/auth/signup';
      const data = {
        login: 'test',
        password: '123456qwerty',
      };
      instance.post(`${url}`, { data });
      const [request] = requests;
      expect(request.requestBody).to.equal(JSON.stringify(data));
    });

    it('should invoke PUT method with correct data', () => {
      const url = '/chats/users';
      const data = {
        users: [123],
        chatId: 123,
      };
      instance.put(`${url}`, { data });
      const [request] = requests;
      expect(request.requestBody).to.equal(JSON.stringify(data));
    });

    it('should invoke DELETE method with correct data', () => {
      const url = '/chats';
      const data = {
        chatId: 123,
      };
      instance.delete(`${url}`, { data });
      const [request] = requests;
      expect(request.requestBody).to.equal(JSON.stringify(data));
    });
  });
});
