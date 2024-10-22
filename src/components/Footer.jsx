const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-gray-400">
              © 2024 Barris Vius. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 mt-2">
            Tens preguntes? Escriu-nos a <a href="mailto:info@latevaempresa.com" className="text-white underline">info@barrisvius.com</a>
            </p>
          </div>
  
          {/* Enlaces a redes sociales */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.007 3.673 9.128 8.438 9.876v-6.988H7.898v-2.888h2.54v-2.205c0-2.507 1.493-3.888 3.775-3.888 1.094 0 2.238.196 2.238.196v2.47h-1.26c-1.241 0-1.626.769-1.626 1.556v1.87h2.773l-.443 2.888h-2.33v6.988C18.327 21.128 22 17.007 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M8.29 20.253c7.547 0 11.675-6.155 11.675-11.49 0-.175-.004-.35-.012-.523A8.347 8.347 0 0022 5.92a8.189 8.189 0 01-2.357.636 4.097 4.097 0 001.805-2.254 8.22 8.22 0 01-2.605.977 4.105 4.105 0 00-6.993 3.743A11.65 11.65 0 013.221 4.8a4.048 4.048 0 00-.555 2.086 4.105 4.105 0 001.828 3.415 4.104 4.104 0 01-1.85-.51v.051c0 1.99 1.414 3.644 3.287 4.024a4.095 4.095 0 01-1.844.069 4.105 4.105 0 003.83 2.845A8.244 8.244 0 012 18.62a11.617 11.617 0 006.29 1.842"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 2.163c3.197 0 3.584.012 4.85.07 1.348.061 2.527.278 3.586 1.02a4.907 4.907 0 011.021 3.586c.058 1.266.07 1.653.07 4.85s-.012 3.584-.07 4.85c-.061 1.348-.278 2.527-1.021 3.586a4.907 4.907 0 01-3.586 1.021c-1.266.058-1.653.07-4.85.07s-3.584-.012-4.85-.07c-1.348-.061-2.527-.278-3.586-1.021A4.907 4.907 0 012.163 16c-.058-1.266-.07-1.653-.07-4.85s.012-3.584.07-4.85c.061-1.348.278-2.527 1.021-3.586A4.907 4.907 0 014.15 2.233C5.425 2.163 5.812 2.15 12 2.163zm0-2.163C8.746 0 8.343.013 7.167.07A6.977 6.977 0 003.67 1.17 6.977 6.977 0 001.17 3.67C.013 4.843 0 5.246 0 8.5s.013 3.657.07 4.833a6.977 6.977 0 001.17 3.33A6.977 6.977 0 003.67 21.83c1.177.745 2.27 1.072 3.78 1.07 1.176.003 1.581.007 4.05.007 2.471 0 2.876-.004 4.05-.007 1.51 0 2.604-.325 3.78-1.07a6.977 6.977 0 002.5-2.57 6.977 6.977 0 001.17-3.33c.057-1.176.07-2.362.07-4.833s-.013-3.657-.07-4.833a6.977 6.977 0 00-1.17-3.33A6.977 6.977 0 0018.83.234 6.977 6.977 0 0016.33-.07C15.153-.13 14.75-.143 12 0zM12 5.838a6.162 6.162 0 100 12.325A6.162 6.162 0 0012 5.838zm0 10.225a4.063 4.063 0 110-8.125 4.063 4.063 0 010 8.125zm5.25-10.18a1.441 1.441 0 100-2.883 1.441 1.441 0 000 2.883z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  