import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Test API', () => {
    fetch.mockResponseOnce(JSON.stringify({ 'name': 'EMRG', 'profession': 'FrontEnd Developer', 'address': 'Bogotá, Colombia' }));

    getData('http://localhost:3000/data').then((data) => {
      expect(data.name).toEqual('EMRG');
    })
      .catch(err => console.log(err));

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/data');
  });
});
