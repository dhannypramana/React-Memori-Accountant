const RupiahFormat = ({amount}) => {
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  return (
    <span className="text-sm text-slate-500">{rupiah(amount)}</span>
  )
}

export default RupiahFormat
