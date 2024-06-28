class trieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new trieNode()
    }

    insert(word){
        let node = this.root
        for ( let char of word ) {
            if ( !node.children[char] ) {
                node.children[char] = new trieNode()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }

    search(word) {
        let node = this.root
        for ( let char of word ) {
            if ( !node.children[char] ) {
                console.log(word + ' not present in trie');
                return
            }
            node = node.children[char]
        }
        if ( node.isEnd ) console.log(word + ' present in trie');
        else console.log(word + ' not present in trie');
    }

    startsWith(prefix) {
        let node = this.root
        for ( let char of prefix) {
            if ( !node.children[char] ) {
                console.log(prefix + ' prefix not present in trie');
                return
            }
            node = node.children[char]
        }
        console.log(prefix + ' prefix present in trie');
    }
}

const trie = new Trie()

trie.insert('nihala')
trie.search('nih')
trie.search('nihala')
trie.search('hai')
trie.startsWith('nih')
trie.startsWith('hai')