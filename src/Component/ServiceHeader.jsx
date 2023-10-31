import PlusIcon from "../assets/svg/plus.svg";

const ServiceHeader = ({title, handleCreate}) => {
  return(
    <div className="flex justify-between items-center mb-8">
      <h1 className="font-semibold text-2xl md:text-4xl">{title}</h1>
      <button type="button" onClick={handleCreate}>
        <img className="w-12" src={PlusIcon} alt="PlusIcon" />
      </button>
    </div>
  )
}

export default ServiceHeader
