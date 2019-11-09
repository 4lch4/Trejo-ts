import { Action, Board, BoardBackgrounds, BoardBackgrounds_MEMBER_UPDATE, Card, CustomEmoji_CREATE, Emoji, Member, MemberFields, Member_UPDATE, Notification_QUERY as Notification_MEMBER_QUERY, Organization, Organization_MEMBER_QUERY, SavedSearch_CREATE, SavedSearch_UPDATE, StarBoard_QUERY, Sticker, Token } from '../utils/shared';
import BaseEndpoint from './BaseEndpoint';
import { BoardStar } from './Boards';

export default class Members extends BaseEndpoint {
	/**
	 * Retrieves all of the boards for the user with the given id and returns the
	 * fields specified in the fields parameter.
	 * 
	 * @param id The id of the user whose boards you wish to retrieve. `(default: 'me')`
	 * @param fields The fields you wish to return from the boards. `(default: ['name', 'url'])`
	 */
  async getBoards(id = 'me', fields = 'name,url'): Promise<Board[] | { data: Board[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/boards?fields=${fields}`)
  }

  async getBoardByName(name: string, id = 'me', fields = 'name,url'): Promise<Board | undefined> {
    const res = await this.performRequest('GET', `/members/${id}/boards?fields=${fields}`);

    if (this.includeHeaders) var data = res.data
    else data = res

    for (const board of data) {
      if (board.name === name) return board;
    }

    return undefined;
  }

  async getMember(id: string, queryParams?: Object): Promise<Member | { data: Member, headers: Object }> {
    return this.performRequest('GET', `/members/${id}`, queryParams);
  }

  async getMemberField(id: string, field: string, queryParams?: Object): Promise<MemberFields | { data: MemberFields, headers: Object }> {
    return this.performRequest('GET', `/members/${id}/${field}`, queryParams);
  }

  async getMemberActions(id: string, queryParams?: Object): Promise<Action | { data: Action, headers: Object }> {
    return this.performRequest('GET', `/members/${id}/actions`, queryParams);
  }

  async getMemberBoards(id: string, queryParams?: Object): Promise<Board[] | { data: Board[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/boards`, queryParams);
  }

  async getMemberBoardBackgrounds(id: string, queryParams?: Object): Promise<BoardBackgrounds[] | { data: BoardBackgrounds[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/boardBackgrounds`, queryParams);
  }

  async getMemberBoardBackground(memberId: string, boardBackgroundId: string, queryParams?: Object): Promise<BoardBackgrounds | { data: BoardBackgrounds, headers: Object }> {
    return this.performRequest('GET', `/members/${memberId}/boardBackgrounds/${boardBackgroundId}`, queryParams);
  }

  async getMemberBoardStars(id: string, queryParams?: Object): Promise<BoardStar[] | { data: BoardStar[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/boardStars`, queryParams);
  }

  async getMemberBoardStar(memberId: string, boardStarId: string, queryParams?: Object): Promise<BoardStar | { data: BoardStar, headers: Object }> {
    return this.performRequest('GET', `/members/${memberId}/boardStars/${boardStarId}`, queryParams);
  }

  async getMemberBoardsInvited(id: string, queryParams?: Object): Promise<Board[] | { data: Board[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/boardsInvited`, queryParams);
  }

  async getMemberCards(id: string, queryParams?: Object): Promise<Card[] | { data: Card[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/cards`, queryParams);
  }

  async getMemberCustomBoardBackgrounds(id: string, queryParams?: Object): Promise<BoardBackgrounds[] | { data: BoardBackgrounds[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/customBoardBackgrounds`, queryParams);
  }

  async getMemberCustomBoardBackground(memberId: string, customBoardBackgroundId: string, queryParams?: Object): Promise<BoardBackgrounds[] | { data: BoardBackgrounds[], headers: Object }> {
    return this.performRequest('GET', `/members/${memberId}/customBoardBackgrounds/${customBoardBackgroundId}`, queryParams);
  }

  async getMemberCustomEmojis(id: string, queryParams?: Object): Promise<Emoji[] | { data: Emoji[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/customEmoji`, queryParams);
  }

  async getMemberCustomEmoji(memberId: string, customEmojiId: string, queryParams?: Object): Promise<Emoji | { data: Emoji, headers: Object }> {
    return this.performRequest('GET', `/members/${memberId}/customEmoji/${customEmojiId}`, queryParams);
  }

  async getMemberCustomStickers(id: string, queryParams?: Object): Promise<Sticker[] | { data: Sticker[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/customStickers`, queryParams);
  }

  async getMemberCustomSticker(memberId: string, customStickerId: string, queryParams?: Object): Promise<Sticker | { data: Sticker, headers: Object }> {
    return this.performRequest('GET', `/members/${memberId}/customStickers/${customStickerId}`, queryParams);
  }

  async getMemberEnterprises(id: string, queryParams?: Object): Promise<Object[] | { data: Object[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/enterprises`, queryParams)
  }

