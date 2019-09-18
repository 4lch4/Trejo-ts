import BaseEndpoint from "./endpoints/BaseEndpoint";
import Boards from "./endpoints/Boards";
import Cards from "./endpoints/Cards";
import Checklists from "./endpoints/Checklists";
import Labels from "./endpoints/Labels";
import Members from "./endpoints/Members";
import { Options } from "./utils/shared";

export = class Trejo extends BaseEndpoint {
  boards(opts?: Options) {
    return new Boards(opts ? opts : { apiKey: this.apiKey, apiToken: this.apiToken })
  }

  cards(opts?: Options) {
    return new Cards(opts ? opts : { apiKey: this.apiKey, apiToken: this.apiToken })
  }

  checklists(opts?: Options) {
    return new Checklists(opts ? opts : { apiKey: this.apiKey, apiToken: this.apiToken })
  }

  labels(opts?: Options) {
    return new Labels(opts ? opts : { apiKey: this.apiKey, apiToken: this.apiToken })
  }

  members (opts?: Options) {
    return new Members(opts ? opts : { apiKey: this.apiKey, apiToken: this.apiToken })
  }

  webhooks (opts?: Options) {
    return new Labels(opts ? opts : { apiKey: this.apiKey, apiToken: this.apiToken })
  }
}
