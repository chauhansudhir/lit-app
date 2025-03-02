export class FetchClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
  }
}
