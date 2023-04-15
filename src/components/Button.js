const Button = ({ name }) => {
  return (
    <div>
      <button className='px-3 py-[3px] bg-black rounded-md text-sm mx-1 text-white'>
        {name}
      </button>
    </div>
  )
}

export default Button
