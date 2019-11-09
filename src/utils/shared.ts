// #region Standard Models
export interface Action {
  /** The ID of the action. */
  id: string;

  /** Relevant information regarding the action. */
  data: Object;

  /** When the action occurred. */
  date: Date;

  /** The ID of the member who caused the action. */
  idMemberCreator: string;

  /** The type of action. */
  type: ActionType;
}

export interface Attachment {
	id: string;
	bytes: number;
	date: string;
	edgeColor: string;
	idMember: string;
	isUpload: boolean;
	mimeType?: any;
	name: string;
	previews: Preview[];
	url: string;
	pos: number;
}

/**
 * An interface for when a new Attachment is "attached" to a Card for example.
 */
export interface Attachment_CARD_CREATE {
  /** The name of the attachment. Max length 256. */
  name?: string;

  /** The file to attach, as multipart/form-data. */
  file?: File;

  /** The mimeType of the attachment. Max length 256. */
  mimeType?: string;

  /** A URL to attach. Must start with `http://` or `https://`. */
  url?: string;
}

export interface Badge {
  votes: number;
  viewingMemberVoted: boolean;
  subscribed: boolean;
  fogbugz: string;
  checkItems: number;
  checkItemsChecked: number;
  comments: number;
  attachments: number;
  description: boolean;
  due: Date;
  dueComplete: false;
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

export interface Board_CREATE {
  /** The new name for the board. 1 - 16,384 characters long. */
  name: string;

  /** Determines whether to use the default set of labels. */
  defaultLabels?: boolean;

  /**
   * Determmines whether to add the default set of lists to a board (To Do,
   * Doing, Done). It is ignored if `idBoardSource` is provided.
   */
  defaultLists?: boolean;

  /** A new description for the board, 0 - 16,384 characters long. */
  desc?: string;

  /** The ID or name of the organiztion the board should belong to. */
  idOrganization?: string;

  /** The ID of an existing board to copy into the new board. */
  idBoardSource?: string;

  /** To keep cards from the original board pass in the value `cards`. */
  keepFromSource?: string;

  /**
   * The Power-Ups that should be enabled on the new board.
   * 
   * One of:
   * 
   * - `all`
   * - `calendar`
   * - `cardAging`
   * - `recap`
   * - `voting`
   */
  powerUps?: string;

  /**
   * The permissions level of the board.
   * 
   * One of:
   * 
   * - `org`
   * - `private`
   * - `public`
   */
  prefs_permissionLevel?: string;

  /**
   * Who can vote on this board.
   * 
   * One of:
   * 
   * - `disabled`
   * - `members`
   * - `observers`
   * - `org`
   * - `public`
   */
  prefs_voting?: string;

  /**
   * Who can comment on cards on this board.
   * 
   * One of:
   * 
   * - `disabled`
   * - `members`
   * - `observers`
   * - `org`
   * - `public`
   */
  prefs_comments?: string;

  /**
   * Determines what types of members can invite users to join.
   * 
   * One of:
   * 
   * - `admins`
   * - `members`
   */
  prefs_invitations?: string;

  /**
   * Determines whether users can join the board themselves or whether they have
   * to be invited.
   */
  prefs_selfJoin?: boolean;

  /** Determine whether card covers are enabled. */
  prefs_cardCovers?: boolean;

  /**
   * The ID of a custom background or one of:
   * 
   * - `blue`
   * - `orange`
   * - `green`
   * - `red`
   * - `purple`
   * - `pink`
   * - `lime`
   * - `sky`
   * - `grey`
   */
  prefs_background?: string;

  /**
   * Determines the type of card aging that should take place on the board if
   * card aging is enabled.
   * 
   * One of:
   * 
   * - `pirate`
   * - `regular`
   */
  prefs_cardAging?: string;
}

export interface Board_UPDATE {
  /** The new name for the board. 1 - 16,384 characters long. */
  name?: string;
  
  /** A new description for the board. 0 - 16,384 characters long. */
  desc?: string;

  /** Whether or not the board is closed */
  closed?: boolean;

  /** Whether the acting user is subscribed to the board. */
  subscribed?: boolean;

  /** The id of the team the board should be moved to. */
  idOrganization?: string;

  /** One of: `org`, `private`, `public` */
  "prefs/permissionLevel"?: string;

  /** Whether team members can join the board themselves. */
  "prefs/selfJoin"?: boolean;

  /** Whether card covers should be displayed on this board. */
  "prefs/cardCovers"?: boolean;

  /** Determines whether the Voting Power-Up should hide who voted on cards. */
  "prefs/hideVotes"?: boolean;

  /** Who can invite people to this board. One of: `admins` or `members` */
  "prefs/invitations"?: string;

  /**
   * Who can vote on this board. One of: `disabled`, `members`, `observers`,
   * `org`, `public`
   */
  "prefs/voting"?: string;

  /**
   * Who can comment on cards on this board. One of: `disabled`, `members`,
   * `observers`, `org`, `public`.
   */
  "prefs/comments"?: string;

  /**
   * The id of a custom background or one of: `blue`, `orange`, `green`, `red`,
   * `purple`, `pink`, `lime`, `sky`, `grey`.
   */
  "prefs/background"?: string;

  /** One of: `pirate` or `regular` */
  "prefs/cardAging"?: string;

  /** Determines whether the calendar feed is enabled. */
  "prefs/calendarFeedEnabled"?: boolean;

  /** Name for the green label. 1 - 16,384 characters long. */
  "labelNames/green"?: string;

  /** Name for the yellow label. 1 - 16,384 characters long. */
  "labelNames/yellow"?: string;

  /** Name for the orange label. 1 - 16,384 characters long. */
  "labelNames/orange"?: string;

  /** Name for the red label. 1 - 16,384 characters long. */
  "labelNames/red"?: string;

  /** Name for the purple label. 1 - 16,384 characters long. */
  "labelNames/purple"?: string;

  /** Name for the blue label. 1 - 16,384 characters long. */
  "labelNames/blue"?: string;
}

export interface BoardBackgrounds_MEMBER_UPDATE {
  brightness?: 'dark' | 'light' | 'unknown';

