const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <p className="mb-2">
        © {year} SpotImage Card Generator. Made with ❤️ by{" "}
        <a href="https://github.com/AlfredoGJ" className="underline">
          @AlfredoGJ
        </a>
      </p>
      <p className="opacity-50 text-xs">
        This application is not affiliated with Spotify
      </p>
    </footer>
  );
};

export default Footer;
