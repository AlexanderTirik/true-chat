import { Method } from "../types/requestMethodType";

function getFetchArgs(type: Method, body: any | undefined) {
  const headers: HeadersInit = new Headers();
  const token = localStorage.token;
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  if (body) {
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
  }
  if (body && type === Method.GET) {
    throw new Error("GET request does not support request body.");
  }
  return {
    method: type,
    headers,
    body: JSON.stringify(body),
  };
}

export default async function makeRequest(
  type: Method,
  url: string,
  body?: any
) {
  const res = await fetch(url, getFetchArgs(type, body));
  return res;
}
