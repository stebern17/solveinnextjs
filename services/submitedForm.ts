import { fetchAPI } from "@/lib/api";

export async function submitForm(data: {
  name: string;
  whatsapp: string;
  subject: string;
  message: string;
}) {
  return fetchAPI("/api/forms", {
    method: "POST",
    body: JSON.stringify({
        name: data.name,
        phone: data.whatsapp,
        subject: data.subject,
        message: data.message,
    }),
  });
}