  /** Whether the background should be tiled. */
  tile?: boolean;
}

export interface BoardPlugin {
  id: string;
  name: string;
  public: boolean;
  url: string;
}

export interface BoardPowerUp {
  id: string;
  idBoard: string;
  idPlugin: string;
}

export interface Card {
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

export interface Card_CREATE {
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

export interface Card_UPDATE {
  /** The new name for the card. */
  name?: string;

  /** The new description for the card. */
  desc?: string;

  /** Whether the card should be archived (closed: true). */
  closed?: boolean;

  /** Comma-separated list of member IDs. */
  idMembers?: string;

  /** The ID of the image attachment the card should use as its cover. Or null for none. */
  idAttachmentCover?: string;

  /** The ID of the list the card should be in. */
  idList?: string;

  /** Comma-separated list of label IDs. */
  idLabels?: string;

  /** The ID of the board the card should be on. */
  idBoard?: string;

  /** The position of the card in its list. `top`, `bottom`, or a positive float. */
  pos?: string;

  /** When the card is due, or `null`. */
  due?: string;

  /** Whether the due date should be marked complete. */
  dueComplete?: boolean;

  /** Whether the active member should be subscribed to the card. */
  subscribed?: boolean;

  /** For use with/by the Map Power-Up. */
  address?: string;

  /** For use with/by the Map Power-Up. */
  locationName?: string;

  /** For use with/by the Map Power-Up. Should be `latitude,longitude`. */
  coordinates?: string;
}

export interface CheckItem {
  id: string;
  state: string;
  name: string;
  nameData: string;
  pos: string;
}

export interface CheckItem_UPDATE {
  /** The new name for the checklist item. */
  name?: string;

  /** One of: `complete`, `incomplete` */
  state?: string;

  /** The ID of the checklist this item is in. */
  idChecklist?: string;

  /** `top`, `bottom`, or a positive number. */
  pos?: string;
}

export interface Checklist {
  /** The ID of the checklist. */
  id: string;

  /** The ID of the board the checklist is on. */
  idBoard: string;

  /** The ID of the card the checklist is on. */
  idCard: string;

  /** The name of the checklist. */
  name: string;

  /** 
   * The position of the checklist on the card (relative to any other checklists
   * on the card).
   */
  pos: number;
}

export interface Checklist_CREATE {
  /** The ID of the card that the checklist should be added to. */
  idCard: string;

  /** The name of the checklist. Should be a string of length 1 - 16,384. */
  name?: string;

  /**
   * The position of the checklist on the card. One of: `top`, `bottom`, or a
   * positive number.
   */
  pos?: string;

  /** The ID of a checklist to copy into the new checklist. */
  idChecklistSource?: string;
}

export interface Checklist_UPDATE {
  /** The new name of the checklist being updated. 1 - 16,384 chars long. */
  name?: string;

  /**
   * Determines the position of the checklist on the card.
   * 
   * One of: `top`, `bottom`, or a positive number.
   */
  pos?: string;
}

export interface Checklist_CheckItem_CREATE {
  /**
   * The name of the new CheckItem on the checklist. Should be a string of
   * length 1 - 16,384.
   */
  name: string;

  /**
   * The position of the CheckItem in the checklist. One of: `top`, `bottom`,
   * or a positive number.
   */
  pos?: string;

  /** Determines whether the CheckItem is already checked upon creation. */
  checked?: boolean;
}

export interface ChecklistQuery {
  /**
   * Valid values:
   * 
   * - `all`
   * - `closed`
   * - `none`
   * - `open`
   * - `visible`
   */
  cards?: string;

  /** The check items on the list to return. One of: `all`, `none`. */
  checkItems?: string;

  /**
   * The fields on the CheckItems to return if CheckItems are being returned.
   * 
   * `all` or a comma-separated list of:
   * 
   * - `name`
   * - `nameData`
   * - `pos`
   * - `state`
   * - `type`
   */
  checkItem_fields?: string;

  /**
   * `all` or a comma-separated list of:
   * 
   * - `id`
   * - `idBoard`
   * - `idCard`
   * - `name`
   * - `pos`
   */
  fields?: string;
}

export interface CustomField {
  /** The ID of the Custom Field definition. */
  id: string;

  /**
   * The ID of the model that the Custom Field is defined on. This should always
   * be an ID of a board.
   */
  idModel: string;

  /**
   * The type of model that the Custom Field is being defined for. This should
   * always be `board`.
   */
  modelType: string;

  /**
   * A hash created from the fields of a Custom Field used to manage Custom
   * Fields and values between boards. For more on its use, check out the
   * Grouping Custom Fields Across Boards section of the Custom Fields guide.
   */
  fieldGroup: string;

  /** 
   * The name of the Custom Field. This is displayed to the user in the Trello
   * clients.
   */
  name: string;

  /**
   * The position of the Custom Field. This will be used to determine the order
   * that Custom Fields should be listed when being shown to the user.
   */
  pos: string;

  /** 
   * Determines the type of values that can be used when setting values for
   * Custom Fields on cards.
   */
  type: CustomFieldType;

  /**
   * An array of objects used for Custom Fields of the `list` type. The objects
   * contain data about the options available for the dropdown.
   */
  options: Object[];

  /** An object that contains this custom fields display properties. */
  display: Object;
}

export interface CustomEmoji_CREATE {
  file: File;

  /** Name for the emoji. 2 - 64 characters. */
  name: string;
}

export interface Emoji {
  unified: string;
  native: Object;
  name: string;
  skinVariation: string | null;
  shortName: string;
}

export interface ImageScaled {
	width: number;
	height: number;
	url: string;
	scaled: boolean;
	_id: string;
}

export interface Label {
  /** The ID of the label. */
  id: string;

  /** The ID of the board the label is on. */
  idBoard: string;

  /** The optional name of the label (0 - 16384 chars). */
  name: string;

  /** 
   * The color of the label. Null means no color and the label will not show on
   * the front of cards.
   */
  color: Color;
}

export interface Label_CARD_CREATE {
  /** The optional name of the label (0 - 16384 chars). */
  name?: string;

