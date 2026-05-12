import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, email, package: selectedPackage, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ status: "error", message: "Vyplňte všechna povinná pole." });
    }

    const { data, error } = await resend.emails.send({
      from: "SpecifAI Web <onboarding@resend.dev>", // Můžete změnit na vlastní ověřenou doménu, např. form@specifai.cz
      to: "fabian.suchanka@specifai.cz",
      subject: `Nová poptávka z webu: ${name}`,
      text: `Dobrý den,\n\nmáte novou zprávu z webového formuláře.\n\nJméno: ${name}\nTelefon: ${phone}\nE-mail: ${email}\nZájem o balíček: ${selectedPackage}\n\nZpráva:\n${message}\n\n--\nOdesláno z webu SpecifAI`,
      replyTo: email,
    });

    if (error) {
      return res.status(400).json({ status: "error", message: error.message });
    }

    return res.status(200).json({ status: "success", message: "Zpráva byla úspěšně odeslána." });
  } catch (error) {
    return res.status(500).json({ status: "error", message: "Při odesílání došlo k chybě na serveru." });
  }
}
