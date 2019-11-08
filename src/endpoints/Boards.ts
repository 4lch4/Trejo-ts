import { Action, BoardPlugin, BoardPowerUp, Card, Checklist, CustomField, Label, List, Member, Membership } from '../utils/shared';
import BaseEndpoint from './BaseEndpoint';

export default class Boards extends BaseEndpoint {
  async getBoard (id: string, queryParams: Object): Promise<Board | { data: Board, headers: Object }> {
    return this.performRequest('GET', `/boards/${id}`, queryParams);
  }

  async getBoardField (id: string, field: string): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('GET', `/boards/${id}/${field}`);
  }

  async getBoardActions (id: string, queryParams: Object): Promise<Action[] | { data: Action[], headers: Object}> {
    return this.performRequest('GET', `/boards/${id}/actions`, queryParams);
  }

  async getAllBoardPlugins (id: string, filter: string): Promise<BoardPlugin[] | { data: BoardPlugin[], headers: Object }> {
    return this.performRequest('GET', `/boards/${id}/plugins`, filter);
  }

  async getEnabledBoardPlugins (id: string): Promise<BoardPowerUp[] | {
    data: BoardPowerUp[],
    headers: Object
  }> {
    return this.performRequest('GET', `/boards/${id}/boardPlugins`);
  }

  async getBoardStars (id: string, filter = 'mine'): Promise<Object[] | {
    data: Object[],
    headers: Object
  }> {
    return this.performRequest('GET', `/boards/${id}/`, { fields: 'id', boardStars: filter });
  }

  async getBoardCards (id: string, queryParams: Object): Promise<Card[] | {
    data: Card[],
    headers: Object
  }> {
    return this.performRequest('GET', `/boards/${id}/cards`, queryParams);
  }

  async getBoardCardsFiltered (id: string, filter: string): Promise<Card[] | {
    data: Card[],
    headers: Object
  }> {
    return this.performRequest('GET', `/boards/${id}/cards/${filter}`);
  }

  async getBoardCard (boardId: string, cardId: string, queryParams: Object): Promise<Card | {
    data: Card,
    headers: Object
  }> {
    return this.performRequest('GET', `/boards/${boardId}/cards/${cardId}`, queryParams);
  }

  async getBoardChecklists (id: string, queryParams: Object): Promise<Checklist[] | {
    data: Checklist[],
    headers: Object
  }> {
    return this.performRequest('GET', `/boards/${id}/checklists`, queryParams);
  }

  async getBoardCustomFields (id: string): Promise<CustomField[] | {
    data: CustomField[],
    headers: Object
  }> {
    return this.performRequest('GET', `/boards/${id}/customFields`);
  }

  async getBoardLabels (id: string, queryParams: Object): Promise<Label[] | {
    data: Label[],
    headers: Object
  }> {
    return this.performRequest('GET', `/boards/${id}/labels`, queryParams);
  }

  async getBoardLists (id: string, queryParams: Object): Promise<List[] | {
    data: List[],
    headers: Object
  }> {
    return this.performRequest('GET', `/boards/${id}/lists`, queryParams);
  }

  async getBoardListsFiltered (id: string, filter: string): Promise<Member[] | {
    data: Member[],
    headers: Object
  }> {
    return this.performRequest('GET', `/boards/${id}/lists/${filter}`);
  }
  
  async getBoardMembers (id: string, queryParams: Object): Promise<Membership[] | {
    data: Member[],
    headers: Object
  }> {
    return this.performRequest('GET', `/boards/${id}/members`, queryParams);
  }

  async getBoardMemberships (id: string, queryParams: Object): Promise<Board | {
    data: Membership[],
    headers: Object
  }> {
    return this.performRequest('GET', `/boards/${id}/memberships`, queryParams);
  }

  async updateBoardById (id: string, queryParams: Object): Promise<Card[] | {
    data: Board,
    headers: Object
  }> {
    return this.performRequest('PUT', `/boards/${id}`, queryParams);
  }
}

export interface Board {
  /** The unique identifier for the board. */
  id: string;

  /** The friendly/display name of the board. */
  name: string;

  /** Boolean whether the board has been closed or not. */
  closed: boolean;

  /** MongoID of the organization to which the board belongs. */
  idOrganization: string;

  /** Boolean whether the board has been pinned or not. */
  pinned: boolean;

  /** Persistent URL for the board. */
  url: string;

  /** URL for the board using only its shortMongoID. */
  shortUrl: string;

  /** Short for "preferences", these are the settings for the board. */
  prefs: Object;

  /**
   * Object containing colo keys and the label names given for one label of each
   * color on the board. To get a full list of labels on the board, see
   * `/boards/{id}/labels`
   */
  labelNames: Object;

  /** Whether the board has been starred by the current request's user. */
  starred: boolean;

  /**
   * An object containing information on the limits that exist for the board.
   * Read more about this at: https://developers.trello.com/docs/limits
   */
  limits: Object;

  /**
   * Array of objects that represent the relationship of users to this board as
   * memberships:
   * 
   * https://developers.trello.com/reference-link/boardsidmemberships
   */
  memberships: Object[];
}

export interface BoardStar {
  id: string;
  boardStars: [{
    _id: string;
    idBoard: string;
    pos: number;
  }]
}