  /** 
   * The color of the label. Null means no color and the label will not show on
   * the front of cards.
   */
  color: Color;
}

export interface List {
  /** The ID of the list. */
  id: string;

  /** The name of the list. */
  name: string;

  /** Whether the list is closed (archived). */
  closed: boolean;

  /** The ID of the board the list is on. */
  idBoard: string;

  /** The position of the list on the board. */
  pos: number;

  /** Whether the member is subscribed to this list. */
  subscribed: boolean;

  /**
   * A soft limit for number of open cards in the list used by the List Limits
   * Power-Up.
   */
  softLimit: number | null;
}

export interface Member {
  /** The ID of the member. */
  id: string;

  /** 
   * Member profile images are hosted at:
   * `https://trello-avatars.s3.amazonaws.com/{avatarHash}/{size}.png`
   * 
   * `size` can be 30, 50, or 170.
   */
  avatarHash: string;

  /**
   * The URL of the current avatar being used, regardless of whether it is a
   * gravatar or uploaded avatar.
   */
  avatarUrl: string;

  /** The source of the user's avatar - either via "upload" or "gravatar". */
  avatarSource: AvatarSource;


  /** Optional bio for the member. */
  bio: string;

  /** 
   * If the bio includes custom emoji, this object will contain the information
   * necessary to display them.
   */
  bioData: Object;

  /** Whether the member has confirmed their email address after signing up. */
  confirmed: boolean;

  /** The primary email address for the member. You can only read your own. */
  email: string;

  /** The full display member for the member. */
  fullName: string;

  /**
   * Same as **avatarHash** above; member profile images are hosted at:
   * `https://trello-avatars.s3.amazonaws.com/{gravatarHash}/{size}.png`
   * 
   * `Size` can be 30, 50, or 170.
   */
  gravatarHash: string;

  /** An array of board IDs this member is on. */
  idBoards: string[];

  /** An array of organization IDs this member is in. */
  idOrganizations: string[];

  /** An array of enterprise IDs this member is an admin of. */
  idEnterprisesAdmin: string[];

  /** An array of organization IDs this member is an admin of. */
  idPremOrgsAdmin: string[];

  /** The member's initials, used for display when there isn't an avatar set. */
  initials: string;

  /** The types of logins a user can use. */
  loginTypes: LoginType[];

  /**
   * One of: `normal`, `ghost`
   * 
   * A `ghost` is an individual who has been invited to join but has not yet
   * created a Trello account.
  */
  memberType: MemberType;

  oneTimeMessagesDismissed: string[];

  prefs: Prefs;

  // premiumFeatures: Object; // Has absolutely no info on what this is.

  /**
   * `10` - Member has Trello Gold as a result of being in a Business Class team.
   * `37` - Member has monthly Trello Gold.
   * `38` - Member has annual Trello Gold.
   */
  products: number[];

  /**
   * Same as **avatarHash** above - member profile images are hosted at:
   * 
   * `https://trello-avatars.s3.amazonaws.com/{uploadedAvatarHash}/{size}.png`
   * 
   * `size` can be 30, 50, or 170.
   */
  uploadedAvatarHash: string;

  /** The URL of the uploaded avatar if one has been uploaded. */
  uploadedAvatarUrl: string;

  /** The URL to the member's profile page. */
  url: string;

  /** The username for the member. What is shown in @mentions for example. */
  username: string;
}

export interface Member_UPDATE {
  /** New name for the member. Cannot begin or end with a space. */
  fullName?: string;

  /** New initials for the member. 1-4 characters long. */
  initials?: string;

  /**
   * New username for the member. At least 3 characters long, only lowercase
   * letters, underscores, and numbers. Must be unique.
   */
  username?: string;

  bio?: string;

  avatarSource?: AvatarSource;

  prefs_ColorBlind?: boolean;
  prefs_locale?: string;
  
  /** `-1` for disabled, `1`, or `60`. */
  prefs_minutesBetweenSummaries?: number;
}

export interface Membership {
  /** The unique identifier for a given membership. */
  id: string

  /** The MongoID of the member who owns this membership. */
  idMember: string

  /** The type of member the user is. Admin, observer, etc. */
  memberType: MemberType

  /**
   * Whether the user has confirmed their Trello account. Inviting a user via
   * e-mail to the board who does not have a Trello account will result in
   * `unconfirmed: true` until they create a Trello account.
   */
  unconfirmed: boolean

  /** Whether the user's Trello account has been deactivated or not. */
  deactivated: boolean
}

export interface MembershipQuery {
  /** One of: `admins`, `all`, `none`, `normal`. */
  filter: string;

  /** Works for premium organizations only. */
  activity: boolean;

  /**
   * Shows the type of member to the org the user is. For instance, an org admin
   * will have a `orgMemberType` of `admin`.
   */
  orgMemberType: boolean;


}

export interface NewCardRequest {
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

export interface Notification {
  /** The ID of the notification. */
  id: string;

  /** Relevant data regarding the notification. */
  data: Object;

  /** The datetime the notification was triggered. */
  date: Date;

  /** The ID of the member who triggered the notification. */
  idMemberCreator: string;

  /** The type of the notification. */
  type: string;

  /** Whether the notification hasn't been read yet. */
  unread: boolean;
}

export interface Notification_QUERY {
  entities?: boolean;

  display?: boolean;

  filter?: string;

  /**
   * One of:
   * 
   * - `all`
   * - `read`
   * - `unread`
   */
  read_filter?: string;

  /** `all` or a comma-separated list of Notification fields. */
  field?: string;

  /** Max: 1000 */
  limit?: number;

  /** Max: 100 */
  page?: number;

  /** A Notification ID. */
  before?: string;

  /** A Notification ID. */
  since?: string;

  memberCreator?: boolean;

  /** `all` or comma-separated list of Member fields. */
  memberCreator_fields?: string;
}

export interface Options {
  /** The authentication key used to identify your app. */
  apiKey: string;

  /** The authentication token used to authenticate each of your requests. */
  apiToken: string;

