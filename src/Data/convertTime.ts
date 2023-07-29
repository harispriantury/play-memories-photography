export interface IFulltime {
  jam: string;
  hari: string;
  tanggal: string;
  bulan: string;
  tahun: string;
}

export const ConvertTime = (date: string): IFulltime => {
  const months = [
    '',
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  console.log(date);
  const splitter = date.split('-');
  const tahun = splitter[0];
  const bulan = months[Number(splitter[1])];
  const tanggal = splitter[2].split('T')[0];
  const day = new Date(date);
  const hari = day.toLocaleString('id-ID', { weekday: 'long' });
  const jam = date.split('T')[1];
  const data: IFulltime = {
    hari,
    tanggal,
    bulan,
    jam,
    tahun,
  };

  return data;
};
