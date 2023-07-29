export interface IDataTable {
  id: number;
  category: string;
  duration: string;
  numberOfPhotos: number;
  normalPrice: number;
  discount: number;
}

export const dataTable: IDataTable[] = [
  {
    id: 1,
    category: 'Sport Photography',
    duration: '1 Hour',
    numberOfPhotos: 200,
    discount: 10,
    normalPrice: 250000,
  },
  {
    id: 2,
    category: 'Sport Photography',
    duration: '2 Hour',
    numberOfPhotos: 350,
    discount: 12,
    normalPrice: 350000,
  },
  {
    id: 3,
    category: 'Sport Photography',
    duration: '3 Hour',
    numberOfPhotos: 500,
    discount: 19,
    normalPrice: 400000,
  },
  {
    id: 4,
    category: 'Potrait Photography',
    duration: '0.5 Hour',
    numberOfPhotos: 70,
    discount: 5,
    normalPrice: 150000,
  },
  {
    id: 5,
    category: 'Event Photography',
    duration: '4 Hour',
    numberOfPhotos: 700,
    discount: 21,
    normalPrice: 500000,
  },
  {
    id: 6,
    category: 'Prewedding Photography',
    duration: '1 Hour',
    numberOfPhotos: 70,
    discount: 48,
    normalPrice: 200000,
  },
];
