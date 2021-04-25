import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from './photo.jpeg'
import background from './background-sp.png'
import myCV from './CV-WeslleyDavid.pdf'

function App() {
  return (

    <div className="App" class="container">

      <div class="jumbotron jumbotron-fluid" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPositionY: '-100px' }}>
        <div class="container">
          <h3 class="display-8" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', color: '#00ffff' }}>Hello, world.</h3>
          <h1 class="display-4" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', color: 'white' }}>I'm Weslley Botelho.</h1>
          <p class="lead" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', color: 'white' }}>| Software Engineer | Fullstack Developer |</p>

        </div>
      </div>

      <section id="about">
        <div class="container col-md-6 section-intro" style={{ marginTop: '30px' }}>
          <ul class="intro-social">
            <li><a href="https://www.linkedin.com/in/weslley-david-004472105"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://www.facebook.com/santtos.weslley/"><i class="fa fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/weslleybotelho_/"><i class="fa fa-instagram"></i></a></li>
          </ul>
          <br></br>
          <h5 style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', color: '#00ccff' }}>ABOUT</h5>
          <h1 style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>Let me introduce myself.</h1>
          <div style={{ marginTop: '30px' }} class="intro-info">
            <img src={photo} class="rounded-circle float-left" style={{ width: '90px', height: '100px', marginLeft: '-80px', marginRight: '20px' }} alt="Profile Picture" />
            <p>Software Engineer with 3 years background in development and analysis of financial projects on Cloud platform. Great technical knowledge, always seeking for technical and personal improvement and growing, fast adaptation to new environments and working groups.</p>
          </div>
        </div>
        <div class="container col-md-10" style={{ marginTop: '30px' }}>
          <div class="row about-content">
            <div class="col-md-5 info-list">
              <h3>Profile</h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item border-0">
                  <strong>Fullname:</strong> <br></br>
                  <span>Weslley David Botelho Santos</span>
                </li>
                <li class="list-group-item border-0">
                  <strong>Birth Date:</strong> <br></br>
                  <span>June 8, 1998</span>
                </li>
                <li class="list-group-item border-0">
                  <strong>Job:</strong> <br></br>
                  <span>Software Engineer, Fullstack Developer</span>
                </li>
                <li class="list-group-item border-0">
                  <strong>Website:</strong> <br></br>
                  <span>www.weslleybotelho.com (in construction)</span>
                </li>
                <li class="list-group-item border-0">
                  <strong>Email:</strong> <br></br>
                  <span>weslley.davidbs@gmail.com</span>
                </li>
              </ul>
            </div>
            <div class="col-md-5 skill-bar" style={{ marginLeft: '15%' }}>
              <h3>Skills</h3>

              <ul class="list-group list-group-flush">
                <li class="list-group-item border-0">
                  <strong>C#</strong>
                  <div class="progress">
                    <div class="progress-bar bg-dark" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                  </div>
                </li>
                <li class="list-group-item border-0">
                  <strong>JavaScript/TypeScript</strong>
                  <div class="progress">
                    <div class="progress-bar bg-dark" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                  </div>
                </li>
                <li class="list-group-item border-0">
                  <strong>CSS/HTML</strong>
                  <div class="progress">
                    <div class="progress-bar bg-dark" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                  </div>              </li>
                <li class="list-group-item border-0">
                  <strong>DevOps</strong>
                  <div class="progress">
                    <div class="progress-bar bg-dark" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                  </div>              </li>
                <li class="list-group-item border-0">
                  <strong>AWS</strong>
                  <div class="progress">
                    <div class="progress-bar bg-dark" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                  </div>
                </li>

              </ul>

            </div>
          </div>
          <a href={myCV} download="WeslleyBotelho_CV">
            <button type="button" class="btn btn-dark" style={{ marginLeft: '40%', marginTop: '20px' }}>DOWNLOAD CV</button>
          </a>
        </div>
      </section>

      <section id="resume" class="grey-section">
        <div class="container col-md-10">

          <div class="row section-intro">
            <div class="container col-md-6">

              <h5 style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>Resume</h5>
              <h1 style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>More of my credentials.</h1>

              <p class="lead" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>Here is a little bit of my journey to date in technology. In total I have 6 years of experience in the area, with a lot of passion for what I do.</p>

            </div>
          </div>

          <div class="row resume-timeline">

            <div class="col-md-12 resume-header">

              <h2 style={{ color: '#00ccff' }}>Work Experience</h2>

            </div>

            <div class="col-md-12">

              <div class="timeline-wrap">

                <div class="timeline-block">

                  <div class="timeline-ico">
                    <i class="fa fa-graduation-cap"></i>
                  </div>

                  <div class="timeline-header">
                    <h3>Software Engineer</h3>
                    <p>Oct 2018 - Present</p>
                  </div>

                  <div class="timeline-content">
                    <h4>Itáu Unibanco Bank</h4>
                    <p>Developing new systems in Management Systems Area, testing and monitoring homologation and implementation using Cobol, C# (.net core), SQL Server, Oracle, HTML, CSS, Javascript, JSON and Angular.
                    Meeting with client and Writing documents of Requirements for new Systems.
                  </p>
                  </div>

                </div>

                <div class="timeline-block">

                  <div class="timeline-ico">
                    <i class="fa fa-graduation-cap"></i>
                  </div>

                  <div class="timeline-header">
                    <h3>Development Intern</h3>
                    <p>Nov 2017 - Oct 2018</p>
                  </div>

                  <div class="timeline-content">
                    <h4>Itáu Unibanco Bank</h4>
                    <p>Software development (Cobol) with the support of a Senior Developer, assisting in the activities from the design to the final delivery of the solution and also
                    creating documentation of the systems and their solutions.</p>
                  </div>

                </div>

                <div class="timeline-block">

                  <div class="timeline-ico">
                    <i class="fa fa-graduation-cap"></i>
                  </div>

                  <div class="timeline-header">
                    <h3>Technical Support</h3>
                    <p>Apr 2016 - Oct 2017</p>
                  </div>

                  <div class="timeline-content">
                    <h4>Toledo Piza Lawyers</h4>
                    <p>Presence and remote call attendance, mounting and maintenance
                    of micro, installation of printers, creation of user in active directory, creation of email in Exchange. Responsible for the organization and maintenance of computer equipment</p>
                  </div>

                </div>

                <div class="timeline-block">

                  <div class="timeline-ico">
                    <i class="fa fa-briefcase"></i>
                  </div>

                  <div class="timeline-header">
                    <h3>Young Apprentice</h3>
                    <p>May 2014 - Sep 2015</p>
                  </div>

                  <div class="timeline-content">
                    <h4>Toledo Piza Lawyers</h4>
                    <p>Mounting, maintenance of computer and software installation. Responsible for the organization and maintenance of computer equipment.</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div class="row resume-timeline">

            <div class="col-md-12 resume-header">

              <h2 style={{ color: '#00ccff' }}>Education</h2>

            </div>

            <div class="col-md-12">

              <div class="timeline-wrap">

                <div class="timeline-block">

                  <div class="timeline-ico">
                    <i class="fa fa-graduation-cap"></i>
                  </div>

                  <div class="timeline-header">
                    <h3>Technologist</h3>
                    <p>Feb 2016 - Dec 2019</p>
                  </div>

                  <div class="timeline-content">
                    <h4>Fatec, São Paulo</h4>
                    <p>Administration of systems, requirements analysis, systems design, patterns, development of systems and database.</p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <footer>
        <div class="row">

          <div class="col-md-6 social">

            <ul class="footer-social">
              <li><a href="https://www.linkedin.com/in/weslley-david-004472105"><i class="fa fa-linkedin"></i></a></li>
              <li><a href="https://www.facebook.com/santtos.weslley/"><i class="fa fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/weslleybotelho_/"><i class="fa fa-instagram"></i></a></li>
            </ul>

          </div>

          <div class="col-md-6" style={{'text-align': 'right'}}>
            <div class="copyright">
              <span>© Copyright Weslley 2021.</span>
              <span>Design by <a href="#">Weslley Botelho</a></span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
