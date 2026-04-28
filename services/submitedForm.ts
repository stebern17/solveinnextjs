import { fetchAPI } from "@/lib/api";

export async function submitForm(data: {
  name: string;
  email: string | null;
  subject: string;
  message: string;
  whatsapp: string;
}) {
  return fetchAPI("/api/submited-forms", {
    method: "POST",
    body: JSON.stringify({
      data: {
        Name: data.name,
        Email: data.email,
        Subject: data.subject,
        Message: data.message,
        WhatsappNumber: data.whatsapp,
      },
    }),
  });
}
