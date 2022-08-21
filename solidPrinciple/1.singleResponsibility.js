// each class hase one responsibility
// bad practice
// journal class have tow responsibility :
// 1 . manage entry
// 2 . manage prisistance
const fs = require("fs");
class journal {
  entries = [];

  constructor() {
    this.entries = [];
  }

  addEntry(entry) {
    this.entries.push(entry);
  }

  removeEntry(entry) {
    const index = this.entries.indexOf(entry);
    delete this.entries[index];
  }

  toString() {
    return this.entries.map((entry, idx) => `${idx} : ${entry}`).join("\n");
  }

  async saveOnFile(filename) {
    try {
      await fs.promises.writeFile(filename, this.toString(), {
        encoding: "utf-8",
      });
      return true;
    } catch (error) {
      return new Error(`can not save on file : ${filename}`);
    }
  }

  async readFromFile(filename) {}
}
// good practice
class journal {
  entries = [];

  constructor() {
    this.entries = [];
  }

  addEntry(entry) {
    this.entries.push(entry);
  }

  removeEntry(entry) {
    const index = this.entries.indexOf(entry);
    delete this.entries[index];
  }

  toString() {
    return this.entries.map((entry, idx) => `${idx} : ${entry}`).join("\n");
  }
}

class filePresistance {
  async saveOnFile(filename, obj) {
    try {
      await fs.promises.writeFile(filename, obj.toString(), {
        encoding: "utf-8",
      });
      return true;
    } catch (error) {
      return new Error(`can not save on file : ${filename}`);
    }
  }

  async readFromFile(filename) {}
}