  /**
   * The base URL to use for every request sent to the Trello API. By default
   * Trejo uses `https://api.trello.com/1` as the baseUrl parameter. 
   * 
   * Any URL that you provide should **NOT** end in a slash, this is because all
   * of the methods made available by the library add a slash at the beginning
   * of their requests so by ending your URL with one, you'll end up with
   * double-slashes.
   */
  baseUrl?: string;

  /**
   * By default, Trejo will send at least one header with the key/value pair of
   * `{ 'Content-Type' = 'application/json' }`. If you wish to override this or
   * provide additional properties such as CORS settings provide the key/value
   * pairs as an object and they'll be merged w/ the existing headers object.
   * 
   * *NOTE: If you provide a key with the same value as the one above, you will*
   * *overwrite it. Specifically useful if you want something other than JSON*
   * *returned by the API.*
   */
  headers?: Object;

  /**
   * Determines whether or not you would like the headers returned from the API
   * to also be returned with every method/call you execute. By default, this is
   * set to false, so you will only receive the request object(s). However, if
   * you need the values of the headers for whatever reason, setting this to
   * true will have every return object look like the example. Where data is the
   * value you requested, and headers (obviously) contains the headers returned.
   * 
   * @example { data: Object, headers: Object }
   */
  includeHeaders?: boolean;
}

export interface Organization {
  /** The ID of the organization. */
  id: string;
  
  billableMemberCount: number;

  /** The description for the team. */
  desc: string;

  /**
   * If there are custom emoji in the `desc`, this will contain information
   * about them.
   */
  descData: Object;

  /** The name for the team. For example: `Trello Inc` */
  displayName: string;
  
  /** An array of board IDs that are in the team. */
  idBoards: string[];
  
  logoHash: string;
  
  memberships: Membership[];

  /** The programmatic name for the team. For example: `trelloinc` */
  name: string;
  
  // powerUps: Object; // Has no info on what this actually is.

  /** The preferences (settings) for the team. */
  prefs: Prefs;

  /** The URL to the team page on Trello. */
  url: string;

  website: string;

  // premiumFeatures: ?; // Has no info on what this actually is.
  // products: ?; // Has no info on what this actually is.
  // invitations: ?; // Has absolutely no information on the API regarding what this is...
  // invited: ?; // Has absolutely no information on the API regarding what this is...
}

export interface Organization_MEMBER_QUERY {
  /**
   * One of:
   * 
   * - `all`
   * - `members`
   * - `none`
   * - `public`
   * 
   * _NOTE: `members` filters to only private teams._
   */
  filter?: string;

  /** `all` or comma-separated list of Organization fields. */
  fields?: string;

  paid_account?: boolean;
}

export interface Permission {
  idModel: string;
  modelType: string;
  read: boolean;
  write: boolean;
}

export interface Prefs {
  sendSummaries: boolean;
  minutesBetweenSummaries: number;
  minutesBeforeDeadlineToNotify: number;
  colorBlind: boolean;
  locale: string;
  timezoneInfo: TimezoneInfo;
  twoFactor: TwoFactor;
  privacy: Privacy;
}

export interface Preview {
	bytes: number;
	url: string;
	height: number;
	width: number;
	_id: string;
	scaled: boolean;
}

export interface Privacy {
  fullName: string;
  avatar: string;
}

export interface Reaction {
  id: string;
  idMember: string;
  idModel: string;
  idEmoji: string;
  member: Member;
  emoji: Emoji;
}

export interface SavedSearch_CREATE {
  /** The name for the saved search. */
  name: string;

  /** The search query. */
  query: string;

  /** The position of the saved search. `top`, `bottom`, or a positive float. */
  pos: string;
}

export interface SavedSearch_UPDATE {
  /** The new name for the SavedSearch. */
  name?: string;

  /** The new search query. */
  query?: string;

  /** New position for saves search. */
  pos?: 'top' | 'bottom' | number;
}

export interface StarBoard_QUERY {
  /** The ID of the Board to star. */
  idBoard: string;

  /** 
   * The positiion of th newly starred board. `top`, `bottom`, or a positive
   * float.
   */
  pos: string;
}

export interface Sticker {
	id: string;
	top: number;
	left: number;
	zIndex: number;
	rotate: number;
	image: string;
	imageUrl: string;
	imageScaled: ImageScaled[];
}

export interface Sticker_CREATE {
  /**
   * For custom stickers, the id of the sticker. For default stickers, the
   * string identifier (like 'taco-cool').
   */
  image: Sticker_DEFAULTS | string;

  /** The top position of the sticker, from -60 to 100. */
  top: number;

  /** The top position of the sticker, from -60 to 100. */
  left: number;

  /** The z-index of the sticker. */
  zIndex: number;

  /** The rotation of the sticker. */
  rotate?: number;
}

export interface Sticker_UPDATE {
	top?: number;
	left?: number;
	zIndex?: number;
	rotate?: number;
}

export interface TimezoneInfo {
  timezoneNext: string;
  dateNext: string;
  offsetNext: number;
  timezoneCurrent: string;
  offsetCurrent: number;
}

export interface Token {
  id: string;
  identifier: string;
  idMember: string;
  dateCreated: string;
  dateExpires: string | null;
  permissions: Object[];
  webhooks: Webhook[];
}

export interface TwoFactor {
  enabled: boolean;
  needsNewBackups: boolean;
}

export interface Webhook {
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
// #endregion Standard Models

// #region Nested Resource Models
/**
 * The parameters used when requesting a nested Action resource via a query
 * parameter. Other parameters may be available via a ActionNestedURL request.
 */
export interface ActionNestedQuery {
  /** Default: `false` */
  actions_entities: boolean;
  
  /** Default: `false` */
  actions_display: boolean;

  /**
   * Default: `list`
   * Options: `count`, `list`, `minimal`
   */
  actions_format: string;

  /**
   * Default: none
   * ISO Datetime or Mongo ID
   */
  actions_since: string;

  /**
   * Default: `50`
   * Max: `1000`
   */
  actions_limit: number;

