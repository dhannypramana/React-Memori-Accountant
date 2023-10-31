const CharLimit = ({maxCharacter, aboutLength}) => {
  return (
    <span className="text-sm text-slate-500">Max Character: {maxCharacter - aboutLength}</span>
  )
}

export default CharLimit
