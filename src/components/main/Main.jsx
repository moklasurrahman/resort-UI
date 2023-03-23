import './main.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import img1 from '../../assets/mainimg1.jpg';
import img2 from '../../assets/mainimg2.jpg';
import img3 from '../../assets/mainimg3.jpg';
import img4 from '../../assets/mainimh4.jpg';


const Main = () => {
  return (
    <section className='main'>
       <div className="mainAllItem">
       <div className="topItem">
            <h1>Why Choose Dhaka Resort?</h1>
            <p>Dhaka resort is a place where modern amenitie maintain strong rapport with nature.</p>
        </div>
        <div className="bottomItems">
            <div className="leftItem">
               
                <div className="col1">
                    <img className='img1' src={img1} alt="" />
                    <img className='img2' src={img2} alt="" />
                </div>

                <div className="col2">
                    <img className='img3' src={img3} alt="" />
                    <img className='img4' src={img4} alt="" />
                </div>

            </div>

            <div className="rightItem">
                <p>we offer organic foods produced in our own yard. we also feel honored to host your events like weddings, anniversaries,
                     birthday parties, and many more. for our corporate clients, we are ready to shoulder the responsibility of arranging AGMs,
                      corporate day out, corporate picnics and so many
                </p>

                <ul>
                    <li><CheckCircleIcon className='icon'/>different type of cottages.</li>
                    <li><CheckCircleIcon className='icon'/>family picnic zone.</li>
                    <li><CheckCircleIcon className='icon'/>swimming pool.</li>
                    <li><CheckCircleIcon className='icon'/>shooting zone.</li>
                    <li><CheckCircleIcon className='icon'/>kids play ground.</li>
                    <li><CheckCircleIcon className='icon'/>eco park</li>
                </ul>
                <button>discover now</button>
            </div>
        </div>

       </div>
    </section>

  )
}
export default Main