import Data from "@/js/500apps/data";
class Ipaddress extends Data {
  constructor() {
    super();
    this.region = this.getRegion();
    this.disablePCors();
  }
  async get(url) {
    // eslint-disable-next-line no-unused-vars
    super.url = eval("`" + url + "`");
    let result = await super.get();
    return result[0] ? result[0] : result;
  }
}
export default new Ipaddress();
