import { Board, Card, CheckItem, Checklist } from '../utils/shared'
import BaseEndpoint from './BaseEndpoint'

export default class Checklists extends BaseEndpoint {
  async getChecklist (id: string, queryParams: ChecklistQuery): Promise<Checklist | { data: Checklist, headers: Object }> {
    return this.performRequest('GET', `/checklists/${id}`, queryParams)
  }

  /**
   * Gets a single field from an existing Checklist.
   * 
   * @param id The ID of the Checklist to query.
   * @param field The field to return.
   */
  async getChecklistField (id: string, field: string): Promise<Object | {
    data: Object,
    headers: Object 
  }> {
    return this.performRequest('GET', `/checklists/${id}/${field}`)
  }

  /**
   * Retrieves the board associated with a given checklist. This is a nested
   * resource call, so refer to the Board Nested Resource object in the Trello
   * API documentation for further information.
   * 
   * @param id The ID of the checklist.
   * @param fields `all` or comma-separated list of board fields.
   */
  async getChecklistBoard (id: string, fields: string): Promise<Board | {
    data: Board,
    headers: Object
  }> {
    return this.performRequest('GET', `/checklists/${id}/board`, fields)
  }

  /**
   * Retrieve the cards associated with a given checklist. This is a nested
   * resource call, so refer to the Cards Nested Resource object in the Trello
   * API documentation for further information.
   * 
   * @param id The ID of the checklist.
   * @param queryParams The Card Nested Resource object to query the API with.
   */
  async getChecklistCards (id: string, queryParams: Object): Promise<Card[] | {
    data: Card[],
    headers: Object
  }> {
    return this.performRequest('GET', `/checklists/${id}/cards`, queryParams)
  }

  async getChecklistCheckItems (id: string, queryParams: Object): Promise<CheckItem[] | {
    data: CheckItem[],
    headers: Object
  }> {
    return this.performRequest('GET', `/checklists/${id}/checkItems`, queryParams)
  }

  /**
   * Get a specific CheckItem from an existing Checklist with the specified
   * fields.
   *
   * @param checkListId The ID of the checklist.
   * @param checkItemId The ID of the checklist checkitem to retrieve.
   * @param fields One of: `all`, `name`, `nameData`, `pos`, `state`, `type`
   */
  async getChecklistCheckItem (checklistId: string, checkItemId: string, fields: string): Promise<CheckItem | {
    data: CheckItem,
    headers: Object
  }> {
    return this.performRequest('GET', `/checklists/${checklistId}/${checkItemId}`, fields)
  }

  async updateChecklist (id: string, queryParams: Checklist_UPDATE): Promise<Checklist | {
    data: Checklist,
    headers: Object
  }> {
    return this.performRequest('PUT', `/checklists/${id}`, queryParams)
  }

  /**
   * Update the name of an existing checklist.
   * 
   * @param id The ID of the checklist to update.
   * @param name The new name for the checklist.
   */
  async updateChecklistName (id: string, name: string): Promise<Checklist | {
    data: Checklist,
    headers: Object
  }> {
    return this.performRequest('PUT', `/checklists/${id}/name`, { value: name })
  }

  /**
   * Create a new checklist and assign it to an existing card.
   * 
   * @param queryParams The properties to use for creating the new checklist.
   */
  async createChecklist (queryParams: Checklist_CREATE) {
    return this.performRequest('POST', `/checklists/`, queryParams)
  }

  /**
   * Creates a new check item in an existing checklist.
   * 
   * @param id The ID of the checklist to add the check item to.
   * @param queryParams The properties of the newly created check item.
   */
  async createChecklistCheckItem (id: string, queryParams: Checklist_CheckItem_CREATE): Promise<CheckItem | {
    data: CheckItem,
    headers: Object
  }> {
    return this.performRequest('POST', `/checklists/${id}/checkItems`, queryParams)
  }

  /**
   * Deletes an existing checklist.
   * 
   * @param id The ID of the checklist to delete.
   */
  async deleteChecklist (id: string): Promise<Object | {
    data: Object,
    headers: Object
  }> {
    return this.performRequest('DELETE', `/checklists/${id}`)
  }

  /**
   * Deletes an existing check item from an existing checklist.
   * 
   * @param checklistId The ID of the checklist to delete the check item from.
   * @param checkItemId The ID of the check item to delete.
   */
  async deleteChecklistCheckItem (checklistId: string, checkItemId: string): Promise<Object | {
    data: Object,
    headers: Object
  }> {
    return this.performRequest('DELETE', `/checklists/${checklistId}/checkItems/${checkItemId}`)
  }
}