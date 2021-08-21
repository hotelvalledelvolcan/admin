import { fetchUtils, DataProvider } from "react-admin";
import { stringify } from "query-string";

const apiUrl = "https://localhost:44316/api/v1/hotelvalledelvolcan-module";
const httpClient = fetchUtils.fetchJson;

class BasicDataProvider implements DataProvider {
  getList(resource: string, params: any) {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.result,
      total: parseInt(
        headers.get("content-range")?.split("/")?.pop()?.toString() ?? "10",
        10
      ),
    }));
  }

  getOne(resource: string, params: any) {
    return httpClient(`${apiUrl}/${resource}/${params.id}`).then(
      ({ json }) => ({
        data: json.result,
      })
    );
  }

  getMany(resource: string, params: any) {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json.result }));
  }

  getManyReference(resource: string, params: any) {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.result,
      total: parseInt(
        headers.get("content-range")?.split("/")?.pop()?.toString() ?? "10",
        10
      ),
    }));
  }

  update(resource: string, params: any) {
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json.result }));
  }

  updateMany(resource: string, params: any) {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json.result }));
  }

  create(resource: string, params: any) {
    return httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data.result, id: json.result.id },
    }));
  }

  delete(resource: string, params: any) {
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  }

  deleteMany(resource: string, params: any) {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  }
}

export default BasicDataProvider;
// (): DataProvider => ({
//   apiUrl,
//   getList: (resource: string, params: any) => {
//     const { page, perPage } = params.pagination;
//     const { field, order } = params.sort;
//     const query = {
//       sort: JSON.stringify([field, order]),
//       range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//       filter: JSON.stringify(params.filter),
//     };
//     const url = `${apiUrl}/${resource}?${stringify(query)}`;

//     return httpClient(url).then(({ headers, json }) => ({
//       data: json.result,
//       total: parseInt(
//         headers.get("content-range")?.split("/")?.pop()?.toString() ?? "10",
//         10
//       ),
//     }));
//   },

//   getOne: (resource: string, params: any) =>
//     httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
//       data: json.result,
//     })),

//   getMany: (resource: string, params: any) => {
//     const query = {
//       filter: JSON.stringify({ id: params.ids }),
//     };
//     const url = `${apiUrl}/${resource}?${stringify(query)}`;
//     return httpClient(url).then(({ json }) => ({ data: json.result }));
//   },

//   getManyReference: (resource: string, params: any) => {
//     const { page, perPage } = params.pagination;
//     const { field, order } = params.sort;
//     const query = {
//       sort: JSON.stringify([field, order]),
//       range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//       filter: JSON.stringify({
//         ...params.filter,
//         [params.target]: params.id,
//       }),
//     };
//     const url = `${apiUrl}/${resource}?${stringify(query)}`;

//     return httpClient(url).then(({ headers, json }) => ({
//       data: json.result,
//       total: parseInt(
//         headers.get("content-range")?.split("/")?.pop()?.toString() ?? "10",
//         10
//       ),
//     }));
//   },

//   update: (resource: string, params: any) =>
//     httpClient(`${apiUrl}/${resource}/${params.id}`, {
//       method: "PUT",
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({ data: json.result })),

//   updateMany: (resource: string, params: any) => {
//     const query = {
//       filter: JSON.stringify({ id: params.ids }),
//     };
//     return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
//       method: "PUT",
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({ data: json.result }));
//   },

//   create: (resource: string, params: any) =>
//     httpClient(`${apiUrl}/${resource}`, {
//       method: "POST",
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({
//       data: { ...params.data.result, id: json.result.id },
//     })),

//   delete: (resource: string, params: any) =>
//     httpClient(`${apiUrl}/${resource}/${params.id}`, {
//       method: "DELETE",
//     }).then(({ json }) => ({ data: json })),

//   deleteMany: (resource: string, params: any) => {
//     const query = {
//       filter: JSON.stringify({ id: params.ids }),
//     };
//     return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
//       method: "DELETE",
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({ data: json }));
//   },
// });
