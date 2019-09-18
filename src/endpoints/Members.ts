import { Board } from '../utils/shared';
import BaseEndpoint from './BaseEndpoint';

export default class Members extends BaseEndpoint {
	/**
	 * Retrieves all of the boards for the user with the given id and returns the
	 * fields specified in the fields parameter.
	 * 
	 * @param id The id of the user whose boards you wish to retrieve. `(default: 'me')`
	 * @param fields The fields you wish to return from the boards. `(default: ['name', 'url'])`
	 */
  async getBoards (id = 'me', fields = 'name,url'): Promise<Board[] | { data: Board[], headers: Object }> {
    return this.performRequest('GET', `/members/${id}/boards?fields=${fields}`)
  }

  async getBoardByName (name: string, id = 'me', fields = 'name,url'): Promise<Board | undefined> {
    const res = await this.performRequest('GET', `/members/${id}/boards?fields=${fields}`);

    for (const board of res.data) {
      if (board.name === name) return board;
    }

    return undefined;
  }

  // async getMember (id) {

  // }
}
