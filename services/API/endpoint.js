import axios from "axios";

class EndPoint {
  constructor(url,method,data) {
    this.url = url;
    this.method = method;
    this.data = method;
  }

  async get(){
    await axios.get(url)
      .then((response) => response)
  }
}




export default {
  EndPoint
}
