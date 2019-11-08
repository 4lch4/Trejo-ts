import { Action, Attachment, Board, Card, CardFields, Card_CREATE, Card_UPDATE, CheckItem, CheckItem_UPDATE, Checklist, CustomField, List, Member, Sticker, Sticker_UPDATE } from '../utils/shared';
import BaseEndpoint from './BaseEndpoint';

export default class Cards extends BaseEndpoint {
  async getCard (id: string, queryParams: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('GET', `/cards/${id}`, queryParams);
  }

  async getCardField(id: string, field: string, queryParams: Object): Promise<CardFields | { data: CardFields, headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/${field}`, queryParams);
  }

  async getCardActions(id: string, queryParams: Object): Promise<Action | { data: Action, headers: Object}> {
    return this.performRequest('GET', `/cards/${id}/actions`, queryParams);
  }
  
  async getCardAttachments(id: string, queryParams: Object): Promise<Attachment[] | { data: Attachment[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/attachments`, queryParams);
  }

  async getCardAttachment(cardId: string, attachmentId: string, queryParams: Object): Promise<Attachment | { data: Attachment, headers: Object }> {
    return this.performRequest('GET', `/cards/${cardId}/attachments/${attachmentId}`, queryParams);
  }

  async getCardBoard(id: string, queryParams: Object): Promise<Board | { data: Board, headers: Board }> {
    return this.performRequest('GET', `/cards/${id}/board`, queryParams);
  }

  async getCardCheckItemStates(id: string, queryParams: Object): Promise<CheckItem[] | { data: CheckItem[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/checkItemStates`, queryParams);
  }

  async getCardChecklists(id: string, queryParams: Object): Promise<Checklist[] | { data: Checklist[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/checklists`, queryParams);
  }

  async getCardChecklistCheckItem(cardId: string, checkItemId: string, queryParams: Object): Promise<CheckItem | { data: CheckItem, headers: Object }> {
    return this.performRequest('GET', `/cards/${cardId}/checkItem/${checkItemId}`, queryParams);
  }

  async getCardCustomFieldItems(id: string, queryParams: Object): Promise<CustomField[] | { data: CustomField[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/customFieldItems`, queryParams);
  }

  async getCardList(id: string, queryParams: Object): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/list`, queryParams);
  }

  async getCardMembers(id: string, queryParams: Object): Promise<Member[] | { data: Member[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/members`, queryParams);
  }

  async getCardMembersVoted(id: string, queryParams: Object): Promise<Member[] | { data: Member[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/membersVoted`, queryParams);
  }

  async getCardPluginData(id: string, queryParams: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/pluginData`, queryParams);
  }

  async getCardStickers(id: string, queryParams: Object): Promise<Sticker[] | { data: Sticker[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/stickers`, queryParams);
  }

  async getCardSticker(cardId: string, stickerId: string, queryParams: Object): Promise<Sticker | { data: Sticker, headers: Object }> {
    return this.performRequest('GET', `/cards/${cardId}/stickers/${stickerId}`, queryParams);
  }

  async updateCard(id: string, updateCard: Card_UPDATE): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('PUT', `/cards/${id}`, updateCard);
  }

  async updateCardActionComment(cardId: string, actionId: string, text: string, queryParams: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('PUT', `/cards/${cardId}/actions/${actionId}/comments`, { text: text, ...queryParams });
  }

  async updateCardCheckItem(cardId: string, checkitemId: string, queryParams: CheckItem_UPDATE): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('PUT', `/cards/${cardId}/checkItem/${checkitemId}`, queryParams);
  }

  async updateCardChecklistCheckItem(cardId: string, checklistId: string, checkItemId: string, queryParams: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('PUT', `/cards/${cardId}/checklist/${checklistId}/checkItem/${checkItemId}`, queryParams);)
  }
  
  async updateCardSticker(cardId: string, stickerId: string, stickerUpdate: Sticker_UPDATE): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('PUT', `/cards/${cardId}/stickers/${stickerId}`, stickerUpdate);
  }
  
  async createCard (newCard: Card_CREATE) {
    return this.performRequest('POST', `/cards`, newCard)
  }

  async addCardActionComment(id: string, comment: string, queryParams: Object): Promise<Action | { data: Action, headers: Object }> {
    return this.performRequest('POST', `/cards/${id}/actions/comments`, { text: comment });
  }

  async addCardAttachment(id: string, attachment: Attachment): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('POST', `/cards/${id}/attachments`, attachment);
  }
}