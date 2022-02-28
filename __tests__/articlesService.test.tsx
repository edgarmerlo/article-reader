import { ArticlesService } from 'services/ArticlesService';
import axios from 'axios';

describe('Articles service', () => {
  it('should request the API', async () => {
    const spy = jest.spyOn(axios, 'get');
    const date = ArticlesService.getArticle();
    expect(spy).toBeCalled();
  });
})