  action_fields: string;
  action_member: boolean;
  action_member_fields: string;
  action_memberCreator: boolean;
  action_memberCreator_fields: string;
}

export interface BoardNestedQuery {
  /**
   * Default: `none`
   * Options: `all` or a comma-separated list of the following:
   * 
   * - `open`
   * - `closed`
   * - `members`
   * - `organization`
   * - `public`
   * - `starred`
   */
  boards?: string;
  
  /**
   * Default: `all`
   * Options: `all` or a comma-separated list of the following:
   * 
   * - `id`
   * - `name`
   * - `desc`
   * - `descData`
   * - `closed`
   * - `idOrganization`
   * - `pinned`
   * - `url`
   * - `shortUrl`
   * - `prefs`
   * - `labelNames`
   * - `starred`
   * - `limits`
   * - `memberships`
   */
  board_fields?: string;

  /**
   * `all` or a comma-separated list of the following:
   * 
   * - `addAttachmentToCard`
   * - `addChecklistToCard`
   * - `addMemberToBoard`
   * - `addMemberToCard`
   * - `addMemberToOrganization`
   * - `addToOrganizationBoard`
   * - `commentCard`
   * - `convertToCardFromCheckItem`
   * - `copyBoard`
   * - `copyCard`
   * - `copyCommentCard`
   * - `createBoard`
   * - `createCard`
   * - `createList`
   * - `createOrganization`
   * - `deleteAttachmentFromCard`
   * - `deleteBoardInvitation`
   * - `deleteCard`
   * - `deleteOrganizationInvitation`
   * - `disablePowerUp`
   * - `emailCard`
   * - `enablePowerUp`
   * - `makeAdminOfBoard`
   * - `makeNormalMemberOfBoard`
   * - `makeNormalMemberOfOrganization`
   * - `makeObserverOfBoard`
   * - `memberJoinedTrello`
   * - `moveCardFromBoard`
   * - `moveCardToBoard`
   * - `moveListFromBoard`
   * - `moveListToBoard`
   * - `removeChecklistFromCard`
   * - `removeFromOrganizationBoard`
   * - `removeMemberFromCard`
   * - `unconfirmedBoardInvitation`
   * - `unconfirmedOrganizationInvitation`
   * - `updateBoard`
   * - `updateCard`
   * - `updateCard:closed`
   * - `updateCard:desc`
   * - `updateCard:idList`
   * - `updateCard:name`
   * - `updateCheckItemStateOnCard`
   * - `updateChecklist`
   * - `updateList`
   * - `updateList:closed`
   * - `updateList:name`
   * - `updateMember`
   * - `updateOrganization`
   */
  board_actions?: string;

  /** Default: `false` */
  board_actions_entities?: boolean;

  /** Default: `false` */
  board_actions_display?: boolean;
  
  /**
   * Default: `list`
   * Options: `count`, `list`, or `minimal`
   */
  board_actions_format?: string;

  /** Options: A date, `null`, or `lastView`. */
  board_actions_since?: string;

  /**
   * Default: `50`
   * Max: `1000`
   */
  board_actions_limit?: string;

  /**
   * Options: `all` or a comma-separated list of the following:
   * 
   * - `id`
   * - `data`
   * - `date`
   * - `idMemberCreator`
   * - `type`
   */
  board_action_fields?: string;

  /**
   * Default: `none`
   * Options: `all`, `closed`, `none`, or `open`.
   */
  board_lists?: string;
}

export interface CardNestedQuery {
  /**
   * Default: `none`
   * 
   * Options:
   * - `all`
   * - `closed`
   * - `none`
   * - `open` - Includes cards that are open in lists that have been archived.
   * - `visible` - Only returns cards in lists that are not closed.
   */
  cards?: 'all' | 'closed' | 'none' | 'open' | 'visible';
  
  /**
   * Default: `all`
   * Options: `all` or a comma-separated list of the following:
   * 
   * - `all`
   * - `id`
   * - `badges`
   * - `checkItemStates`
   * - `closed`
   * - `dateLastActivity`
   * - `desc`
   * - `descData`
   * - `due`
   * - `dueComplete`
   * - `idAttachmentCover`
   * - `idBoard`
   * - `idChecklists`
   * - `idLabels`
   * - `idList`
   * - `idMembers`
   * - `idMembersVoted`
   * - `idShort`
   * - `labels`
   * - `manualCoverAttachment`
   * - `name`
   * - `pos`
   * - `shortLink`
   * - `shortUrl`
   * - `subscribed`
   * - `url`
   * - `address`
   * - `locationName`
   * - `coordinates`
   */
  card_fields?: string;

  /** Default: `false` */
  card_members?: boolean;

  /**
   * Default:
   * `id,avatarHash,avatarUrl,initials,fullName,username,confirmed,member`
   * Options: `all` or a comma-separated list of the following:
   * 
   * - `avatarHash`
   * - `avatarUrl`
   * - `avatarSource`
   * - `bio`
   * - `bioData`
   * - `confirmed`
   * - `email`
   * - `fullName`
   * - `gravatarHash`
   * - `idBoards`
   * - `idOrganizations`
   * - `idEnterprisesAdmin`
   * - `initials`
   * - `loginTypes`
   * - `memberType`
   * - `oneTimeMessagesDismissed`
   * - `prefs`
   * - `premiumFeatures`
   * - `products`
   * - `uploadedAvatarHash`
   * - `uploadedAvatarUrl`
   * - `url`
   * - `username`
   */
  card_member_fields?: string;

  /** Options: `true`, `false`, or `cover` */
  card_attachments?: string;

  /**
   * Default: `url,previews`
   * Options: `all` or a comma-separated list of the following:
   * 
   * - `id`
   * - `bytes`
   * - `date`
   * - `edgeColor`
   * - `idMember`
   * - `isUpload`
   * - `mimeType`
   * - `name`
   * - `pos`
   * - `previews`
   * - `url`
   */
  card_attachment_fields?: string;

  /** Default: `false` */
  card_stickers?: boolean;

  /** 
   * Default: none
   * Options: ISO Timestamp
   */
  cards_modifiedSince?: Date;

  /** Default: `false` */
  card_customFieldItems?: boolean;
}

export interface ChecklistNestedQuery {
  checklists?: string;
  
