import JournalsIcon from "../assets/svg/journals.svg"
import {Rupiah} from "../use/useUtils.js";

const Box = ({ title, text }) => {
  return(
    <div className="border border-l-4 border-s-sky-300 rounded-lg shadow-lg bg-white px-5 py-6 md:max-w-md m-3 flex justify-between">
      <div className="ms-3">
        <h3 className="font-semibold text-md uppercase">{title}</h3>
        <h5>{Rupiah(text)}</h5>
      </div>
      <img className="w-6" src={JournalsIcon} alt="JournalsIcon" />
    </div>
  )
}

export default Box
