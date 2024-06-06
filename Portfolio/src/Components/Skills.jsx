import  '../Components/Skills.scss'
import Button from '../Components/Button'

function Skills() {
  return (
    <div className="main">
    <div className='heading'>
      <h1>Expertise Area</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

    <div className="skills">
    <div className="web">
      <h2>This is web design</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <div className="buttons">
      <Button msg="View"/>
      </div>
    </div>

    <div className="qa">
      <h2>This is a quality assuarance</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      <div className="buttons">
      <Button msg="View"/>
      </div>
    </div>

    <div className="photography">
      <h2>This is photography</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      <div className="buttons">
      <Button msg="View"/>
      </div>
    </div>
    
    </div>
    
    </div>
  )
}

export default Skills
