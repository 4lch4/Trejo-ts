import BaseEndpoint from "./BaseEndpoint";


export default class Plugins extends BaseEndpoint {
  async getPlugin(id: string, queryParams?: Object): Promise<Plugin | { data: Plugin, headers: Object }> {
    return this.performRequest('GET', `/plugins/${id}`, queryParams);
  }

  async createNewListing (bodyParams: Plugin_CREATE, id: string): Promise<Object | { data: Object, headers: Object }> {
    return this.performBodyRequest('POST', `/plugins/${id}/listing`, bodyParams);
  }

  async updateExistingListing(pluginId: string, listingId: string, bodyParams: Plugin_CREATE): Promise<Plugin | { data: Plugin, headers: Object }> {
    return this.performBodyRequest('PUT', `/plugins/${pluginId}/listings/${listingId}`, bodyParams);
  }

  async updatePlugin(id: string, pluginData: Plugin): Promise<Plugin | { data: Plugin, headers: Object }> {
    return this.performRequest('PUT', `/plugins/${id}`, pluginData);
  }

  async getPluginCompliance(id: string, queryParams?: Object): Promise<Plugin | { data: Plugin, headers: Object }> {
    return this.performRequest('GET', `/plugins/${id}/compliance/memberPrivacy`, queryParams);
  }
}

export interface Plugin_CREATE {
  /** The description to show for the given locale. */
  description?: string;

  /** The locale that this listing should be displayed for. */
  locale?: string;

  /** The overview to show for the given locale. */
  overview?: string;

  /** The name to use for the given locale. */
  name?: string;
}