  checklist_fields?: string;
  
  checkItems?: string;

  /**
   * Default: `name,nameData,pos,state`
   * Options: A comma-separated list of:
   * 
   * - `all`
   * - `name`
   * - `nameDat`
   * - `type`
   * - `pos`
   * - `state`
   * - `creationMethod`
   */
  checkItem_fields?: string;
}

export interface CustomFieldNestedQuery {
  /** Default: `false`; `true`: include the custom fields. */
	customFields?: boolean;
}

export interface LabelNestedQuery {
  /** 
   * Default: `none`
   * One of: `all` or `none`
   */
  labels?: string;

  /**
   * Default: `all`
   * Options:
   * 
   * - `all`
   * - `color`
   * - `idBoard`
   * - `name`
   * - `uses`
   */
  label_fields?: string;

  /** A number from `0` to `1000`. Defaults to `50`. */
  labels_limit: number;
}

export interface ListNestedQuery {
  /**
   * Default: `none`
   * One of: `all`, `closed`, `none`, `open`
   * Which type of lists should be returned.
   */
  lists?: string;

  /**
   * Default: `all`
   * Options:
   * 
   * - `all`
   * - `id`
   * - `name`
   * - `closed`
   * - `idBoard`
   * - `pos`
   * - `subscribed`
   * - `softLimit`
   */
  list_fields?: string;
}

export interface MemberNestedQuery {
  /**
   * Default: `none`
   * Options: one of:
   *
   * - `none`
   * - `normal`
   * - `admins`
   * - `owners`
   * - `all`
   */
  members?: string;
  
  /**
   * Default:
   * `id,avatarHash,avatarUrl,initials,fullName,username,confirmed,memberType`
   * 
   * Options:
   * - `all`
   * - `avatarHash`
   * - `avatarUrl`
   * - `avatarSource`
   * - `bio`
   * - `bioData`
   * - `confirmed`
   * - `email`
   * - `fullName`
   * - `gravatarHash`
   * - `idBoards`
   * - `idOrganizations`
   * - `idEnterprisesAdmin`
   * - `initials`
   * - `loginTypes`
   * - `memberType`
   * - `oneTimeMessagesDismissed`
   * - `prefs`
   * - `premiumFeatures`
   * - `products`
   * - `uploadedAvatarHash`
   * - `uploadedAvatarUrl`
   * - `url`
   * - `username`
   */
  member_fields?: string;
}

export interface NotificationNestedQuery {
	/**
   * `all` or comma-separated list of:
   * 
   * - `addAdminToBoard`
   * - `addAdminToOrganization`
   * - `addedAttachmentToCard`
   * - `addedMemberToCard`
   * - `addedToBoard`
   * - `addedToCard`
   * - `addedToOrganization`
   * - `cardDueSoon`
   * - `changeCard`
   * - `closeBoard`
   * - `commentCard`
   * - `createdCard`
   * - `declinedInvitationToBoard`
   * - `declinedInvitationToOrganization`
   * - `invitedToBoard`
   * - `invitedToOrganization`
   * - `makeAdminOfBoard`
   * - `makeAdminOfOrganization`
   * - `memberJoinedTrello`
   * - `mentionedOnCard`
   * - `removedFromBoard`
   * - `removedFromCard`
   * - `removedFromOrganization`
   * - `removedMemberFromCard`
   * - `unconfirmedInvitedToBoard`
   * - `unconfirmedInvitedToOrganization`
   * - `updateCheckItemStateOnCard`
   */
  notifications?: string;

  /** Default: `false` */
  notifications_entities?: boolean;

  /** Default: `false` */
  notifications_display?: boolean;

  /** Default: 50; Max: 1000 */
  notifications_limit?: number;

  /** 
   * Default: `all`
   * 
   * `all` or a comma-separated list of:
   * - `data`
   * - `date`
   * - `idMemberCreator`
   * - `type`
   * - `unread`
   */
  notification_fields?: string;

  /** Default: `true` */
  notification_memberCreator?: boolean;

  /** 
   * Default: `avatarHash,fullName,initials,username`
   * 
   * Accepts the following values:
   * 
   * - `avatarHash`
   * - `avatarUrl`
   * - `avatarSource`
   * - `bio`
   * - `bioData`
   * - `confirmed`
   * - `email`
   * - `fullName`
   * - `gravatarHash`
   * - `idBoards`
   * - `idOrganizations`
   * - `idEnterprisesAdmin`
   * - `initials`
   * - `loginTypes`
   * - `memberType`
   * - `oneTimeMessagesDismissed`
   * - `prefs`
   * - `premiumFeatures`
   * - `products`
   * - `uploadedAvatarHash`
   * - `uploadedAvatarUrl`
   * - `url`
   * - `username`
   */
  notification_memberCreator_fields?: string;

  /** An id or `null`. */
  notification_before?: string | null;

  /** An id or `null`. */
  notification_since?: string | null;
}

export interface ReactionNestedQuery {
  /** Boolean to return reactions entities or not (default: `false`). */
  reactions?: boolean;
  
  /** Boolean to return reactions summary entities or not (default: `false`)/ */
  reactionsSummary?: boolean;

  /**
   * Boolean to return nested member entities for reactions or not (default:
   * `false`).
   */
  reactions_member?: boolean;

  /**
   * The fields to be returned if the member object is being returned. Accepted
   * values are:
   * 
   * - `avatarHash`
   * - `avatarUrl`
   * - `avatarSource`
   * - `bio`
   * - `bioData`
   * - `confirmed`
   * - `email`
   * - `fullName`
   * - `gravatarHash`
   * - `idBoards`
   * - `idOrganizations`
   * - `idEnterprisesAdmin`
   * - `initials`
   * - `loginTypes`
   * - `memberType`
   * - `oneTimeMessagesDismissed`
   * - `prefs`
   * - `premiumFeatures`
   * - `products`
   * - `uploadedAvatarHash`
   * - `uploadedAvatarUrl`
   * - `url`
   * - `username`
   */
  reactions_member_fields?: string;

