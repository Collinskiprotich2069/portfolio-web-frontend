import "../styles/Footer.css";

function Footer() {
  let date = new Date().getFullYear();
  return (
    <>
      <div className="footer-section">
        <p> &copy;{ date} Developed and maintained by kiprotich Collins</p>
      </div>
    </>
  );
}

export default Footer;
