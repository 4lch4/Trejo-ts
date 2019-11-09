import { Board, Card, List, Member, Notification, NotificationFields, Notification_QUERY, Organization } from "../utils/shared";
import BaseEndpoint from "./BaseEndpoint";

export default class Notifications extends BaseEndpoint {
  async getNotification(id: string, queryParams: Notification_QUERY): Promise<Notification | { data: Notification, headers: Object }> {
    return this.performRequest('GET', `/notifications/${id}`, queryParams)
  }

  async getNotificationField(id: string, field: string, queryParams: Object): Promise<NotificationFields | { data: NotificationFields, headers: Object }> {
    return this.performRequest('GET', `/notifications/${id}/${field}`, queryParams);
  }

  async getNotificationBoard(id: string, queryParams: Object): Promise<Board | { data: Board, headers: Object }> {
    return this.performRequest('GET', `/notifications/${id}/board`, queryParams);
  }

  async getNotificationCard(id: string, queryParams: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('GET', `/notifications/${id}/card`, queryParams);
  }

  async getNotificationList(id: string, queryParams: Object): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('GET', `/notifications/${id}/list`, queryParams);
  }

  async getNotificationMember(id: string, queryParams: Object): Promise<Member | { data: Member, headers: Object }> {
    return this.performRequest('GET', `/notifications/${id}/member`, queryParams);
  }

  async getNotificationMemberCreator(id: string, queryParams: Object): Promise<Member | { data: Member, headers: Object }> {
    return this.performRequest('GET', `/notifications/${id}/memberCreator`, queryParams);
  }

  async getNotificationOrganization(id: string, queryParams: Object): Promise<Organization | { data: Organization, headers: Object }> {
    return this.performRequest('GET', `/notifications/${id}/organization`, queryParams);
  }

  async updateNotification(id: string, unread: boolean, queryParams: Object): Promise<Notification | { data: Notification, headers: Object }> {
    return this.performRequest('PUT', `/notifications/${id}`, { unread: unread, ...queryParams });
  }

  async markAllRead(queryParams: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('POST', `/noifications/all/read`, queryParams);
  }
}