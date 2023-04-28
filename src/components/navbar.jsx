import Link from "next/link";

const Navbar = () => {
    return (
      <div className="nav-container">
        <div className="logo">
          <Link href="/">
            Krish Portfolio
          </Link>
        </div>
        <a href="" className="cta-btn" download="krishnavirsingh.pdf">Resume</a>
      </div>
    )
  }
  export default Navbar;