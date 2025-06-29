export type CompanyInfo = {
  name: string
  link: string
  description: string
}

export const companies: Record<string, CompanyInfo> = {
  websovet: {
    name: "Websovet",
    link: "https://websovet.ru/gamedev",
    description: "студия разработки casual-игр"
  },
  grafit: {
    name: "Grafit",
    link: "https://www.grafitart.com/",
    description: "аутсорс арт-студия"
  },
}
