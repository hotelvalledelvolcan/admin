import BasicDataProvider from "../dataProvider/basicDataProvider";
import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const httpClient = fetchUtils.fetchJson;

class BlogDataProvider extends BasicDataProvider {
  getList(resource: string, params: any) {
    return super.getList(resource, params).then((result) => ({
      data: result.data.articles,
      total: result.data.articles.length,
    }));
  }
}

export default BlogDataProvider;
