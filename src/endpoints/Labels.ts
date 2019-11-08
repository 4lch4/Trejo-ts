import BaseEndpoint from './BaseEndpoint'

export default class Labels extends BaseEndpoint {
  /**
   * Get information about a label by ID. 
   *
   * @param id The ID of the label to retrieve.
   * @param fields The label fields you wish to retrieve.
   */
  async getLabel(id: string, fields = 'all'): Promise<Label | {
    data: Label,
    headers: Object
  }> { return this.performRequest('GET', `/labels/${id}`, { fields: fields }) }

  async updateLabel(id: string, name: string, color: Color): Promise<Label | {
    data: Label,
    headers: Object
  }> {
    let params = []
    if (name) params.push({ name: name })
    if (color) params.push({ color: color })

    return this.performRequest('PUT', `/labels/${id}`, params)
  }

  async updateLabelColor(id: string, color: Color): Promise<Label | {
    data: Label,
    headers: Object
  }> { return this.performRequest('PUT', `/labels/${id}`, { color: color }) }

  async updateLabelName(id: string, name: string): Promise<Label | {
    data: Label,
    headers: Object
  }> { return this.performRequest('PUT', `/labels/${id}`, { name: name }) }

  async createLabel(label: Label): Promise<Label | {
    data: Label,
    headers: Object
  }> { return this.performRequest('POST', `/labels`, label) }

  async deleteLabel(id: string): Promise<Object | {
    data: Object,
    headers: Object
  }> { return this.performRequest('DELETE', `/labels/${id}`) }
}

declare interface Label {
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

declare enum Color {
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
