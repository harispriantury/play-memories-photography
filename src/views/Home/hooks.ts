import { useEffect, useState } from 'react';

interface IDataRating {
  id: number;
  email: string;
  body: string;
}

export const useCustom = () => {
  const [dataRating, setDataRating] = useState<IDataRating[]>([]);

  const getDataRating = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=20');
    try {
      const response = await data.json();
      const mapper = response.map((item: IDataRating) => {
        const newData: IDataRating = {
          id: item.id,
          email: item.email,
          body: item.body,
        };
        return newData;
      });
      setDataRating(mapper as IDataRating[]);
    } catch (error) {
      console.log(error);
    }
  };

  const test = 'test';
  useEffect(() => {
    getDataRating();
  }, []);

  return {
    data: {
      dataRating,
      test,
    },
  };
};