  /** 
   * Boolean to return nested emoji entities for reactions or not (default:
   * `true`)
   */
  reactions_emoji?: boolean;
}
// #endregion Nested Resource Models

// #region Enums
export enum ActionType {
  acceptEnterpriseJoinRequest,
  addAttachmentToCard,
  addChecklistToCard,
  addLabelToCard,
  addMemberToBoard,
  addMemberToCard,
  addMemberToOrganization,
  addOrganizationToEnterprise,
  addToEnterprisePluginWhitelist,
  addToOrganizationBoard,
  commentCard,
  convertToCardFromCheckItem,
  copyBoard,
  copyCard,
  copyChecklist,
  createLabel,
  copyCommentCard,
  createBoard,
  createBoardInvitation,
  createBoardPreference,
  createCard,
  createList,
  createOrganization,
  createOrganizationInvitation,
  deleteAttachmentFromCard,
  deleteBoardInvitation,
  deleteCard,
  deleteCheckItem,
  deleteLabel,
  deleteOrganizationInvitation,
  disableEnterprisePluginWhitelist,
  disablePlugin,
  disablePowerUp,
  emailCard,
  enableEnterprisePluginWhitelist,
  enablePlugin,
  enablePowerUp,
  makeAdminOfBoard,
  makeAdminOfOrganization,
  makeNormalMemberOfBoard,
  makeNormalMemberOfOrganization,
  makeObserverOfBoard,
  memberJoinedTrello,
  moveCardFromBoard,
  moveCardToBoard,
  moveListFromBoard,
  moveListToBoard,
  removeAdminFromBoard,
  removeAdminFromOrganization,
  removeChecklistFromCard,
  removeFromEnterprisePluginWhitelist,
  removeFromOrganizationBoard,
  removeLabelFromCard,
  removeMemberFromBoard,
  removeMemberFromCard,
  removeMemberFromOrganization,
  removeOrganizationFromEnterprise,
  unconfirmedBoardInvitation,
  unconfirmedOrganizationInvitation,
  updateBoard,
  updateCard,
  updateCheckItem,
  updateCheckItemStateOnCard,
  updateChecklist,
  updateLabel,
  updateList,
  updateMember,
  updateOrganization,
  voteOnCard
}

/** The names of the fields that a Action object can contain. */
export enum ActionFields {
  id,
  data,
  date,
  idMemberCreator,
  type
}

export enum AvatarSource {
  UPLOAD = 'upload',
  GRAVATAR = 'gravatar'
}

/** The names of the fields that a Board object can contain. */
export enum BoardFields {
  id,
  name,
  desc,
  descData,
  closed,
  idOrganization,
  pinned,
  url,
  shortUrl,
  prefs,
  labelNames,
  starred,
  limits,
  memberships
}

/** The names of the fields that a Card object can contain. */
export enum CardFields {
  id,
  badges,
  checkItemStates,
  closed,
  dateLastActivity,
  desc,
  descData,
  due,
  dueComplete,
  idAttachmentCover,
  idBoard,
  idChecklists,
  idLabels,
  idList,
  idMembers,
  idMembersVoted,
  idShort,
  labels,
  manualCoverAttachment,
  name,
  pos,
  shortLink,
  shortUrl,
  subscribed,
  url,
  address,
  locationName,
  coordinates
}

/** The names of the fields that a CustomField object can contain. */
export enum CustomFieldFields {
  id,
  idModel,
  modelType,
  fieldGroup,
  name,
  pos,
  type,
  options,
  display
}

/** The names of the fields that a Label object can contain. */
export enum LabelFields {
  id,
  idBoard,
  name,
  color
}

/** The names of the fields that a List object can contain. */
export enum ListFields {
  id,
  name,
  closed,
  idBoard,
  pos,
  subscribed,
  softLimit
}

/** The names of the fields that a Member object can contain. */
export enum MemberFields {
  /** The ID of the member. */
  id,

  /** 
   * Member profile images are hosted at:
   * `https://trello-avatars.s3.amazonaws.com/{avatarHash}/{size}.png`
   * 
   * `size` can be 30, 50, or 170.
   */
  avatarHash,

  /**
   * The URL of the current avatar being used, regardless of whether it is a
   * gravatar or uploaded avatar.
   */
  avatarUrl,

  /** The source of the user's avatar - either via "upload" or "gravatar". */
  avatarSource,

  /** Optional bio for the member. */
  bio,

  /** 
   * If the bio includes custom emoji, this object will contain the information
   * necessary to display them.
   */
  bioData,

  /** Whether the member has confirmed their email address after signing up. */
  confirmed,

  /** The primary email address for the member. You can only read your own. */
  email,

  /** The full display member for the member. */
  fullName,

  /**
   * Same as **avatarHash** above; member profile images are hosted at:
   * `https://trello-avatars.s3.amazonaws.com/{gravatarHash}/{size}.png`
   * 
   * `Size` can be 30, 50, or 170.
   */
  gravatarHash,

  /** An array of board IDs this member is on. */
  idBoards,

  /** An array of organization IDs this member is in. */
  idOrganizations,

  /** An array of enterprise IDs this member is an admin of. */
  idEnterprisesAdmin,

  /** An array of organization IDs this member is an admin of. */
  idPremOrgsAdmin,

  /** The member's initials, used for display when there isn't an avatar set. */
  initials,

  /** The types of logins a user can use. */
  loginTypes,

  /**
   * One of: `normal`, `ghost`
   * 
   * A `ghost` is an individual who has been invited to join but has not yet
   * created a Trello account.
  */
  memberType,

  oneTimeMessagesDismissed,

  prefs,

  // premiumFeatures: Object; // Has absolutely no info on what this is.

  /**
   * `10` - Member has Trello Gold as a result of being in a Business Class team.
   * `37` - Member has monthly Trello Gold.
   * `38` - Member has annual Trello Gold.
   */
  products,

  /**
   * Same as **avatarHash** above - member profile images are hosted at:
   * 
   * `https://trello-avatars.s3.amazonaws.com/{uploadedAvatarHash}/{size}.png`
   * 
   * `size` can be 30, 50, or 170.
   */
  uploadedAvatarHash,

