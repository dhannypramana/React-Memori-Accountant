import TrashIcon from "../assets/svg/trash.svg"
import PencilIcon from "../assets/svg/pencil-square.svg"
import {Rupiah} from "../use/useUtils.js";

const DataTable = ({data, handleOnDelete, handleOnUpdate}) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  return (
    <>
      <table className="text-sm md:text-[17px] mx-0 md:w-full text-center rounded-lg shadow table-fixed">
        <thead className="bg-slate-300">
        <tr>
          <th className="border border-slate-200 p-4">Tipe</th>
          <th className="border border-slate-200 p-4">Perihal</th>
          <th className="border border-slate-200 p-4">Tanggal</th>
          <th className="border border-slate-200 p-4">Jumlah</th>
          <th className="border border-slate-200 p-4">Aksi</th>
        </tr>
        </thead>
        <tbody>
        {
          data.map(v => (
            <tr key={v.id}>
              <td className="border border-slate-200 p-4">{v.type === 'income' ? 'Pemasukan' : 'Pengeluaran'}</td>
              <td className="border border-slate-200 p-4">{v.about}</td>
              <td className="border border-slate-200 p-4">{new Date(v.date).toLocaleDateString('id-ID', options)}</td>
              <td className="border border-slate-200 p-4">{Rupiah(v.amount)}</td>
              <td className="border border-slate-200 p-4">
                <button onClick={() => handleOnDelete(v.id)} type="button" className="w-8 border border-slate-300 rounded shadow hover:bg-sky-500 transition ease-in-out duration-300 p-2 block md:inline">
                  <img src={TrashIcon} alt="TrashIcon"/>
                </button>
                <button onClick={() => handleOnUpdate(v)} type="button" className="border border-slate-300 rounded shadow hover:bg-sky-500 transition ease-in-out duration-300 p-2 block md:inline md:ms-2">
                  <img src={PencilIcon} alt="PencilIcon"/>
                </button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </>
  )
}

export default DataTable
