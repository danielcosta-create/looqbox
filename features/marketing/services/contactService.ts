import type { HttpClient } from "@/shared/services/interfaces/httpClient";
import type { Logger } from "@/shared/utils/interfaces/logger";
import { ContactFormData } from "@/features/marketing/schemas/contactSchema";

export class ContactService {
  constructor(
    private readonly logger: Logger,
    private readonly httpClient: HttpClient,
  ) {}

  async createContact(data: ContactFormData) {
    const response = await this.httpClient.post("/posts", data);

    this.logger.log(response);

    return response;
  }
}
