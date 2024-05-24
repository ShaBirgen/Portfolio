import './Button.scss'

function Button({msg}) {
  return (
    <div className='button'>
       <span>{msg}</span>
    </div>
  )
}

export default Button
