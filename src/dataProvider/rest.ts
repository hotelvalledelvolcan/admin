import simpleRestProvider from 'ra-data-simple-rest';

const restProvider = simpleRestProvider('https://localhost:44316/api/v1/hotelvalledelvolcan-module');

const delayedDataProvider = new Proxy(restProvider, {
    get: (target, name, self) =>
        name === 'then' // as we await for the dataProvider, JS calls then on it. We must trap that call or else the dataProvider will be called with the then method
            ? self
            : (resource: string, params: any) =>
                  new Promise(resolve =>
                      setTimeout(
                          () =>
                              resolve(
                                  restProvider[name as string](resource, params)
                              ),
                          500
                      )
                  ),
});

export default restProvider;
