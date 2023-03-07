import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Test API', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('http://localhost:3000/data').then((res) => {
      expect(res.data).toEqual('12345');
    });
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/data');
  });
});
