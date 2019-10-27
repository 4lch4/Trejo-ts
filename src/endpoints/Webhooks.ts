import BaseEndpoint from './BaseEndpoint';

export default class Webhooks extends BaseEndpoint {
  async getWebhook (id: string): Promise<Webhook | { data: Webhook, headers: Object }> {
    return this.performRequest('GET', `/webhooks/${id}`)
  }

  async getWebhookField (id: string, field: string): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('GET', `/webhooks/${id}/${field}`)
  }

  async updateWebhook (id: string, webhook: Webhook): Promise<Webhook | { data: Webhook, headers: Object }> {
    return this.performRequest('PUT', `/webhooks/${id}`, webhook)
  }

  async createWebhook (webhook: Webhook): Promise<Webhook | { data: Webhook, headers: Object }> {
    return this.performRequest('POST', `/webhooks/`, webhook)
  }

  async deleteWebhook (id: string): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('DELETE', `/webhooks/${id}`)
  }
}

declare interface Webhook {
  /** The ID of the webhook. */
  id: string;

  /** Description provided when creating webhook. */
  description: string;

  /** 
   * ID of the Trello object the webhook is watching. This can be any Trello
   * object ID (`list`, `board`, `card`, `member`, `etc`.).
   */
  idModel: string;

  /** The URL that the webhook will `POST` information to. */
  callbackURL: string;

  /** Determines whether the webhook is active or not. */
  active: boolean;
}
