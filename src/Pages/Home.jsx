import Box from "../Component/Box"
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)

  const getData = () => {
    axios
      .get(import.meta.env.VITE_API_URL + '/total')
      .then(res => {
        setTotal(res.data.total)
      })
      .catch(e => {
        console.log(e)
      })

    axios
      .get(import.meta.env.VITE_API_URL + '/total/income')
      .then(res => {
        setIncomeTotal(res.data.total)
      })
      .catch(e => {
        console.log(e)
      })

    axios
      .get(import.meta.env.VITE_API_URL + '/total/expense')
      .then(res => {
        setExpenseTotal(res.data.total)
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  return(
    <>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4">
        <Box title={'Pemasukan'} text={incomeTotal} />
        <Box title={'Pengeluaran'} text={expenseTotal} />
        <Box title={'Total'} text={total} />
      </div>
    </>
  )
}

export default Home
