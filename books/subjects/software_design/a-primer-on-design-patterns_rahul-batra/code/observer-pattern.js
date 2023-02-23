var Reader = /** @class */ (function () {
    function Reader(name) {
        this.name = name;
    }
    Reader.prototype.notify = function () {
        // ...
        console.log("".concat(this.name, " is notified..."));
    };
    return Reader;
}());
var Blog = /** @class */ (function () {
    function Blog(name) {
        this.subscribers = [];
        this.posts = [];
        this.author = name;
    }
    Blog.prototype.subscribe = function (reader) {
        this.subscribers.push(reader);
    };
    Blog.prototype.notifySubscribers = function () {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var reader = _a[_i];
            reader.notify();
        }
    };
    Blog.prototype.addPost = function (post) {
        this.posts.push(post);
        console.log("".concat(this.author, " added a post..."));
        this.notifySubscribers();
    };
    return Blog;
}());
var blog = new Blog("Ben Bryant");
blog.subscribe(new Reader("Kvothe"));
blog.subscribe(new Reader("Simmon"));
blog.subscribe(new Reader("Wilem"));
blog.addPost("Hello World!");
