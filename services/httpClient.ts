import { env } from "@/config/env";

class HttpClient {
  private baseURL: string;

  constructor(baseURL: string = "") {
    this.baseURL = baseURL;
  }

  async post<T>(url: string, body: unknown): Promise<T> {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    return response.json();
  }
}

export const httpClient = new HttpClient(env.API_URL);
