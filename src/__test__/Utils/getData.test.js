import { getData } from '../../utils/getData';

describe('Should fetch API', () => {
  test('Test API', (done) => {
   const data =  [getData('https://shrouded-thicket-27001.herokuapp.com/').then((data) => {
      expect(data).toBe([]);
      done()
    })]
    
    expect(data.length).toEqual(1);
  });

   
});
/* -> test('Should return error', (done) => {
      getData('https://shrouded-thicket-27001.herokuapp.com/').then((res) => {
        expect(res.data).toEqual('12345');
        done();
      });

   }); <- */