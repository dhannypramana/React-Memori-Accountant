import ServiceHeader from "../Component/ServiceHeader.jsx";
import {Custom} from "../use/useSwal.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Income = () => {
  const navigate = useNavigate()

  const handleCreate = () => {
    navigate('/tambah', { state: { type: 'income' } })
  }

  return(
    <div className="mx-7">
      <ServiceHeader title={'Daftar Pemasukan'} handleCreate={handleCreate} />
    </div>
  )
}

export default Income
