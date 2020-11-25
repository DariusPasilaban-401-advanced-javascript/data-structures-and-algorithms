// reference: https://algodaily.com/challenges/implement-a-hash-map

class Hashmap {
  constructor() {
    // implement this
  }

  set(key, val) {
    // implement this
  }

  get(key) {
    // implement this
  }

  hashStr(str) {
    let finalHash = 0;
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      finalHash += charCode;
    }
    return finalHash;
  }
}