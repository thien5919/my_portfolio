

import Certificate from '../components/certificate';
import GymBuddiesApp from './GymBuddiesApp';
import Project from '../components/project';
import './css/HomeScreen.css';



function HomeScreen() {
  return (
      
    <div className="app">
      <div className='app_header'>
        <div className='navbar'>
          <a href='#about'>About Me</a>
          <a href='#studies'>Academics</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>        
        </div>
      </div>
      
     
      <div className="welcome">
       <h1>Hi, I am Duc Thien Tran<br/> Full-stack Developer based in Toronto</h1>
      </div>
      
      <div id='about'  className='About-me'>
      
      <h1>About Me</h1>
      <section>
        <blockquote>
          “We are the facilitators of our own creative evolution.” – Bill Hicks
        </blockquote>
        <p>
          I believe that we shape our path through purpose, persistence, and
          creative thinking. My journey into tech stems from a deep curiosity
          about how things work and how technology can elevate human potential.
          As someone who’s grown through challenges and learning experiences, I
          now see myself as a creator—someone who uses code to make ideas come
          alive. My goal is to keep evolving, not only by mastering new
          technologies but also by contributing to meaningful projects that
          improve lives. I envision a future where I’m part of a forward-thinking
          team, sharing knowledge and inspiring others to embrace the power of
          innovation.
        </p>
      </section>
      <a href="resume/resume.pdf  " target="_blank" rel="noopener noreferrer">
      <button className="resume-button">Get My Resume</button>
</a>
  
      </div>
      <div id='studies' className='studies'>
        <h1>STUDIES</h1>
        
        <div className='study_card'>
          <div className='left_card'>
            <h2>George Brown College</h2>
            <h3> Computer Programming and Analysis</h3>
          </div>
          <div className='right_card'>
            <p>2021 - Present</p>
          </div>
        </div>
        <div id='certificates'>
        <h1>Certificates</h1>
        <Certificate
          title = "IEEE - Certificate of Parrticipation"
          filePath= "/certificates/IEEE.jpg"
        />
        <Certificate
          title = {
            <>
              Coursera<br/>
              React Native - The Practical Guide
            </> 
          }
          filePath= "/certificates/ReactNative.jpg"
        />      
      </div>

      </div>
      
      <div id='projects'>
        <h1>Projects</h1>
        <Project
          title = {
            <>
              GymBuddiesApp<br/>
              A social fitness app
            </>
            }
          description = "A social fitness app that connects users with workout buddies and local fitness events."
          filePath = "/gym-buddies.png"
          sourceCode = "https://github.com/thien5919/Capstone_project"
          techstack = "React Native, Firebase, Google Maps API"
          showReadMore={true}
          navigateTo="/gym-buddies"
        />
      </div>

      <footer id='contact'>
        <p>&copy; 2025 Duc Thien Tran.</p>
        <p>
          Contact: <a href="mailto:thien5919tran.com">thien5919tran@gmail.com</a> |
          <a href="https://www.linkedin.com/in/thien-tran-2574a5299/" target="_blank">LinkedIn</a>
        </p>
      </footer>

    </div>

  );
}

export default HomeScreen;
