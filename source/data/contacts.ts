type Contact = {
  name: string
  text: string
  link: string
}

export const contacts: Array<Contact> = [
  {
    name: "github",
    text: "GitHub profile",
    link: "https://github.com/urchifox",
  },
  {
    name: "whatsapp",
    text: "Contact via WhatsApp",
    link: "https://api.whatsapp.com/send?phone=79601143943",
  },
  {
    name: "telegram",
    text: "Contact via Telegram",
    link: "https://t.me/urchifox",
  },
  {
    name: "gmail",
    text: "Send an email",
    link: "mailto:uchifox@gmail.com",
  },
];
