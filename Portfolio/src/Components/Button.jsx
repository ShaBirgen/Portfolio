import './Button.scss'

function Button({msg}) {
  return (
    <div className='button'>
       <span className='msg'>{msg}</span>
    </div>
  )
}

export default Button
