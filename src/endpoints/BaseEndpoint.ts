import axios from 'axios';
import { Options } from '../utils/shared';

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
  constructor(opts: Options) {
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
  async performRequest(method: 'get' | 'GET' | 'put' | 'PUT' | 'post' | 'POST' | 'delete' | 'DELETE', endpoint: string, queryParams?: Object) {
    if (queryParams) var requestUrl = appendQueryParams(`${this.baseUrl}${endpoint}`, this.mergeObjects({ key: this.apiKey, token: this.apiToken }, queryParams))
    else requestUrl = appendQueryParams(`${this.baseUrl}${endpoint}`, { key: this.apiKey, token: this.apiToken })

    const res = await axios({
      url: encodeURI(requestUrl),
      headers: this.headers,
      method: method
    })

    if (this.includeHeaders) {
      return {
        data: res.data,
        headers: res.headers
      }
    } else return res.data;
  }

  /**
   * Merges the key/value pairs of the two provided Objects. If any keys have
   * the same name, the value from the 2nd Object is used over the 1st, so keep
   * this in mind.
   * 
   * @param {Object} objA The first Object to merge.
   * @param {Object} objB The second/primary Object to merge.
   */
  mergeObjects(objA: Object, objB: Object) {
    return { ...objA, ...objB }
  }
}


/**
 *
 * @param {string} url The URL to append the parameters to.
 * @param {Object<string, string>} queryParams A string array containing the parameters to add.
 */
const appendQueryParams = (url: string, queryParams: Object) => {
  let ending = []

  for (const property in queryParams) {
    ending.push(`${property}=${queryParams[property].replace(',', '%2C')}`)
  }

  if (url.includes('?')) return `${url}&${ending.join('&')}`
  else return `${url}?${ending.join('&')}`
}