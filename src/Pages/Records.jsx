import ServiceHeader from "../Component/ServiceHeader.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import DataTable from "../Component/DataTable.jsx";
import {Confirm, Toast} from "../use/useSwal.js";

const Records = () => {
  const navigate = useNavigate()
  const [records, setRecords] = useState([])

  const getData = () => {
    axios
      .get(import.meta.env.VITE_API_URL + '/records')
      .then(res => {
        setRecords(res.data.records)
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const handleCreate = () => {
    navigate('/records/add', {
      state: {
        value: null
      }
    })
  }

  const handleOnDelete = (id) => {
    Confirm(
      'Hapus Data?',
      'Aksi tidak dapat dikembalikan!'
    ).then(() => {
      axios
        .delete(`${import.meta.env.VITE_API_URL}/records/${id}`)
        .then(() => {
          getData()
          Toast('Deleted Successfully!')
        })
        .catch(e => {
          console.log(e)
        })
    }).catch(e => {
      console.log(e)
    })
  }

  const handleOnUpdate = (value) => {
    navigate('/records/add', {
      state: {
        value
      }
    })
  }

  return (
    <>
      <div className="mx-7">
        <ServiceHeader title={'Daftar Catatan'} handleCreate={handleCreate}/>
      </div>
      {
        records.length < 1 ? (
          <div className="text-center font-semibold text-xl">Tidak ada data pemasukan</div>
        ) : (
          <div className="overflow-auto px-3">
            <DataTable data={records} getData={getData} handleOnDelete={handleOnDelete}
                       handleOnUpdate={handleOnUpdate}/>
          </div>
        )
      }
    </>
  )
}

export default Records
