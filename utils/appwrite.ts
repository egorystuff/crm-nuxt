import { APP_WRITE_ID } from "../.env";
import { Account, Client, Storage, Databases } from "appwrite";

export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(APP_WRITE_ID);

export const account = new Account(client);
export const storage = new Storage(client);
export const DB = new Databases(client);
export { ID } from "appwrite";
