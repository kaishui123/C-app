import axios from 'axios';
import baseURL, {
  URLS,
} from './URLS';

const appkey = 'kaishui_1622427561036';
const request = axios.create({
  baseURL,
  params: {
    appkey,
  },
});
request.interceptors.response.use((value) => value.data);

const getSideList = (type) => request.get(
  URLS.getSide, {
    params: {
      type,
    },
  },
);

const getGoodsList = (type, page, size, sort) => request.get(
  URLS.getGoodsList, {
    params: {
      type,
      page,
      size,
      sort,
    },
  },
);
export default {
  getSideList,
  getGoodsList,
};
