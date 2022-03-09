function Footer() {

  return (
    <footer className="footer">
      <h4 className="footer-item">©️samuelperalesg</h4>
      <div>
        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/samuelperalesg'><img id='linkedin' src={require('../pictures/linkedin-logo-3.png')} alt='linkedin'/></a>
        <a target="_blank" rel="noopener noreferrer" href='https://www.github.com/samuelperalesg'><img id='github' src={require('../pictures/github.png')} alt='github'/></a>
      </div>
    </footer>
  )
}

export default Footer