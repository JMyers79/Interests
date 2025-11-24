
const Footer = ({fTitle, iLink, tLink, text, linkColor}) => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {fTitle} </p>
        <p>
          {text}{" "}
          <a href= {iLink} className="text-blue-400">
            Twitter
          </a>{" "}
          and{" "}
          <a
            href={tLink}
            className= {linkColor}
          >
            Instagram
          </a>
        </p>
      </footer>
    );
    };

export default Footer;