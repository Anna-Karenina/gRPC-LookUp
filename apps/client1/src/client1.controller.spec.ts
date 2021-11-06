import { Test, TestingModule } from '@nestjs/testing';
import { Client1Controller } from './client1.controller';
import { Client1Service } from './client1.service';

describe('Client1Controller', () => {
  let client1Controller: Client1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Client1Controller],
      providers: [Client1Service],
    }).compile();

    client1Controller = app.get<Client1Controller>(Client1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(client1Controller.getHello()).toBe('Hello World!');
    });
  });
});
