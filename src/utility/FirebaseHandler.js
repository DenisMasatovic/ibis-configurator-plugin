const axios = require("axios")

let instance = null;

class FirebaseHandler {
 
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  async getAllProducts() {
    return await axios.get('http://localhost:3000/getAllProducts');
  }
}

module.exports = new FirebaseHandler();
