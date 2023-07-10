const headerItems = [
  { name: "Home", href: "" },
  { name: "Quem somos", href: "about" },
  { name: "História", href: "history" },
  { name: "Infraestrutura", href: "infra" },
  {
    name: "Ciência",
    popOver: [
      { name: "Calibração Isotópica", href: "science/isotopic-calibration" },
      {
        name: "Relações Trópicas - Ambiente Polar",
        href: "science/tropic-relations",
      },
      {
        name: "A Vida em Ambiente Extremo",
        href: "science/extreme-environment",
      },
      { name: "Física em Alta Energia", href: "science/physics-energy" },
      {
        name: "Transporte Atmosférico na Larga Escala Continental",
        href: "science/atmospheric-transport",
      },
      { name: "Aerossóis Atmosféricos", href: "science/atmospheric-aerosols" },
    ],
  },
  {
    name: "Missões Científicas",
    popOver: [
      { name: "2011/2012", href: "mission/2011-2012" },
      { name: "2012/2013", href: "mission/2012-2013" },
    ],
  },
  { name: "Educacional", href: "educational" },
  { name: "Galeria", href: "gallery" },
  { name: "Banco de Dados", href: "database" },
  { name: "Divulgação", href: "divulgation" },
  { name: "Contato", href: "contact" },
]

export default headerItems
