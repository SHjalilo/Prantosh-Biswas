import React from 'react'
import StickyBox from "react-sticky-box";
import './About.css'
import ReduxIcon from '../assets/redux.png'
import HTML from '../assets/html.png'
import jQuery from '../assets/jquery.png'
import Ruby from '../assets/ruby.png'
import JEST from '../assets/jest.png'
import Flutter from '../assets/flutter.png'
import VSCode from '../assets/vscode.png'

const About = () => {
  return (
    <section className='about' id='about'>
          <StickyBox offsetTop={20} offsetBottom={20}>
      <div className="about-me">
        <h2 className='title'>About Me</h2>
        <p className='paragraph about-para'>

          I am a dedicated full stack web developer. With a strong background in mathematics and a keen interest in technology, I have been able to combine my analytical skills with my creativity to excel in the field of web and mobile application development.
        </p>
        <p className='paragraph about-para'>
          My journey in the world of programming began in 2018 when I ventured into freelancing. Since then, I have had the opportunity to work on a wide range of projects, honing my skills and expanding my knowledge along the way. I have worked with various clients, both independently and as part of a team, to deliver innovative and user-friendly websites and mobile applications.
        </p>
        <p className='paragraph about-para'>
          In my pursuit of continuous growth and learning, I joined Microverse, an online immersive coding program. This experience has allowed me to collaborate with talented developers from around the world, solving complex coding challenges and building real-world projects. Through Microverse, I have acquired valuable teamwork and communication skills while gaining hands-on experience in the latest web development technologies and practices.
        </p>
        <button>Get my CV</button>
      </div>
      </StickyBox>
      <div className="about-skills">
        <h2 className='skill-title'>Front-End</h2>
        <div className="skills">
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
              alt="" />
            <p>React</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"
              alt="" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <img src={ReduxIcon}
              alt="" />
            <p>Redux</p>
          </div>
          <div className="skill">
            <img src={HTML}
              alt="" />
            <p>HTML5</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/640px-CSS3_logo.svg.png"
              alt="" />
            <p>CSS3</p>
          </div>
          <div className="skill">
            <img src={jQuery}
              alt="" />
            <p>jQuery</p>
          </div>
          <div className="skill">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/512px-Sass_Logo_Color.svg.png?20150315202757'
              alt="" />
            <p>SASS</p>
          </div>
          <div className="skill">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png'
              alt="" />
            <p>Bootstrap</p>
          </div>
        </div>
        <h2 className='skill-title'>Back-End</h2>
        <div className="skills">
          <div className="skill">
            <img src={Ruby}
              alt="" />
            <p>Ruby</p>
          </div>
          <div className="skill">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ruby_on_Rails_logo.svg/640px-Ruby_on_Rails_logo.svg.png'
              alt="" />
            <p>Ruby on Rails</p>
          </div>
          <div className="skill">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png?20080116191800'
              alt="" />
            <p>PostgreSQL</p>
          </div>
        </div>
        <h2 className='skill-title'>Mobile</h2>
        <div className="skills">
          <div className="skill">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207'
              alt="" />
            <p>React Native</p>
          </div>
          <div className="skill">
            <img src={Flutter} alt="" />
            <p>Flutter</p>
          </div>

        </div>
        <h2 className='skill-title'>Tools</h2>
        <div className="skills">
          <div className="skill">
            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
            <p>Git</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Github_logo_svg.svg/640px-Github_logo_svg.svg.png" alt="" />
            <p>GitHub</p>
          </div>
          <div className="skill">
            <img src="https://rspec.info/images/logo.png" alt="" />
            <p>RSpec</p>
          </div>
          <div className="skill">
            <img src={JEST} alt="" />
            <p>JEST</p>
          </div>
          <div className="skill">
            <img src='https://avatars.githubusercontent.com/u/11260967?s=280&v=4' alt="" />
            <p>Chrome Dev Tools</p>
          </div>
          <div className="skill">
            <img src={VSCode} alt="" />
            <p>VS Code</p>
          </div>
        </div>
        <h2 className='skill-title'>Tools</h2>
        <div className="skills">
          <div className="skill">
            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
            <p>Git</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Github_logo_svg.svg/640px-Github_logo_svg.svg.png" alt="" />
            <p>GitHub</p>
          </div>
          <div className="skill">
            <img src="https://rspec.info/images/logo.png" alt="" />
            <p>RSpec</p>
          </div>
          <div className="skill">
            <img src={JEST} alt="" />
            <p>JEST</p>
          </div>
          <div className="skill">
            <img src='https://avatars.githubusercontent.com/u/11260967?s=280&v=4' alt="" />
            <p>Chrome Dev Tools</p>
          </div>
          <div className="skill">
            <img src={VSCode} alt="" />
            <p>VS Code</p>
          </div>
        </div>
        <h2 className='skill-title'>Tools</h2>
        <div className="skills">
          <div className="skill">
            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
            <p>Git</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Github_logo_svg.svg/640px-Github_logo_svg.svg.png" alt="" />
            <p>GitHub</p>
          </div>
          <div className="skill">
            <img src="https://rspec.info/images/logo.png" alt="" />
            <p>RSpec</p>
          </div>
          <div className="skill">
            <img src={JEST} alt="" />
            <p>JEST</p>
          </div>
          <div className="skill">
            <img src='https://avatars.githubusercontent.com/u/11260967?s=280&v=4' alt="" />
            <p>Chrome Dev Tools</p>
          </div>
          <div className="skill">
            <img src={VSCode} alt="" />
            <p>VS Code</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About