type Contact = {
  name: string
  text: string
  link: string
}

export const contacts: Array<Contact> = [
  {
    name: "github",
    text: "Профиль на GitHub",
    link: "https://github.com/urchifox",
  },
  {
    name: "whatsapp",
    text: "Написать в WhatsApp",
    link: "https://api.whatsapp.com/send?phone=79601143943",
  },
  {
    name: "telegram",
    text: "Написать в Telegram",
    link: "https://t.me/urchifox",
  },
  {
    name: "gmail",
    text: "Написать на почту",
    link: "mailto:uchifox@gmail.com",
  },
];
