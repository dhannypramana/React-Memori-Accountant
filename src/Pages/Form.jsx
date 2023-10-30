import {useLocation} from "react-router-dom";
import {useState} from "react";

const Form = () => {
  const location = useLocation()
  const {type} = location.state
  const [about, setAbout] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState('')
  const [maxCharacter, setMaxCharacter] = useState(30)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log({about, amount, date})
  }

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  const onAboutChange = (value) => {
    value.length <= maxCharacter && setAbout(value)
  }

  const onAmountChange = (value) => {
    setAmount(value)
    console.log(rupiah(value))
  }

  const onDateChange = (value) => {
    setDate(value)
  }

  return (
    <div className="mx-7 md:max-w-2xl md:mx-auto">
      <h1 className="font-semibold text-2xl mb-3">Tambah {type === 'income' ? 'Pemasukan' : 'Pengeluaran'}</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <div className="flex justify-between items-center">
            <label htmlFor="about">Perihal</label>
            <span className="text-sm text-slate-500">Max Character: {maxCharacter - about.length}</span>
          </div>
          <input type="text" id="about" className="form-field" value={about}
                 onChange={(e) => onAboutChange(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="amount">Jumlah</label>
          <input type="number" id="amount" className="form-field" value={amount}
                 onChange={(e) => onAmountChange(e.target.value)}/>
          <span className="text-sm text-slate-500">{rupiah(amount)}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="date">Tanggal</label>
          <input type="date" id="date" className="form-field" value={date}
                 onChange={(e) => onDateChange(e.target.value)}/>
        </div>
        <div className="mt-5">
          <button type="submit" className="button">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
