import axios from 'axios';
import { articleUrl } from 'configs';

export class ArticlesService {
  static async getArticle(): Promise<any> {
    const article = await axios.get(articleUrl);
    return article.data.elements;
  }
}