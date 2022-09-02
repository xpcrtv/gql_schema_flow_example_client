import {
  ApolloClient,
  HttpLink,
  HttpOptions,
  InMemoryCache,
} from "@apollo/client";

const linkOptions: HttpOptions = {
  uri: import.meta.env.VITE_API_URL,
};

const isProd = import.meta.env.MODE === "production";
const isDev = import.meta.env.MODE === "development";

if (isDev) {
  const customFetch = (uri: string, options?: RequestInit) => {
    let queryUrlAddition = "";
    try {
      const { operationName } = JSON.parse(options?.body as string);
      queryUrlAddition = `?operation=${operationName}`;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("No valid json in body");
    }
    return fetch(`${uri}${queryUrlAddition}`, options);
  };

  linkOptions.fetch = customFetch;
}

const link = new HttpLink(linkOptions);

export const client = new ApolloClient({
  connectToDevTools: isProd,
  cache: new InMemoryCache(),
  link,
});
