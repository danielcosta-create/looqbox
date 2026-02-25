import { httpClient } from "@/services/httpClient";
import { ContactFormData } from "@/schemas/contact.schema";

class ContactService {
  async createContact(data: ContactFormData) {
    return httpClient.post('/contacts',
      data
    );
  }
}

export const contactService = new ContactService();