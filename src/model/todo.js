import { getId } from "../util/common.js";

export class Todo {
  constructor(content) {
    this.id = getId();
    this.content = content;
    this.completed = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
