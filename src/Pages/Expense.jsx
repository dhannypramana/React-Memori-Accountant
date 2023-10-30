import ServiceHeader from "../Component/ServiceHeader.jsx";
import {Toast} from "../use/useSwal.js";

const Expense = () => {
  const handleCreateExpense = () => {
    Toast('Daftar Pengeluaran')
  }

  return(
    <>
      <ServiceHeader title={'Daftar Pengeluaran'} handleCreate={handleCreateExpense} />
    </>
  )
}

export default Expense
