import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { IDataTable, dataTable } from '../../Data/dataTable';
import { ConvertTime, IFulltime } from '../../Data/convertTime';

export const useCustom = () => {
  const orderState = (state: RootState) => state.order;
  const { name, variant, date } = useSelector(orderState);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    console.log(e.target.name, e.target.value);
    dispatch({
      type: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const type: IDataTable = dataTable.filter((item: IDataTable) => item.id === Number(variant))[0];
    const newVariant: string = `${type.category} - ${type.duration} - ${type.numberOfPhotos} photo - ${type.normalPrice}`;

    // manipulate
    const fulltime: IFulltime = ConvertTime(date);

    const template = `Halo Play Memories , perkenalkan saya ${name} ingin memesan jasa ${newVariant} pada ${
      (fulltime.hari, fulltime.tanggal, fulltime.bulan, fulltime.tahun)
    } pukul ${
      fulltime.jam
    }, untuk lokasi akan dilaksanakan di ${''}, saya menunggu konfirmasi kesiapan anda , Terima Kasi banyak sukses selalu !`;
    console.log(template);
  };

  return {
    data: {
      // toast,
    },
    method: {
      handleChange,
      handleSubmit,
    },
  };
};
