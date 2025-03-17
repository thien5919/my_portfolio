

import Certificate from '../components/certificate';
import GymBuddiesApp from './GymBuddiesApp';
import Project from '../components/project';
import './css/HomeScreen.css';



function HomeScreen() {
  return (
    <div className='navbar'>
    <a>About Me</a>
    <a>Academics</a>
    <a>Projects</a>        
  </div>
    
      
    <div className="App">
     
      <div className="App-header">
       <h1>Hi, I am Duc Thien Tran<br/> Full-stack Developer based in Toronto</h1>
      </div>
      <div i>
        <h1>STUDIES</h1>
        <div>
          <div>
            <h2>George Brown College</h2>
            <h3> Computer Programming and Analysis</h3>
          </div>
          <div>
            <p>2021 - Present</p>
          </div>
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
          sourceCode = {
            <>
              <p>GitHub Repo</p>
            </>
          }
          techstack = "React Native, Firebase, Google Maps API"
          showReadMore={true}
          navigateTo="/gym-buddies"
        />
      </div>

      <footer id='contact'>
        <p>&copy; 2025 Your Name. All rights reserved.</p>
        <p>
          Contact: <a href="mailto:your.email@example.com">your.email@example.com</a> |
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
        </p>
      </footer>

    </div>

  );
}

export default HomeScreen;
