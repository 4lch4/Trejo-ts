import { Action, Attachment, Attachment_CARD_CREATE, Board, Card, CardFields, Card_CREATE, Card_UPDATE, CheckItem, CheckItem_UPDATE, Checklist, Checklist_CREATE, CustomField, Label, List, Member, Sticker, Sticker_CREATE, Sticker_UPDATE } from '../utils/shared';
import BaseEndpoint from './BaseEndpoint';

export default class Cards extends BaseEndpoint {
  async getCard (id: string, queryParams?: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('GET', `/cards/${id}`, queryParams);
  }

  async getCardField(id: string, field: string, queryParams?: Object): Promise<CardFields | { data: CardFields, headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/${field}`, queryParams);
  }

  async getCardActions(id: string, queryParams?: Object): Promise<Action | { data: Action, headers: Object}> {
    return this.performRequest('GET', `/cards/${id}/actions`, queryParams);
  }
  
  async getCardAttachments(id: string, queryParams?: Object): Promise<Attachment[] | { data: Attachment[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/attachments`, queryParams);
  }

  async getCardAttachment(cardId: string, attachmentId: string, queryParams?: Object): Promise<Attachment | { data: Attachment, headers: Object }> {
    return this.performRequest('GET', `/cards/${cardId}/attachments/${attachmentId}`, queryParams);
  }

  async getCardBoard(id: string, queryParams?: Object): Promise<Board | { data: Board, headers: Board }> {
    return this.performRequest('GET', `/cards/${id}/board`, queryParams);
  }

  async getCardCheckItemStates(id: string, queryParams?: Object): Promise<CheckItem[] | { data: CheckItem[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/checkItemStates`, queryParams);
  }

  async getCardChecklists(id: string, queryParams?: Object): Promise<Checklist[] | { data: Checklist[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/checklists`, queryParams);
  }

  async getCardChecklistCheckItem(cardId: string, checkItemId: string, queryParams?: Object): Promise<CheckItem | { data: CheckItem, headers: Object }> {
    return this.performRequest('GET', `/cards/${cardId}/checkItem/${checkItemId}`, queryParams);
  }

  async getCardCustomFieldItems(id: string, queryParams?: Object): Promise<CustomField[] | { data: CustomField[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/customFieldItems`, queryParams);
  }

  async getCardList(id: string, queryParams?: Object): Promise<List | { data: List, headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/list`, queryParams);
  }

  async getCardMembers(id: string, queryParams?: Object): Promise<Member[] | { data: Member[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/members`, queryParams);
  }

  async getCardMembersVoted(id: string, queryParams?: Object): Promise<Member[] | { data: Member[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/membersVoted`, queryParams);
  }

  async getCardPluginData(id: string, queryParams?: Object): Promise<Object | { data: Object, headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/pluginData`, queryParams);
  }

  async getCardStickers(id: string, queryParams?: Object): Promise<Sticker[] | { data: Sticker[], headers: Object }> {
    return this.performRequest('GET', `/cards/${id}/stickers`, queryParams);
  }

  async getCardSticker(cardId: string, stickerId: string, queryParams?: Object): Promise<Sticker | { data: Sticker, headers: Object }> {
    return this.performRequest('GET', `/cards/${cardId}/stickers/${stickerId}`, queryParams);
  }

  async updateCard(id: string, updateCard: Card_UPDATE): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('PUT', `/cards/${id}`, updateCard);
  }

  async updateCardActionComment(cardId: string, actionId: string, text: string, queryParams?: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('PUT', `/cards/${cardId}/actions/${actionId}/comments`, { text: text, ...queryParams });
  }

  async updateCardCheckItem(cardId: string, checkitemId: string, queryParams: CheckItem_UPDATE): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('PUT', `/cards/${cardId}/checkItem/${checkitemId}`, queryParams);
  }

  async updateCardChecklistCheckItem(cardId: string, checklistId: string, checkItemId: string, queryParams?: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('PUT', `/cards/${cardId}/checklist/${checklistId}/checkItem/${checkItemId}`, queryParams);
  }
  
  async updateCardSticker(cardId: string, stickerId: string, stickerUpdate: Sticker_UPDATE): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('PUT', `/cards/${cardId}/stickers/${stickerId}`, stickerUpdate);
  }
  
  async createCard (newCard: Card_CREATE, queryParams?: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('POST', `/cards`, { ...newCard, ...queryParams })
  }

  async addCardActionComment(id: string, comment: string, queryParams?: Object): Promise<Action | { data: Action, headers: Object }> {
    return this.performRequest('POST', `/cards/${id}/actions/comments`, { text: comment, ...queryParams });
  }

  /**
   * _NOTE: Cards have a max of 100 attachments. If you try to add one more,_
   * _you'll get a `422 unprocessable entity` error._
   * 
   * @param id The ID of the card.
   * @param attachment The object containing the attachment data.
   * @param queryParams Any further query parameters you wish to add.
   */
  async addCardAttachment(id: string, attachment: Attachment_CARD_CREATE, queryParams?: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('POST', `/cards/${id}/attachments`, { ...attachment, ...queryParams });
  }

  async addCardChecklist(id: string, newChecklist: Checklist_CREATE, queryParams?: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('POST', `/cards/${id}/checklists`, { ...newChecklist, ...queryParams });
  }

  async addCardExistingLabel(cardId: string, labelId: string, queryParams?: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('POST', `/cards/${cardId}/idLabels`, { value: labelId, ...queryParams });
  }

  async addCardMember(cardId: string, memberId: string, queryParams?: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('POST', `/cards/${cardId}/idMembers`, { value: memberId, ...queryParams });
  }

  async addNewCardLabel(id: string, label: Label, queryParams?: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('POST', `/cards/${id}/labels`, { ...label, ...queryParams });
  }

  async markCardNotificationsRead(id: string, queryParams?: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('POST', `/cards/${id}/markAssociatedNotificationsRead`, queryParams);
  }

  async voteOnCard(cardId: string, memberId: string, queryParams?: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('POST', `/cards/${cardId}`, { value: memberId, ...queryParams });
  }

  async addCardSticker(id: string, sticker: Sticker_CREATE, queryParams?: Object): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('POST', `/cards/${id}/stickers`, { ...sticker, ...queryParams });
  }

  async deleteCard(id: string): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('DELETE', `/cards/${id}`);
  }

  async deleteCardActionComment(cardId: string, actionId: string): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('DELETE', `/cards/${cardId}/actions/${actionId}/comments`);
  }

  async deleteCardAttachment(cardId: string, attachmentId: string): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('DELETE', `/cards/${cardId}/attachments/${attachmentId}`);
  }

  async deleteCardCheckItem(cardId: string, checkItemId: string): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('DELETE', `/cards/${cardId}/checkItem/${checkItemId}`)
  }

  async deleteCardChecklist(cardId: string, checklistId: string): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('DELETE', `/cards/${cardId}/checklists/${checklistId}`);
  }

  async deleteCardLabel(cardId: string, labelId: string): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('DELETE', `/cards/${cardId}/idLabels/${labelId}`);
  }

  async deleteCardMember(cardId: string, memberId: string): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('DELETE', `/cards/${cardId}/idMembers/${memberId}`);
  }

  async deleteCardMemberVote(cardId: string, memberId: string): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('DELETE', `/cards/${cardId}/membersVoted/${memberId}`);
  }

  async deleteCardSticker(cardId: string, stickerId: string): Promise<Card | { data: Card, headers: Object }> {
    return this.performRequest('DELETE', `/cards/${cardId}/stickers/${stickerId}`);
  }
}
