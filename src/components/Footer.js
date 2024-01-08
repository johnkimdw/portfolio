import LinkedIn from "../assets/svg/linkedin.svg"
import Github from "../assets/svg/github.svg"
import Resume from "../assets/svg/resume.svg"




export default function Footer() {
    return(
        <>
            <footer className="bg-background">
                <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-2 sm:px-6 lg:px-8">
                    <div className="border-t border-gray-100 sm:flex sm:items-center sm:justify-between">
                        
                        {/* LEFT SIDE (TEXT) */}
                        <ul className="flex flex-wrap flex-col justify-center gap-4 text-xs lg:justify-end">
                            <li class="inline">
                                <a href="#" className="text-gray-500 transition hover:opacity-75"><span class="font-bold">dkim37@nd.edu</span></a>
                            </li>
                            <li class="inline">
                                <a target="_blank" href="https://icons8.com" className="text-gray-500 transition hover:opacity-75">Icons from Icons8</a>
                            </li>

                            
                        </ul>

                        {/* ICONS */}
                        <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
                            {/* LINKEDIN */}
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/dongwhi-john-kim/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 cursor-pointer"
                                >
                                    <span className="sr-only">LinkedIn</span>
                                    <img alt="LinkedIn Icon" src={LinkedIn} style={{width: 30, height: 30, opacity: 1}}/>

                                    {/* <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg> */}
                                </a>
                            </li>
                            {/* GITHUB */}
                            <li>
                                <a
                                    href="https://github.com/JohndKim"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Github</span>
                                    <img alt="Github Icon" src={Github} style={{width: 30, height: 30, opacity: 1}}/>

                                </a>
                            </li>
                            {/* RESUME */}
                            <li>
                                <a
                                    href="https://docs.google.com/document/d/1dXNiWt0LyhGFOA0xO2VYf4OGeZdwGkR1/edit?usp=sharing&ouid=105997156362604829992&rtpof=true&sd=true"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Resume</span>
                                    <img alt="Resume Icon" src={Resume} style={{width: 30, height: 30, opacity: 1}}/>

                                </a>
                            </li>


                        </ul>
                    </div>
                </div>
            </footer>
        </>


    );




}
