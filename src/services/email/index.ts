import { config } from "../../../config";

export async function sendEmail(email: string, content: string): Promise<any> {
  return await fetch(`${config.backendURL}/contact-form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, content }),
  });
}
