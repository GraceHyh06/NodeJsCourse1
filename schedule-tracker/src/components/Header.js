import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) =>{
  const onAddClick = (e)=>{
    console.log("It's adding...")
  }
  
  const onRemoveClick = (e)=>{
    console.log("It's removing...")
  } 
  
  return (
    <div className='header'>
      <h1>Schedule Tracker</h1>
      <Button text='Add' onClick={onAddClick}/>
      <Button text='Remove' color ='red' onClick={onRemoveClick}/>
    </div>
  )
}

Header.defaultProps = {
  title: "Pretty",
  work_experience:25
}

Header.propTypes={
  title: PropTypes.string,
  work_experience: PropTypes.number
}

//css in JS
// const headingStyle = {
//   color: 'purple',
//   backgroundColor:'black'
// }
export default Header