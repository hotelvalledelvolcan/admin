import BasicDataProvider from "../dataProvider/basicDataProvider";
import { fetchUtils } from "react-admin";

const httpClient = fetchUtils.fetchJson;

class SeasonDataProvider extends BasicDataProvider {
  getList(resource: string, params: any) {
    return super
      .getList(resource, params)
      .then((result) => ({ data: [result.data], total: 1 }));
  }

  getOne(resource: string, params: any) {
    return httpClient(`${super.getApiUrl()}/${resource}`).then(
      ({ json }) => ({
        data: json.result,
      })
    );
  }
}

export default SeasonDataProvider;
