import { Board, Member, Membership, Organization, OrganizationFields } from "../utils/shared";
import BaseEndpoint from "./BaseEndpoint";

export default class Organizations extends BaseEndpoint {
  async getOrganization(id: string, queryParams: Object): Promise<Organization | { data: Organization, headers: Object }> {
    return this.performRequest('GET', `/organizations/${id}`, queryParams);
  }

  async getOrganizationField(id: string, field: string, queryParams: Object): Promise<OrganizationFields | { data: OrganizationFields, headers: Object }> {
    return this.performRequest('GET', `/organizations/${id}/${field}`, queryParams);
  }

  async getOrganizationBoards(id: string, queryParams: Object): Promise<Board[] | { data: Board[], headers: Object }> {
    return this.performRequest('GET', `/organizations/${id}/boards`, queryParams);
  }

  async getOrganizationMembers(id: string, queryParams: Object): Promise<Member[] | { data: Member[], headers: Object }> {
    return this.performRequest('GET', `/organizations/${id}/members`, queryParams);
  }

  async getOrganizationMembersInvited(id: string, queryParams: Object): Promise<Member[] | { data: Member[], headers: Object }> {
    return this.performRequest('GET', `/organizations/${id}/membersInvited`, queryParams);
  }

  async getOrganizationMemberships(id: string, queryParams?: Object): Promise<Membership[] | { data: Membership[], headers: Object }> {
    return this.performRequest('GET', `/organizations/${id}/memberships`, queryParams);
  }

  async getOrganizationMembership(organizationId: string, membershipId: string, queryParams?: Object): Promise<Membership | { data: Membership, headers: Object }> {
    return this.performRequest('GET', `/organizations/${organizationId}/memberships/${membershipId}`, queryParams);
  }

  async getOrganizationPluginData(id: string, queryParams?: Object): Promise<Plugin | { data: Plugin, headers: Object }> {
    return this.performRequest('GET', `/organizations/${id}/pluginData`, queryParams);
  }

  async getOrganizationTags(id: string, queryParams?: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('GET', `/organizations/${id}/tags`, queryParams);
  }

  async getOrganizationNewBillableGuests(organizationId: string, boardId: string, queryParams?: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('GET', `/organizations/${organizationId}/newBillableGuests/${boardId}`, queryParams);
  }

  async getOrganizationExports(id: string, queryParams?: Object): Promise<Object[] | { data: Object[], headers: Object }> {
    return this.performRequest('GET', `/organizations/${id}/exports`, queryParams);
  }

  async updateOrganization(id: string, organization: Organization_UPDATE, queryParams?: Object): Promise<Organization | { data: Organization, headers: Object }> {
    return this.performRequest('PUT', `/organizations/${id}`, { ...organization, ...queryParams });
  }

  async updateOrganizationMember(id: string, queryParams: Member_ORGANIZATION_QUERY): Promise<Member[] | { data: Member[], headers: Object }> {
    return this.performRequest('PUT', `/organizations/${id}/members`, queryParams);
  }

  async updateOrganizationMemberType(organizationId: string, memberId: string, queryParams: Object): Promise<Member | { data: Member, headers: Object }> {
    return this.performRequest('PUT', `/organizations/${organizationId}/members/${memberId}`, queryParams);
  }

  async toggleOrganizationMemberActivation(organizationId: string, memberId: string, value: string): Promise<Member | { data: Member, headers: Object }> {
    return this.performRequest('PUT', `/organizations/${organizationId}/members/${memberId}`, { value: value });
  }

  async createOrganization (organization: Organization_CREATE, queryParams: Object): Promise<Organization | { data: Organization, headers: Object }> {
    return this.performRequest('POST', `/organizations`, { ...organization, ...queryParams });
  }

  async setOrganizationLogo(id: string, file: File, queryParams: Object): Promise<Organization | { data: Organization, headers: Object }> {
    return this.performRequest('POST', `/organizations/${id}/logo`, { file: file, ...queryParams });
  }

  async createOrganizationTagCollection(id: string, name: string, queryParams: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('POST', `/organizations/${id}/tags`, { name: name, ...queryParams });
  }

  async startOrganizationExports(id: string, atachments?: boolean): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('POST', `/organizations/${id}/exports`, { attachments: atachments });
  }

  async deleteOrganization(id: string, queryParams: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('DELETE', `/organizations/${id}`, queryParams);
  }

  async deleteOrganizationLogo(id: string, queryParams: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('DELETE', `/organizations/${id}/logo`, queryParams);
  }

  async deleteOrganizationMember(organizationId: string, memberId: string, queryParams: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('DELETE', `/organizations/${organizationId}/members/${memberId}`, queryParams);
  }

  async deleteOrganizationMemberFromAll(organizationId: string, memberId: string, queryParams?: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('DELETE', `/organizations/${organizationId}/members/${memberId}/all`, queryParams);
  }

  async deleteOrganizationAssociatedDomain(id: string, queryParams?: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('DELETE', `/organizations/${id}/prefs/associatedDomain`, queryParams);
  }

  async deleteOrganizationOrgInviteRestriction(id: string, queryParams?: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('DELETE', `/organizations/${id}/prefs/orgInviteRestrct`, queryParams);
  }

  async deleteOrganizationTag(organizationId: string, tagId: string, queryParams?: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('DELETE', `/organizations/${organizationId}/tags/${tagId}`, queryParams);
  }
}

export interface Organization_CREATE {
  displayName: string;

  /** The description for the team. */
  desc?: string;
  
  /**
   * A name with a length of at least 3. Only lowercase letters, underscores,
   * and numbers are allowed. Must be unique.
   */
  name?: string;

  /** A URL starting with `http://` or `https://`. */
  website?: string;
}

export interface Member_ORGANIZATION_QUERY {
  /** An e-mail address. */
  email: string;

  /** 
   * Name for the member. At least 1 character and not beginning or ending with
   * a space.
   */
  fullName: string;
  
  /** What type of user the Member is. */
  type?: 'admin' | 'normal';
}

export interface Organization_UPDATE {
  /**
   * A new name for the organization. At least 3 lowercase letters, underscores,
   * and numbers. Must be unique.
   */
  name?: string;

  /**
   * A new display name for the organization. Must be at least 1 character long
   * and not begin or end with a space.
   */
  displayName?: string;

  /** The new description for the organization. */
  desc?: string;

  /** A URL starting with `http://`, `https://`, or `null`. */
  website?: string;

  /** The Google Apps domain to link this org to. */
  prefs_associatedDomain?: string;

  /** Whether non-team members can be added to boards inside the team. */
  prefs_externalMembersDisabled?: boolean;

  /** `1` or `2` */
  prefs_googleAppsVersion?: number;

  /** Who can make team visible boards. One of: `admin`, `none`, `org` */
  prefs_boardVisibilityRestrict_org?: string;

  /** Who on the team can make private boards. One of: `admin`, `none`, `org` */
  prefs_boardVisibilityRestrict_private?: string;

  /** Who on the team can make public boards. One of: `admin`, `none`, `org` */
  prefs_boardVisibilityRestrict_public?: string;

  /** An e-mail address with optional wildcard characters. */
  prefs_orgInviteRestrict?: string;

  /** Whether the team page is publicly visible. One of: `private`, `public` */
  prefs_permissionLevel?: string;
}