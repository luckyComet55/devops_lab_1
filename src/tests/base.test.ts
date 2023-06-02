import {
  baseHandler,
  notFound,
  internalErr,
} from '../routes';

test('Home okay', () => {
  const req = {};
  const res = { send: jest.fn(), status: jest.fn(), type: jest.fn() };
  // @ts-ignore
  baseHandler(req, res);
  expect(res.send.mock.calls[0][0]).toEqual(expect.objectContaining({
    msg: expect.stringMatching(/\W/)
  }));
})

test('404 test', () => {
  const req = {};
  const res = { send: jest.fn(), status: jest.fn(), type: jest.fn() };
  // @ts-ignore
  notFound(req, res);
  expect(res.send.mock.calls.length).toBe(1);
  expect(res.send.mock.calls[0][0]).toBe('404 - Not Found');
})

test('500 test', () => {
  const err = new Error('Plain');
  const req = {};
  const res = { send: jest.fn(), status: jest.fn(), type: jest.fn() };
  const next = jest.fn();
  // @ts-ignore
  internalErr(err, req, res, next);
  expect(res.send.mock.calls.length).toBe(1);
  expect(res.send.mock.calls[0][0]).toBe('500 - Unresolved Exception');
})