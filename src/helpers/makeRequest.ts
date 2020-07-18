import { Method } from "../types/requestMethodType";

export default async function makeRequest(type: Method, url: string) {
  const res = await fetch(url);
  return res;
}
