// Design and implement a data structure for Least Frequently Used (LFU) cache. It should support get and put.
//
// get(key) - Get the value (will always be positive) of the key if the key exists in the cache,
//            otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present.
//    When the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item.
//    For the purpose of this problem, when there is a tie (i.e., two or more keys that have the same frequency),
//    the least recently used key would be evicted.

class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.stack = [];
    }

    get(key) {
        if (this.stack.length === 0) return -1;

        this.stack.map((element, i) => {
            const k = Object.keys(element)[0];
            const val = element[key];
            element.freq = element.freq++;

            if (k == key) {
                // remove element and add to top of stack
                this.stack.splice(i, 1);
                this.stack.push(element);
            }
        });
        // console.log(this.stack);

        return -1;
    }

    put(key, value) {
        // console.log(this.stack);
        if (this.stack.length >= this.capacity) {
            // evict least frequent element
            let oldest = [];
            this.stack.map((element, i) => {
                if (oldest.length == 0 || oldest.freq > element.freq) {
                    oldest = [{
                        element,
                        index: i
                    }];
                }
                if (oldest.length > 0 || element.freq == oldest[0].freq) {
                    oldest.push({
                        element,
                        index: i
                    });
                }
            });
            const oldest_index = oldest[0].index;
            this.stack.splice(oldest_index, 1);
            console.log(oldest[0].element);
        }
        const obj = {};
        obj[key] = value;
        obj.freq = 1;
        this.stack.push(obj);
        // console.log(this.stack);
    }
}

const cache = new LFUCache(2);
// cache.put(2, 2);
// cache.put(3, 3);
// cache.get(2);
// cache.put(1, 1);
// // cache.get(2);
// // cache.get(1);

console.log(cache.put(1, 1));
console.log(cache.put(2, 2));
console.log(cache.get(1));       // returns 1
console.log(cache.put(3, 3));    // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3.
console.log(cache.put(4, 4));    // evicts key 1.
console.log(cache.get(1));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3
console.log(cache.get(4));       // returns 4
