class Reader {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public notify() {
    // ...
    console.log(`${this.name} is notified...`);
  }
}

class Blog {
  subscribers: Reader[];
  posts: any[];
  author: string;

  constructor(name: string) {
    this.subscribers = [];
    this.posts = [];
    this.author = name;
  }

  public subscribe(reader: Reader) {
    this.subscribers.push(reader);
  }

  public notifySubscribers() {
    for (let reader of this.subscribers) {
      reader.notify();
    }
  }

  public addPost(post: string) {
    this.posts.push(post);
    console.log(`${this.author} added a post...`);
    this.notifySubscribers();
  }
}

let blog: Blog = new Blog("Ben Bryant");
blog.subscribe(new Reader("Kvothe"));
blog.subscribe(new Reader("Simmon"));
blog.subscribe(new Reader("Wilem"));
blog.addPost("Hello World!");
