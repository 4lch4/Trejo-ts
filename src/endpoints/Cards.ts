import { Badge, Label } from '../utils/shared';
import BaseEndpoint from './BaseEndpoint';

export default class Cards extends BaseEndpoint {
  async createCard (newCard: NewCardRequest) {
    return this.performRequest('POST', `/cards`, newCard)
  }
}

export declare class Card {
  /** The unique identifier of the card. */
  id: string;

  /**
   * Pieces of information about the card that are displayed on the front of it.
   */
  badges: Badge;

  checkItemStates: Object[];

  /**
   * Whether the card is closed (archived). Note: Archived lists and boards do
   * not cascade archives to cards. A card can have closed:false but be on an
   * archived board.
   */
  closed: boolean;

  /**
   * The datetime of the last activity on the card. Note: There are activity
   * that update dateLastActivity that do not create a corresponding action. For
   * instance, updating the name field of a checklist item on a card does not
   * create an action but does update the card and board's dateLastActivity.
   */
  dateLastActivity: Date;

  /** The description for the card. Up to 16384 chars. */
  desc: string;

  /** 
   * If the description has custom emoji, this field will provide the data
   * necessary to display them.
   */
  descData: Object;

  /** The due date on the card, if one exists. */
  due: Date;

  /** Whether the due date has been marked complete. */
  dueComplete: boolean;

  /** The id of the attachment selected as the cover image, if one exists. */
  idAttachmentCover: string;

  /** The ID of the board the card is on. */
  idBoard: string;

  /** An array of checklist IDs that are on this card. */
  idChecklists: string[];

  /** An array of label IDs that are on this card. */
  idLabels: string[];

  /** The ID of the list the card is in. */
  idList: string;

  /** An array of member IDs that are on this card. */
  idMembers: string[];

  /** An array of member IDs who have voted on this card. */
  idMembersVoted: string[];

  /**
   * Numeric ID for the card on this board. Only unique to the board, and
   * subject to change as the card moves.
   */
  idShort: number;

  /** Array of label objects on this card. */
  labels: Label[];

  /** 
   * Whether the card cover image was selected automatically by Trello, or
   * manually by the user.
   */
  manualCoverAttachment: boolean;

  /** The name of the card. */
  name: string;

  /** Position of the card in the list. */
  pos: number;

  /** The 8 character shortened ID for the card. */
  shortLink: string;

  /** URL to the card without the name slug. */
  shortUrl: string;

  /** Whether this member is subscribed to the card. */
  subscribed: boolean;

  /** Full URL to the card, with the name slug. */
  url: string;

  /** Address of card location. */
  address: string;

  /** Name of card location. */
  locationName: string;

  /**
   * Either a comma-separated string in the format latitude, longitude, or an
   * object containing keys for `latitude` and `longitude` whose values are
   * numbers between -180 and 180.
   */
  coordinates: Object;
}

declare class NewCardRequest {
  /** The name for the card. */
  name: string;

  /** The description for the card. */
  desc: string;

  /** The position of the new card. `top`, `bottom`, or a positive float. */
  pos: string;

  /** A due date for the card. */
  due: string;

  /** Whether or not the due date has been reached. */
  dueComplete: boolean;

  /** The ID of the list the card should be created in. */
  idList: string;

  /** Comma-separated list of member IDs to add to the card. */
  idMembers: string;

  /** Comma-separated list of label IDs to add to the card. */
  idLabels: string;

  /** A URL starting with `http://` or `https://`. */
  urlSource: string;

  /** Not sure what this does... */
  fileSource: string;

  /** The ID of a card to copy into the new card. */
  idCardSource: string;

  /**
   * if using `idCardSource` you can specify which properties to copy over.
   * `all` or comma-separated list of: `attachments,checklists,comments,due,
   * labels,members,stickers`.
   */
  keepFromSource: string;

  /** For use with/by the Map Power-Up. */
  address: string;

  /** For use with/by the Map Power-Up. */
  locationName: string;

  /** For use with/by the Map Power-Up. In form of `latitude,longitude`. */
  coordinates: string;
}
