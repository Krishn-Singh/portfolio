import Link from "next/link";

const Navbar = () => {
    return (
      <div className="nav-container">
        <div className="logo">
          <Link href="/">
            Krish Portfolio
          </Link>
        </div>
        <a href='https://drive.google.com/file/d/1zdjJVg1ZkCNnHnn2xcHMR7xsObCleRY-/view?usp=share_link' className="cta-btn" download>Resume</a>
      </div>
    )
  }
  export default Navbar;