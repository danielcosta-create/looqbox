import type { HttpClient } from "@/shared/services/interfaces/httpClient";

export class FetchHttpClient implements HttpClient {
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

