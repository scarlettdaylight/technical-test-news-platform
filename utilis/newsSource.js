import axios from 'axios';
import get from 'lodash/get';
import { DEFAULT_ITEM_PER_PAGE, API_ENDPOINT_NEWS } from './constants';

export const dummayNewsItem = {
  author: 'The Washington Post',
  title: 'Gracia leaves Watford; 1st EPL manager dismissed this season',
  desc: 'Watford has fired manager Javi Gracia less than four months after leading the club into the FA Cup final',
  url: 'The Washington Post',
  publishedAt: '2019-09-07T16:49:22Z',
  sourceName: 'The Washington Post',
  coverImage: 'https://www.washingtonpost.com/resizer/2CjPNwqvXHPS_2RpuRTKY-p3eVo=/1484x0/www.washingtonpost.com/pb/resources/img/twp-social-share.png',
};

const transformNewsItem = (article) => ({
  author: article.author,
  title: article.title,
  desc: article.description,
  url: article.url,
  publishedAt: new Date(article.publishedAt).toLocaleDateString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
  sourceName: get(article, 'source.name'),
  coverImage: article.urlToImage,
});


const api = axios.create({
  timeout: 10000,
});

export const getNewsAtPage = async ({ page, NumOfItem = DEFAULT_ITEM_PER_PAGE }) => {
  try {
    const response = await api.get(API_ENDPOINT_NEWS, {
      params: {
        page,
        pageSize: NumOfItem,
      },
    });

    if (response.data.status !== 'ok') {
      console.error(response.data.message);
      return [];
    }

    return get(response, 'data.articles', []).map(transformNewsItem);
  } catch (error) {
    console.error(error);
    return [];
  }
};
