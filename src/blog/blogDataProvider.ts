import BasicDataProvider from "../dataProvider/basicDataProvider";
import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const httpClient = fetchUtils.fetchJson;

function validURL(str: string) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}
class BlogDataProvider extends BasicDataProvider {
  create(resource: string, params: any) {
    const newImage = params.data.image.rawFile;

    var form_data = new FormData();
    form_data.append("file", newImage);

    if (newImage) {
      return fetch(`${super.getApiUrl()}/images`, {
        method: "post",
        body: form_data,
      })
        .then((response) => response.json())
        .then((image) => {
          params.data.image = image.result;
          return super.create(resource, params);
        });
    } else {
      return super.create(resource, params);
    }
  }


  update(resource: string, params: any) {
    const newImage = params.data.image.rawFile;

    var form_data = new FormData();
    form_data.append("file", newImage);

    if (newImage) {
      return fetch(`${super.getApiUrl()}/images`, {
        method: "post",
        body: form_data,
      })
        .then((response) => response.json())
        .then((image) => {
          params.data.image = image.result;
          return super.update(resource, params);
        });
    } else {
      return super.update(resource, params);
    }
  }
}

export default BlogDataProvider;
