import React from "react";
import logo from "../../assets/LOGO.png";
import {RiLinkedinBoxFill} from "react-icons/ri";

function Footer () {
    return(
        <footer className="mt-16 sm:mt-32 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://suarezpharma.co/" className="flex items-center">
                            <img src={logo} className="h-8 mr-16"
                                 alt="FlowBite Logo"/>
                        </a>
                    </div>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                        href="https://www.linkedin.com/in/john-bernal-881698260/" className="hover:underline">Desarrollado por John Bernal</a>. Todos los derechos reservados.
          </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/profile.php?id=100063701073598" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd"
                                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                      clip-rule="evenodd"/>
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://www.linkedin.com/company/suarez-pharma-by-cm37/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <RiLinkedinBoxFill/>
                            <span className="sr-only">Linkedin Account</span>
                        </a>
                        <a href="https://suarezpharma.co/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                      d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;