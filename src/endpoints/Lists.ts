import { Action, Board, Card, List, ListFields } from "../utils/shared";
import BaseEndpoint from "./BaseEndpoint";

export default class Lists extends BaseEndpoint {
  async getList(id: string, fields: string = 'all', queryParams?: Object): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('GET', `/lists/${id}/?fields=${fields}`, queryParams);
  }

  async getListField(id: string, field: string): Promise<ListFields | { data: ListFields, headers: Object }> {
    return this.performRequest('GET', `/lists/${id}/${field}`);
  }

  async getListActions(id: string, queryParams?: Object): Promise<Action[] | { data: Action[], headers: Object }> {
    return this.performRequest('GET', `/lists/${id}/actions`, queryParams);
  }

  async getListBoard(id: string, queryParams?: Object): Promise<Board | { data: Board, headers: Object }> {
    return this.performRequest('GET', `/lists/${id}/board`, queryParams);
  }

  async getListCards(id: string, queryParams?: Object): Promise<Card[] | { data: Card[], headers: Object }> {
    return this.performRequest('GET', `/lists/${id}/cards`, queryParams);
  }

  async updateList(id: string, queryParams: List_UPDATE): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('PUT', `/lists/${id}`, queryParams);
  }

  async toggleListClosed(id: string, closed: boolean): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('PUT', `/lists/${id}/closed`, { value: closed });
  }

  async moveListBoard(listId: string, boardId: string): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('PUT', `/lists/${listId}/idBoard`, { value: boardId });
  }

  async updateListName(id: string, newName: string): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('PUT', `/lists/${id}/name`, { value: newName });
  }

  async updateListPosition(id: string, newPos: string): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('PUT', `/lists/${id}/pos`, { value: newPos });
  }

  async updateListSoftLimit(id: string, limit: number): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('PUT', `/lists/${id}/softLimit`, { value: limit });
  }

  async updateListSubscribed(id: string, subscribed: boolean): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('PUT', `/lists/${id}/subscribed`, { value: subscribed });
  }

  async createList(newList: List_CREATE): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('POST', `/lists`, newList)
  }

  async archiveListCards(id: string): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('POST', `/lists/${id}/archiveAllCards`);
  }

  async moveListCards(oldListId: string, newBoardId: string, newListId: string): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('POST', `/lists/${oldListId}/moveAllCards`, { idBoard: newBoardId, idList: newListId });
  }
}

declare interface List_CREATE {
  /** Name for the list. */
  name: string;

  /** The long ID of the board the list should be created on. */
  idBoard: string;

  /** ID of the list to copy into the new list. */
  idListSource?: string;

  /** Position of the list. `top`, `bottom`, or a positive floating point number. */
  pos?: string;
}

declare interface List_UPDATE {
  /** The new name for the list. */
  name?: string;

  /** Whether tthe list should be closed (archived). */
  closed?: boolean;

  /** ID of a board the list should be moved to. */
  idBoard?: string;

  /** New position for the list: `top`, `bottom`, or a positive floating point number. */
  pos?: string;

  /** Whether the active member is subscribed to this list. */
  subscribed?: boolean;
}
