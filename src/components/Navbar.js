import { Link } from "react-scroll";

import ball from "../assets/img/ball-logo.png"
// import star from "../assets/img/jkdw logo.png"


export default function Navbar() {
    return (
        <>
            {/* NAVBAR */}
           <nav class="fixed z-50 w-full top-0 left-0">
                <header className="bg-blue-100/30 backdrop-blur-sm ">
                {/* px-4 sm:px-6 lg:px-8 */}
                    <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            {/* LOGO */}
                            <div className="flex md:flex md:items-center md:gap-12 cursor-pointer">
                                <div className="block">
                                
                                    <Link
                                            class="text-text hover:text-secondary cursor-pointer"
                                                activeClass="active"
                                                to="intro"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}>
                                        <img alt="JK" src={ball} style={{width: 50, height: 50, opacity: 1}}/>
                                            
                                    </Link>
                                    {/* <a href="#">
                                        
                                    </a> */}
                                    
                                </div>
                            </div>
                        
                            {/* RIGHT SIDE */}
                            <div class="md:flex md:items-center md:gap-12">    
                                <nav aria-label="Global" class="md:block">
                                    <ul class="flex items-center gap-6 text-sm">
                                        <li class="text-blue hover:text-secondary cursor-pointer">
                                        <Link
                                        class="text-primary  hover:text-blue-400 cursor-pointer"
                                            activeClass="active"
                                            to="projects"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}>PROJECTS</Link>
                                            {/* <a class="text-text transition hover:text-secondary" href="#projects"> PROJECTS </a> */}
                                        </li>

                                        <li class="text-text hover:text-secondary cursor-pointer">
                                        <Link
                                            class="text-primary  hover:text-blue-400 cursor-pointer"
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}>ABOUT</Link>
                                            {/* <a class="text-text transition hover:text-secondary" href="#about"> ABOUT </a> */}
                                        </li>

                                        <li>
                                            <a class="text-primary  hover:text-blue-400 transition" href="https://docs.google.com/document/d/1dXNiWt0LyhGFOA0xO2VYf4OGeZdwGkR1/edit?usp=sharing&ouid=105997156362604829992&rtpof=true&sd=true"> RESUME </a>
                                        </li>
                                    </ul>
                                </nav>                                            
                            </div>
                        
                        </div>
                    </div>
                </header>
            </nav>
        </>
    );
}

