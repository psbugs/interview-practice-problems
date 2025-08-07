class PostNode {
    constructor(post) {
        this.post = post
        this.next = null;
    }
};

class Feed {
    constructor() {
        this.head = null;
    }

    addFeed(post) {
        const node = new PostNode(post);
        node.next = this.head;
        this.head = node;
    }
};

let feed = new Feed();
feed.addFeed({ id: '102', message: 'This is second feed' });
feed.addFeed({ id: '101', message: 'This is first feed' });


console.log('feed', feed);