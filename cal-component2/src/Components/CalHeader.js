import logo from '../Assets/3il.jpg'
import '../Styles/CalHeader.css'

function CalHeader() {
    const title = 'calendrier'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='calendrier' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}
export default CalHeader