class Message {
  constructor(author, time, text) {
    this.author = author;
    this.time = time;
    this.text = text;
  }
  toString() {
    console.log(`${this.time} ${this.author} ${this.text}`);
  }
}

class Messenger {
  constructor(history) {
    this.history = [];
  }

  gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }
  send(author, text) {
    this.history.push(new Message(author, this.gettime(), text));
  }

  show_history() {
    this.history.forEach((item) => item.toString());
  }
}

let messenger = new Messenger();
messenger.send("Adil", "ilk mesaj");
messenger.send("Məryəm", "İkinci mesaj");
messenger.send("Aynur", "Hello millet");
messenger.show_history();
