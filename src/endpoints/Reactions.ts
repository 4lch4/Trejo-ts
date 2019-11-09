import { Action, Emoji, Emoji_QUERY, Reaction, ReactionSummary, Reaction_CREATE } from "../utils/shared";
import BaseEndpoint from "./BaseEndpoint";

export default class Reactions extends BaseEndpoint {
  async getEmoji(queryParams?: Emoji_QUERY): Promise<Emoji[] | { data: Emoji[], headers: Object }> {
    return this.performRequest('GET', `/emoji`, queryParams);
  }

  async getActionReactions(id: string, queryParams: { member?: boolean, emoji?: boolean }): Promise<Reaction[] | { data: Reaction[], headers: Object }> {
    return this.performRequest('GET', `/actions/${id}/reactions`, queryParams);
  }

  async getActionReaction(actionId: string, reactionId: string, queryParams: { member?: boolean, emoji?: boolean }): Promise<Reaction[] | { data: Reaction[], headers: Object }> {
    return this.performRequest('GET', `/actions/${actionId}/reactions/${reactionId}`, queryParams);
  }

  async getActionReactionSummary(id: string): Promise<ReactionSummary | { data: ReactionSummary, headers: Object }> {
    return this.performRequest('GET', `/actions/${id}/reactionsSummary`);
  }

  async addReactionToAction(id: string, bodyParams: Reaction_CREATE): Promise<Action | { data: Action, headers: Object }> {
    return this.performBodyRequest('POST', `/actions/${id}/reactions`, bodyParams)
  }

  async deleteActionReaction(actionId: string, reactionId: string): Promise<Action | { data: Action, headers: Object }> {
    return this.performRequest('DELETE', `/actions/${actionId}/reactions/${reactionId}`);
  }
}