  async getMemberNotifications(id: string, queryParams?: Notification_MEMBER_QUERY): Promise<Notification[] | { data: Notification[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/notifications`, queryParams);
  }

  async getMemberOrganizations(id: string, queryParams: Organization_MEMBER_QUERY): Promise<Organization[] | { data: Organization[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/organizations`, queryParams);
  }

  async getMemberOrganizationsInvited(id: string, fields?: string): Promise<Organization[] | { data: Organization[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/organizationsInvited`, { fields: fields });
  }

  async getMemberSavedSearches(id: string, queryParams: Object): Promise<Object[] | { data: Object[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/savedSearchs`, queryParams);
  }

  async getMemberSavedSearch(memberId: string, savedSearchId: string, queryParams: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('GET', `/members/${memberId}/savedSearches/${savedSearchId}`, queryParams);
  }

  async getMemberTokens(id: string, webhooks: boolean, queryParams: Object): Promise<Token[] | { data: Token[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/tokens`, { webhooks: webhooks, ...queryParams });
  }

  async updateMember(id: string, updatedMember: Member_UPDATE): Promise<Member | { data: Member, headers: Object }> {
    return this.performRequest('PUT', `/members/${id}`, updatedMember);
  }

  async updateMemberBoardBackground(memberId: string, boardBackgroundId: string, queryParams: BoardBackgrounds_MEMBER_UPDATE): Promise<BoardBackgrounds | { data: BoardBackgrounds, headers: Object }> {
    return this.performRequest('PUT', `/members/${memberId}/boardBackgrounds/${boardBackgroundId}`, queryParams)
  }

  async updateMemberBoardStar(memberId: string, boardStarId: string, position: string, queryParams: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('PUT', `/members/${memberId}/boardStars/${boardStarId}`, { pos: position, ...queryParams });
  }

  async updateMemberCustomBoardBackground(memberId: string, customBoardBackgroundId: string, queryParams: BoardBackgrounds_MEMBER_UPDATE): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest("PUT", `/members/${memberId}/customBoardBackgrounds/${customBoardBackgroundId}`, queryParams);
  }

  async udpateMemberSavedSearch(memberId: string, savedSearchId: string, queryParams: SavedSearch_UPDATE): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('PUT', `/members/${memberId}/savedSearches/${savedSearchId}`, queryParams);
  }

  async createMemberAvatar(id: string, file: File, queryParams?: Object): Promise<Member | { data: Member, headers: Object }> {
    return this.performRequest('POST', `/members/${id}/avatar`, { file: file, ...queryParams })
  }

  async uploadMemberBoardBackground(id: string, file: File, queryParams?: Object): Promise<Member | { data: Member, headers: Object }> {
    return this.performRequest('POST', `/members/${id}/boardBackgrounds`, { file: file, ...queryParams });
  }

  async starNewBoard(id: string, queryParams: StarBoard_QUERY): Promise<Board | { data: Board, headers: Object }> {
    return this.performRequest('POST', `/members/${id}/boardStars`, queryParams);
  }

  async uploadNewCustomBoardBackground(id: string, file: File, queryParams: Object): Promise<Member | { data: Member, headers: Object }> {
    return this.performRequest('POST', `/members/${id}/customBoardBackgrounds`, { file: file, ...queryParams });
  }

  async uploadNewCustomEmoji(id: string, queryParams: CustomEmoji_CREATE): Promise<Member | { data: Member, headers: Object }> {
    return this.performRequest('POST', `/members/${id}/customEmoji`, queryParams);
  }

  async uploadCustomSticker(id: string, file: File, queryParams: Object): Promise<Member | { data: Member, headers: Object }> {
    return this.performRequest('POST', `/members/${id}/customStickers`, { file: file, ...queryParams })
  }

  async dismissOneTimeMessage(id: string, message: string, queryParams: Object): Promise<Member | { data: Member, headers: Object }> {
    return this.performRequest('POST', `/members/${id}/savedSearches`, { value: message, ...queryParams });
  }

  async createMemberSavedSearch(id: string, queryParams: SavedSearch_CREATE): Promise<Member | { data: Member, headers: Object }> {
    return this.performRequest('POST', `/members/${id}/savedSearches`, queryParams);
  }

  async deleteBoardBackground(memberId: string, boardBackgroundId: string, queryParams: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('DELETE', `/members/${memberId}/boardBackgrounds/${boardBackgroundId}`, queryParams);
  }

  async unstarBoard(memberId: string, boardId: string, queryParams: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('DELETE', `/members/${memberId}/boardStars/${boardId}`, queryParams);
  }

  async deleteCustomBoardBackground(memberId: string, customBoardBackgroundId: string, queryParams: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('DELETE', `/members/${memberId}/customBoardBackgrounds/${customBoardBackgroundId}`, queryParams);
  }

  async deleteCustomSticker(memberId: string, customStickerId: string, queryParams: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('DELETE', `/members/${memberId}/customStickers/${customStickerId}`, queryParams);
  }

  async deleteSavedSearch(memberId: string, savedSearchId: string, queryParams: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('DELETE', `/members/${memberId}/savedSearches/${savedSearchId}`, queryParams);
  }
}
