const uuid = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'Title',
    order = 0,
    description = 'Some description',
    userId = null,
    boardId = null,
    columnId = null
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  setTitle(title = 'Title') {
    this.title = title;
  }

  setOrder(order = 0) {
    this.order = order;
  }

  setDescription(description = 'description') {
    this.description = description;
  }

  setUserId(userId = null) {
    this.userId = userId;
  }

  setBoardId(boardId = null) {
    this.boardId = boardId;
  }

  setColumnId(columnId = null) {
    this.columnId = columnId;
  }

  static toResponse(task) {
    return task;
  }
}

module.exports = Task;
