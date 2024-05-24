import conf from "../conf/conf";
import { Client, Account, Storage } from "appwrite";

export class Service {
  client = new Client();
  account;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
    this.storage = new Storage(this.client);
  }

  async getStorage() {
    try {
      return await this.storage.listFiles(conf.appWriteBucketId);
    } catch (error) {
      console.log(error);
    }
  }

  async getFile() {
    try {
      return await this.storage.updateFile(
        conf.appWriteBucketId,
        "6650695a003e101bae78",
        "sudhansskfdj",
        '["update("any")"]',
        { name: "sudhanshu" }
      );
    } catch (error) {
      console.log(error);
    }
  }
}

const service = new Service();
export default service;

service.getFile().then((res) => console.log(res));