  /** The URL of the uploaded avatar if one has been uploaded. */
  uploadedAvatarUrl,

  /** The URL to the member's profile page. */
  url,

  /** The username for the member. What is shown in @mentions for example. */
  username
}

/** The names of the fields that a Notification object can contain. */
export enum NotificationFields {
  id,
  data,
  date,
  idMemberCreator,
  type,
  unread
}

/** The names of the fields that a Organization object can contain. */
export enum OrganizationFields {
  id,
  billableMemberCount,
  desc,
  descData,
  displayName,
  idBoards,
  invitations,
  invited,
  logoHash,
  memberships,
  name,
  powerUps,
  prefs,
  premiumFeatures,
  products,
  url,
  website
}

/** The names of the available default stickers. */
export enum Sticker_DEFAULTS {
  CHECK = 'check',
  HEART = 'heart',
  WARNING = 'warning',
  CLOCK = 'clock',
  SMILE = 'smile',
  LAUGH = 'laugh',
  HUH = 'huh',
  FROWN = 'frown',
  THUMBSUP = 'thumbsup',
  THUMBSDOWN = 'thumbsdown',
  STAR = 'star',
  ROCKETSHIP = 'rocketship',
  TACO_LOVE = 'taco-love',
  TACO_CONFUSED = 'taco-confused',
  TACO_COOL = 'taco-cool',
  TACO_ANGRY = 'taco-angry',
  TACO_CELEBRATE = 'taco-celebrate',
  TACO_ROBOT = 'taco-robot',
  TACO_ALERT = 'taco-alert',
  TACO_ACTIVE = 'taco-active',
  TACO_MONEY = 'taco-money',
  TACO_READING = 'taco-reading',
  TACO_TROPHY = 'taco-trophy',
  TACO_SLEEPING = 'taco-sleeping',
  TACO_PIXEL = 'taco-pixel',
  TACO_PROTO = 'taco-proto',
  TACO_EMBARRASSED = 'taco-embarrassed',
  TACO_CLEAN = 'taco-clean',
  PETE_HAPPY = 'pete-happy',
  PETE_LOVE = 'pete-love',
  PETE_BROKEN = 'pete-broken',
  PETE_ALERT = 'pete-alert',
  PETE_TALK = 'pete-talk',
  PETE_VACATION = 'pete-vacation',
  PETE_CONFUSED = 'pete-confused',
  PETE_SHIPPED = 'pete-shipped',
  PETE_BUSY = 'pete-busy',
  PETE_COMPLETED = 'pete-completed',
  PETE_SPACE = 'pete-space',
  PETE_SKETCH = 'pete-sketch',
  PETE_GHOST = 'pete-ghost',
  PETE_AWARD = 'pete-award',
  PETE_MUSIC = 'pete-music'
}

/** The names of the fields that a Webhook object can contain. */
export enum WebhookFields {
  id,
  description,
  idModel,
  callbackURL,
  active
}

/** The names of the fields that a Checklist object can contain. */
export enum BoardBackgrounds {
  ALL = 'all',
  CUSTOM = 'custom',
  DEFAULT = 'default',
  NONE = 'none',
  PREMIUM = 'premium'
}

export enum ChecklistFields {
  id,
  idBoard,
  idCard,
  name,
  pos
}

export enum Color {
  YELLOW = 'yellow',
  PURPLE = 'purple',
  BLUE = 'blue',
  RED = 'red',
  GREEN = 'green',
  ORANGE = 'orange',
  BLACK = 'black',
  SKY = 'sky',
  PINK = 'pink',
  LIME = 'lime',
  NULL = 'null'
}

export enum CustomFieldType {
  NUMBER = 'number', DATE = 'date',
  TEXT = 'text', CHECKBOX = 'checkbox',
  LIST = 'list'
}

export enum NestedListType {
  ALL = 'all', CLOSED = 'closed', NONE = 'none', OPEN = 'open'
}

export enum LoginType {
  PASSWORD = 'password', SAML = 'saml',
  GOOGLE = 'google', ANDROID = 'android'
}

export enum MemberType {
  ADMIN = 'admin',
  OBSERVER = 'observer',
  NORMAL = 'normal',
  GHOST = 'ghost'
}

export enum NestedMemberType {
  NONE = 'none',
  NORMAL = 'normal',
  ADMINS = 'admins',
  OWNERS = 'owners',
  ALL = 'all'  
}
// #endregion Enums

// #region Custom Models
export interface APIResponse {
  /** The data contained in the response from the API. */
  data: Object;

  /** The headers contained in the response from the API. */
  headers: Object;
}

export interface Member_QUERY {
  actions?: ActionNestedQuery;
  
  boards?: BoardNestedQuery;

  boardBackgrounds?: string;

  /**
   * `all` or a comma-separated list of:
   * 
   * - `closed`
   * - `members`
   * - `open`
   * - `organization`
   * - `pinned`
   * - `public`
   * - `starred`
   * - `unpinned`
   */
  boardsInvited?: string;

  /** `all` or comma-separated list of Board fields. */
  boardsInvited_fields?: string;

  boardStars?: boolean;

  cards?: CardNestedQuery;

  /** `all` or `none` */
  customBoardBackgrounds?: string;

  /** `all` or `none` */
  customEmoji?: string;

  /** `all` or `none` */
  customStickers?: string;

  /** `all` or a comma-separated list of Member fields. */
  fields?: string;

  notifications?: NotificationNestedQuery;

  /** 
   * One of:
   * 
   * - `all`
   * - `members`
   * - `none`
   * - `public`
   */
  organizations?: string;

  /** `all` or a comma-separated list of Organization fields. */
  organization_fields?: string;

  organization_paid_account?: boolean;

  /** 
   * One of:
   * 
   * - `all`
   * - `members`
   * - `none`
   * - `public`
   */
  organizationsInvited?: string;

  /** `all` or a comma-separated list of Organization fields. */
  organizationsInvited_fields?: string;

  paid_account?: boolean;

  savedSearches?: boolean;

  /** `all` or `none` */
  tokens?: string;
}
// #endregion Custom Models
