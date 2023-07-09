import { useEffect, useState } from 'react';
import { dataTable } from '../../Data/dataTable';

interface IDistrict {
  id: number;
  id_kota: number;
  nama: string;
}

interface ISubDistrict {
  id: number;
  id_kecamatan: number;
  nama: string;
}
interface IDataOrder {
  name: string;
  variant: number;
  district: string;
  village: string;
  date: string;
}

export const useCustom = () => {
  const [toast, setToast] = useState<boolean>(false);
  const [district, setDistrict] = useState<IDistrict[]>([]);
  const [subDistrict, setSubDistrict] = useState<ISubDistrict[]>([]);
  const [dataOrder, setDataOrder] = useState<IDataOrder>({
    name: '',
    variant: 0,
    district: '',
    village: '',
    date: '',
  });
  const getDataCity = async () => {
    try {
      const data = await fetch('http://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=3305');
      if (data !== undefined) {
        const response = await data.json();

        setDistrict(response.kecamatan as IDistrict[]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSubDistrict = async (selectedId: string) => {
    if (selectedId !== '') {
      const id = district.filter((item) => item.nama === selectedId);
      try {
        const data = await fetch(`http://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${id[0].id}`);
        const response = await data.json();

        setSubDistrict(response.kelurahan as ISubDistrict[]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e: any) => {
    setDataOrder((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // validation
    if (dataOrder.variant === 0 || dataOrder.district === '' || dataOrder.village === '') {
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);

      return;
    }

    const variant = dataTable.filter((item) => item.id === Number(dataOrder.variant));

    const template = `Halo Play Memories , perkenalkan saya ${dataOrder.name} ingin memesan jasa ${variant[0].category} pada ${dataOrder.date}, untuk lokasi akan dilaksanakan di Kecamatan ${dataOrder.district} Desa ${dataOrder.village}, saya menunggu konfirmasi kesiapan anda , Terima Kasi banyak sukses selalu !`;
    const url = `https://wa.me/6285280145328/?text=${encodeURIComponent(template)}`;
    window.open(url, '_black');
  };

  useEffect(() => {
    getSubDistrict(dataOrder.district);
  }, [dataOrder.district]);

  useEffect(() => {
    getDataCity();
  }, []);

  return {
    data: {
      toast,
      district,
      subDistrict,
      dataOrder,
    },
    method: {
      handleChange,
      handleSubmit,
    },
  };
};
