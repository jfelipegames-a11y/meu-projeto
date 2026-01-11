// Mock data for CRZ products
export const products = [
  {
    id: 1,
    name: "Carregador Veicular QC 3.0 TIPO C PD 20W",
    shortName: "Carregador Veicular 20W",
    price: 29.90,
    description: "Carregador veicular com tecnologia Quick Charge 3.0 e Power Delivery 20W para carregamento rápido e seguro.",
    features: [
      "Quick Charge 3.0",
      "Power Delivery 20W",
      "Proteção contra sobrecarga",
      "Design compacto",
      "Universal para smartphones"
    ],
    specs: [
      { label: "Potência", value: "20W" },
      { label: "Tecnologia", value: "QC 3.0 + PD" },
      { label: "Entrada", value: "12-24V" },
      { label: "Saída", value: "5V/3A, 9V/2.22A, 12V/1.67A" },
      { label: "Garantia", value: "6 meses" }
    ],
    image: "https://i.imgur.com/rt15MOq.png",
    category: "carregadores",
    inStock: true,
    badge: "Mais Vendido"
  },
  {
    id: 2,
    name: "Cordão Salva Celular Universal com Strass",
    shortName: "Cordão Salva Celular",
    price: 29.90,
    description: "Cordão universal elegante com detalhes em strass. Mantém seu celular sempre seguro e acessível.",
    features: [
      "Universal - compatível com qualquer aparelho",
      "Detalhes em strass premium",
      "Material resistente e durável",
      "Ajustável",
      "4 cores disponíveis"
    ],
    specs: [
      { label: "Material", value: "Silicone + Cordão Premium" },
      { label: "Comprimento", value: "Ajustável" },
      { label: "Cores", value: "Preto, Rosa, Branco, Vermelho" },
      { label: "Garantia", value: "3 meses" }
    ],
    variants: [
      { color: "Preto", colorCode: "#000000" },
      { color: "Rosa", colorCode: "#FF69B4" },
      { color: "Branco", colorCode: "#FFFFFF" },
      { color: "Vermelho", colorCode: "#DC143C" }
    ],
    image: "hhttps://i.imgur.com/C9KYtCL.png",
    category: "acessorios",
    inStock: true
  },
  {
    id: 3,
    name: "Cabo Tipo C 1m Branco Premium",
    shortName: "Cabo USB-C Premium",
    price: 59.90,
    description: "Cabo USB Type-C premium com design elegante branco. Carregamento rápido e transferência de dados em alta velocidade.",
    features: [
      "USB Type-C",
      "1 metro de comprimento",
      "Carregamento rápido",
      "Transferência de dados até 480Mbps",
      "Reforço anti-quebra"
    ],
    specs: [
      { label: "Comprimento", value: "1 metro" },
      { label: "Cor", value: "Branco" },
      { label: "Corrente", value: "3A" },
      { label: "Material", value: "TPE Premium" },
      { label: "Garantia", value: "6 meses" }
    ],
    image: "https://i.imgur.com/xfshvB3.png",
    category: "cabos",
    inStock: true,
    badge: "Premium"
  },
  {
    id: 4,
    name: "Cabo Lightning Tipo C 1m Premium",
    shortName: "Cabo Lightning Premium",
    price: 49.90,
    description: "Cabo Lightning para iPhone com saída USB-C. Certificado para garantir compatibilidade e segurança total.",
    features: [
      "Compatível com iPhone",
      "Saída USB Type-C",
      "Certificado MFi",
      "Carregamento rápido PD",
      "Design premium"
    ],
    specs: [
      { label: "Comprimento", value: "1 metro" },
      { label: "Certificação", value: "MFi Certified" },
      { label: "Potência", value: "Até 20W" },
      { label: "Material", value: "TPE Premium" },
      { label: "Garantia", value: "6 meses" }
    ],
    image: "https://i.imgur.com/L0qJOHC.png",
    category: "cabos",
    inStock: true
  },
  {
    id: 5,
    name: "Fonte Parede Tipo C 20W",
    shortName: "Fonte USB-C 20W",
    price: 39.90,
    description: "Fonte de parede USB Type-C com Power Delivery 20W. Carregue seu dispositivo com velocidade e segurança.",
    features: [
      "Power Delivery 20W",
      "USB Type-C",
      "Proteção múltipla",
      "Design compacto",
      "Bivolt automático"
    ],
    specs: [
      { label: "Potência", value: "20W" },
      { label: "Entrada", value: "100-240V (Bivolt)" },
      { label: "Saída", value: "5V/3A, 9V/2.22A, 12V/1.67A" },
      { label: "Tecnologia", value: "Power Delivery" },
      { label: "Garantia", value: "12 meses" }
    ],
    image: "https://i.imgur.com/4EuUT4D.jpeg",
    category: "carregadores",
    inStock: true,
    badge: "Mais Vendido"
  },
  {
    id: 6,
    name: "Cabo Dados USB Tipo C 1m 5A Fast Charge",
    shortName: "Cabo USB-C 5A",
    price: 34.90,
    description: "Cabo USB Type-C com suporte a 5A para carregamento ultra-rápido. Ideal para dispositivos de alta potência.",
    features: [
      "Corrente de 5A",
      "Carregamento ultra-rápido",
      "Transferência de dados rápida",
      "Construção reforçada",
      "Compatível com super carregadores"
    ],
    specs: [
      { label: "Comprimento", value: "1 metro" },
      { label: "Corrente", value: "5A" },
      { label: "Potência", value: "Até 100W" },
      { label: "Material", value: "Nylon Trançado" },
      { label: "Garantia", value: "6 meses" }
    ],
    image: "https://i.imgur.com/0C3oI67.png",
    category: "cabos",
    inStock: true,
    badge: "Fast Charge"
  },
  {
    {
  id: 7,
  name: "Carregador Power Bank MagSafe",
  shortName: "Power Bank MagSafe",
  price: 119.90,
  description: "Power bank com tecnologia MagSafe para iPhone. Carregamento sem fio magnético e prático para o dia a dia.",
  features: [
    "Compatível com MagSafe",
    "Carregamento sem fio",
    "Capacidade 5000mAh",
    "Design ultra-fino",
    "Indicador LED de bateria"
  ],
  specs: [
    { label: "Capacidade", value: "5000mAh" },
    { label: "Potência", value: "15W" },
    { label: "Entrada", value: "USB-C" },
    { label: "Compatibilidade", value: "iPhone 12 ou superior" },
    { label: "Garantia", value: "12 meses" }
  ],
  image: "https://i.imgur.com/5nRU0sE.png",
  category: "carregadores",
  inStock: true,
  badge: "Premium",
}

];

export const benefits = [
  {
    id: 1,
    icon: "Zap",
    title: "Carregamento Rápido",
    description: "Tecnologia de ponta para carregar seus dispositivos em tempo recorde."
  },
  {
    id: 2,
    icon: "Shield",
    title: "Alta Durabilidade",
    description: "Produtos testados e construídos para durar muito mais."
  },
  {
    id: 3,
    icon: "CheckCircle",
    title: "Produtos Testados",
    description: "Cada item passa por rigoroso controle de qualidade."
  },
  {
    id: 4,
    icon: "Truck",
    title: "Entrega Rápida",
    description: "Receba seus produtos com agilidade em todo o Brasil."
  }
];

export const categories = [
  { id: "todos", name: "Todos" },
  { id: "carregadores", name: "Carregadores" },
  { id: "cabos", name: "Cabos" },
  { id: "acessorios", name: "Acessórios" }
];