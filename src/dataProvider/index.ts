import BlogDataProvider from "../blog/blogDataProvider";
import BasicDataProvider from "./basicDataProvider";
import { DataProvider } from "react-admin";

class CompositeDataProvider implements DataProvider {

  _delegate(name: string, resource: string, params: any) {
    let dataProvider: DataProvider;

    switch (resource) {
      case "blog":
        dataProvider = new BlogDataProvider();
        break;

      default:
        dataProvider = new BasicDataProvider();
        break;
    }

    return dataProvider[name](resource, params);
  }

  getList(resource: string, params: any) {
    return this._delegate("getList", resource, params);
  }
  getOne(resource: string, params: any) {
    return this._delegate("getOne", resource, params);
  }
  getMany(resource: string, params: any) {
    return this._delegate("getMany", resource, params);
  }
  getManyReference(resource: string, params: any) {
    return this._delegate("getManyReference", resource, params);
  }
  create(resource: string, params: any) {
    return this._delegate("create", resource, params);
  }
  update(resource: string, params: any) {
    return this._delegate("update", resource, params);
  }
  updateMany(resource: string, params: any) {
    return this._delegate("updateMany", resource, params);
  }
  delete(resource: string, params: any) {
    return this._delegate("delete", resource, params);
  }
  deleteMany(resource: string, params: any) {
    return this._delegate("deleteMany", resource, params);
  }
}

export default CompositeDataProvider;
