import axios from 'axios';

export default class BaseEndpoint {
  headers = { 'Content-Type': 'application/json' }
  baseUrl = 'https://api.trello.com/1'
  includeHeaders = false;
  apiToken: string;
  apiKey: string;

	/**
   * The default constructor for Trejo. Accepts an **Options** object which
   * should contain the various required properties and any of the optional
   * properties for interacting with the Trello API.
   * 
   * @param opts The options to use when instantiating the library.
   */
  constructor (opts: BaseOptions) {
    if (opts.apiKey) this.apiKey = opts.apiKey;
    else throw new Error('You must provide an API key to use this library.');

    if (opts.apiToken) this.apiToken = opts.apiToken;
    else throw new Error('You must provide an API token/secret to use this library.');

    if (opts.includeHeaders) this.includeHeaders = opts.includeHeaders;
    if (opts.headers) this.headers = { ...this.headers, ...opts.headers };
    if (opts.baseUrl) this.baseUrl = opts.baseUrl;
  }

  /**
   * Performs a request against the Trello API using the provided parameters.
   * 
   * @param method The request method to perform (**GET**, **POST**, etc.)
   * @param endpoint The API endpoint you wish to hit.
   * @param payload The optional payload to deliver to the API.
   */
  async performRequest (method: 'get' | 'GET' | 'put' | 'PUT' | 'post' | 'POST' | 'delete' | 'DELETE', endpoint: string, queryParams?: Object) {
    const res = await axios({
      url: `${this.baseUrl}/${endpoint}`,
      params: queryParams,
      headers: this.headers,
      method: method
    });

    if (this.includeHeaders) {
      return {
        data: res.data,
        headers: res.headers
      }
    } else return res.data;
  }
}

export declare class BaseOptions {
  /** The authentication key used to identify your app. */
  apiKey: string;

  /** The authentication token used to authenticate each of your requests. */
  apiToken: string;

  /**
   * The base URL to use for every request sent to the Trello API. By default
   * Trejo uses `https://api.trello.com/1` as the baseUrl parameter. 
   * 
   * Any URL that you provide should **NOT** end in a slash, this is because all
   * of the methods made available by the library add a slash at the beginning
   * of their requests so by ending your URL with one, you'll end up with
   * double-slashes.
   */
  baseUrl?: string;

  /**
   * By default, Trejo will send at least one header with the key/value pair of
   * `{ 'Content-Type' = 'application/json' }`. If you wish to override this or
   * provide additional properties such as CORS settings provide the key/value
   * pairs as an object and they'll be merged w/ the existing headers object.
   * 
   * *NOTE: If you provide a key with the same value as the one above, you will*
   * *overwrite it. Specifically useful if you want something other than JSON*
   * *returned by the API.*
   */
  headers?: Object;

  /**
   * Determines whether or not you would like the headers returned from the API
   * to also be returned with every method/call you execute. By default, this is
   * set to false, so you will only receive the request object(s). However, if
   * you need the values of the headers for whatever reason, setting this to
   * true will have every return object look like the example. Where data is the
   * value you requested, and headers (obviously) contains the headers returned.
   * 
   * @example { data: Object, headers: Object }
   */
  includeHeaders?: boolean;
}
