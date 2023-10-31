import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import CharLimit from "../Component/CharLimit.jsx";
import RupiahFormat from "../Component/RupiahFormat.jsx";
import {Toast, Confirm} from "../use/useSwal.js";
import axios from "axios";

const Form = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {value} = location.state
  const maxCharacter = 30

  const [about, setAbout] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState('')
  const [type, setType] = useState('income')
  const [isAboutNull, setIsAboutNull] = useState(true)
  const [isAmountNull, setIsAmountNull] = useState(true)
  const [isDateNull, setIsDateNull] = useState(true)

  useEffect(() => {
    if (value) {
      setAbout(value.about)
      setAmount(value.amount)
      setDate(value.date)
      setIsAboutNull(false)
      setIsAmountNull(false)
      setIsDateNull(false)
    }
  },[])

  const onSubmit = (e) => {
    e.preventDefault()

    if (!isAboutNull && !isAmountNull && !isDateNull) {
      Confirm(
        `${!value ? 'Tambah' : 'Update'} Data?`,
        'Aksi tidak dapat dikembalikan!'
      ).then(async () => {
        const newRecord = {
          type,
          about,
          amount,
          date
        }

        const result =
          !value ? await axios.post(import.meta.env.VITE_API_URL + '/records', newRecord) :
            await axios.put(`${import.meta.env.VITE_API_URL}/records/${value.id}`, newRecord)

        if (result.status === 201 || result.status === 200) {
          Toast(`${!value ? 'Added' : 'Updated'} Successfully!`)
          setAbout('')
          setAmount('')
          setDate('')
          navigate('/records')
        }
      })
    } else {
      Toast('Field is Required!', 'error')
    }
  }

  const onAboutChange = (value) => {
    !value ? setIsAboutNull(true) : setIsAboutNull(false)
    value.length <= maxCharacter && setAbout(value)
  }

  const onAmountChange = (value) => {
    !value ? setIsAmountNull(true) : setIsAmountNull(false)
    setAmount(value)
  }

  const onDateChange = (value) => {
    !value ? setIsDateNull(true) : setIsDateNull(false)
    setDate(value)
  }

  const onTypeChange = (value) => {
    setType(value)
  }

  return (
    <div className="mx-7 md:max-w-2xl md:mx-auto">
      <h1 className="font-semibold text-2xl mb-3">{!value ? 'Tambah' : 'Update'} Record</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <div className="flex justify-between items-center">
            <label htmlFor="type">Tipe</label>
          </div>
          <select name="type" id="type" className="form-field" value={type} onChange={(e) => onTypeChange(e.target.value)}>
            <option value="income">Pemasukan</option>
            <option value="expense">Pengeluaran</option>
          </select>
        </div>
        <div className="mb-3">
          <div className="flex justify-between items-center">
            <label htmlFor="about">Perihal</label>
            <CharLimit maxCharacter={maxCharacter} aboutLength={about.length}/>
          </div>
          <input type="text" id="about" className="form-field" value={about} placeholder="Masukkan Perihal"
                 onChange={(e) => onAboutChange(e.target.value)}/>
          {isAboutNull && (
            <div className="text-xs italic text-red-500 mt-2"><sup>*</sup>Required Field</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount">Jumlah</label>
          <input type="number" inputMode="numeric" pattern="[0-9]*" id="amount" className="form-field" value={amount}
                 placeholder="Masukkan Jumlah"
                 onChange={(e) => onAmountChange(e.target.value)}/>
          {isAmountNull ? (
            <div className="text-xs italic text-red-500 mt-2"><sup>*</sup>Required Field</div>
          ) : (
            <RupiahFormat amount={amount}/>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="date">Tanggal</label>
          <input type="date" id="date" className="form-field" value={date} placeholder="Masukkan Tanggal"
                 onChange={(e) => onDateChange(e.target.value)}/>
          {
            isDateNull && (
              <div className="text-xs italic text-red-500 mt-2"><sup>*</sup>Required Field</div>
            )
          }
        </div>
        <div className="mt-5">
          <button type="submit" className="button">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
