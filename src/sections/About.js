function About() {
  return(
    <body className="about-container section" id="about">
        <div className="flex-container w-containter">
          <div>
            <h1 className="heading">Software Engineer</h1>
            <p className="paragraph">
            Hi there! My name is Sam and I am a software engineer, developer, full-stack, etc. So many titles...I was born and raised in Littleton, CO. Growing up, computers were my source of knowledge and entertainment. I grew up with a background involving a lot of computing knowledge so I decided to join the field and learn how to master my technique. Everyday I grow and develop my skills so that I can be involoved in the computer science conversation. This is my passion and I hope you enjoy looking through my portfolio!‍
            <br />
            <br />
            <br />
            </p>
            <button>Resume</button>
          </div>
          <div className="hero-image-mask"><img src={require("../pictures/profile.JPG")} alt="profile" width="200"/></div>
        </div>
    </body>
  )
}

export default About