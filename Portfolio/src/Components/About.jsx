import './About.scss'
import Profile from '../assets/Birgen.png'
import Button from './Button'
import Navbar from './Navbar'

const About=()=> {
  const Details=[
    {
      Title: 'Name:',
      Value : 'Sharon Cherotich Birgen'
    },
    {
      Title: 'Date of birth:',
      Value : 'September 09, 2000'
    },
    {
      Title: 'Address:',
      Value : 'Nairobi, Kenya'
    },
    // {
    //   Title: 'Name:',
    //   Value : 'Sharon Cherotich Birgen'
    // },
    {
      Title: 'Email:',
      Value : 'Sharoncherotich112@gmail.com'
    },
    {
      Title: 'Phone:',
      Value : '+2547-07 78 55 56'
    }
  ]
 return (
    <div className='main'>
      <div className="body">
      <div className="pic">
        <img src={Profile} alt="noPic" srcset="" />
      </div>
      <div className="information">
      <div className="about">
        <h2>About Me</h2>
        <p>Inspired by the fertile plains of Sharon, I bring a blend of natural beauty and richness to every project I undertake.
           Discover the depth and creativity behind my work.</p>
           </div>
      <div className="details">
        {Details.map((Detail, index) => (
          <div className="information2" key={index}>
            <h4>{Detail.Title} </h4>
            <p>{Detail.Value}</p>
          </div>
        ))}
        </div>
        <Button msg='Download Cv' />
        </div>
        </div>
    </div>
  )
}

export default About
