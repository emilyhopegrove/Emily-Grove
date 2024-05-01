/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */


import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="App-sidebar">
        <ul>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#timeline">Timeline</a>
          </li>
          <li>
            <a href="#core-values">Core Values</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        {/* Header */}
        <header id="header" className="App-header">
          <h1>Emily Grove</h1>
          <p>Full-Stack Developer</p>
        </header>
        {/* About Me */}
        <section id="about" className="App-section">
          <h2>About Me</h2>
          <div className="App-about-content">
            <img
              src="/headshot.jpg"
              alt="Headshot of Emily Grove"
              className="App-headshot"
            />
            <pre>
              Welcome to my portfolio website! 

              Hey there, I'm Emily! I'm a passionate software engineer 
              with a knack for content strategy and digital marketing. 
              My goal? To make a positive impact in the tech industry 
              by joining the right company that is doing meaningful work 
              in a in a pair programming, mentor guided role.

              I'm currently mastering Python, JavaScript, HTML, CSS, and SQL, 
              while also diving into exciting new areas like React. 
              
              I'm known for my positive attitude, flexibility, and 
              exceptional work ethic, and I thrive as a team player, 
              creating a supportive environment for everyone to grow together.

              When I'm not coding, you'll find me hiking to catch the next stellar view, 
              reading, walking my jack russel while listening to a podcast or audio book, 
              or immersing myself in different cultures. 


              I live by the values of growth mindset, perseverance, and collaboration.
              If you're curious to learn more, check out an in-depth summary that reveals 
              the <a href="https://bit.ly/3KtzF9Y" target="_blank" rel="noopener noreferrer">values that motivate me</a>.

              If you're looking for someone who's eager to learn, grow, and make a real impact, 
              then <a href="https://calendly.com/emily-grove" target="_blank" rel="noopener noreferrer"> let's connect</a>! 
              I'm ready to bring my unique blend of skills, personality, 
              and passion to your team. Let's make some magic happen!

          
            </pre>
          </div>
        </section>
        {/* Timeline */}
        <section id="timeline" className="App-section">
          <h2>My Journey</h2>
          <ul className="App-timeline">
            <li>
              <div className="App-timeline-date">March 2023</div>
              <div className="App-timeline-event">
                <h3>Hackbright Academy</h3>
                <p>Full-stack Software Developer Certification</p>
              </div>
            </li>
            <li>
              <div className="App-timeline-date">2021-2022</div>
              <div className="App-timeline-event">
                <h3>The Money Manual</h3>
                <p>SEO Strategist / Writer</p>
              </div>
            </li>
            <li>
              <div className="App-timeline-date">2016-2019</div>
              <div className="App-timeline-event">
                <h3>BednBuild</h3>
                <p>Community Manager</p>
              </div>
            </li>
          </ul>
        </section>
        {/* Core Values */}
        <section id="core-values" className="App-section">
          <h2>Core Values</h2>
          <ul className="App-core-values">
            <li>
              <h3>Growth Mindset</h3>
              <pre>
                I am constantly learning and exploring new technologies to
                stay up-to-date and find creative solutions to complex problems. 
                I believe in pushing the boundaries and always looking for innovative 
                ways to improve my skills and deliver exceptional results.
              </pre>
            </li>
            <li>
              <h3>Perseverance</h3>
              <pre>
                I believe in persevering through challenges and obstacles, 
                and never giving up on my goals. I am resilient and tenacious,
                willing to put in the effort and dedication required to overcome 
                difficulties and achieve success.
              </pre>
            </li>
            <li>
              <h3>Collaboration</h3>
              <pre>
                I believe in working collaboratively as part of a team to
                achieve common goals. I actively contribute to a positive and
                inclusive work environment, where ideas are valued, and
                teamwork is fostered.
              </pre>
            </li>
          </ul>
        </section>
        {/* Skills, Tools & Languages */}
        <section id="skills" className="App-section">
          <h2>Skills, Tools & Languages</h2>
          <ul className="App-skills">
            
            <li>Python</li>
            <li>Flask</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>PostgresSQL</li>
            <li>Responsive Web Design</li>
            <li>Git</li>
            <br>
            </br>
            <li>Front-End Development</li>
            <li>Full-Stack Development</li>
            <li>Back-End Development</li>
            <li>Project Management</li>
            <li>SEO</li>
            
            
          </ul>
        </section>
        {/* Projects */}
        <section id="projects" className="App-section">
          <h2>Projects</h2>
          <div className="App-projects">
            {/* Project 1 */}
            <div className="App-project">
              <h3><a>What To Wear Based On The Weather</a></h3>
              <pre>
              Hackbright Project:
                What to wear based on the weather is a simple to use app that allows the user to quickly see some suggestions for outfits to wear based on their local weather conditions. 

                The inspiration for this project was Emily simply solving her own problem – never knowing what to wear one day to the next with the wild weather swings in Texas. 

                All the user has to do is create their account including their zip code/s for their home and work areas, they add in garments to their profile and the algorithm does the rest! 

                This app is destined to hit the app stores for you to use on your phone in the future. It will have new features including a random outfit generator, a save my favorite outfit function, and one day a chance to upload images of your own clothes so you can get really personalized suggestions for what to wear based on your local weather conditions. 

                Tech stack
                Python, Flask, Javascript, JQuery, PostgreSQL, SQLAlchemy, AJAX, Jinja2, Bootstrap, HTML, CSS

                APIs Used:
                Openweathermap.org

                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/8XVnTT_rkRc" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


              </pre>
            </div>
            {/* Project 2 */}
            <div className="App-project">
              <h3>Project 2</h3>
              <p>
                An e-commerce website built with React, Redux, and Node.js that
                enables users to browse, search, and purchase products. The
                application includes features such as product catalog, shopping
                cart, user authentication, and payment processing using Stripe.
              </p>
            </div>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="App-section">
          <h2>Contact</h2>
          <p>
            Interested in working together? Let's connect! You can reach me at
            [email protected] or through the form below. You can also schedule an
            interview with me using the link below.
          </p>
          <a
            href="https://calendly.com/your-calendar-link"
            target="_blank"
            rel="noopener noreferrer"
            className="App-cta"
          >
            Schedule an Interview
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;


