export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export const products: Product[] = [
    {
      id: 1,
      name: 'Camisa Fortaleza',
      description: 'Camisa oficial do Fortaleza, temporada 2024.',
      price: 249.99,
      image: 'https://images.tcdn.com.br/img/img_prod/1136975/camisa_fortaleza_volt_2024_uniforme_1_torcedor_masculino_10690_3_ff6bc930889f17f94acdfaafd1871045.jpg',
    },
    {
      id: 2,
      name: 'Camisa Bob Dylan',
      description: 'Camiseta estilosa do Bob Dylan, ideal para fãs.',
      price: 129.99,
      image: 'https://www.merchandisingplaza.com.br/204785/2/Camisetas-Bob-Dylan-Camiseta-Bob-Dylan-l.jpg',
    },
    {
      id: 3,
      name: 'Camisa Midnight Oil',
      description: 'Camiseta clássica da banda Midnight Oil.',
      price: 99.99,
      image: 'https://screamyell.com.br/site/wp-content/uploads/2016/08/midnightoii1979.jpg',
    },
  ];