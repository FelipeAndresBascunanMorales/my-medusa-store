import { BaseService } from "medusa-interfaces";

class HelloService extends BaseService {
  getMessage() {
    return `Welcome to My Store!`
  }
}

export default HelloService;