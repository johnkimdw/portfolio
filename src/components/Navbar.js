import star from "../assets/img/star.svg"

export default function Navbar() {
    return (
        <>
            {/* NAVBAR */}
           <nav class="fixed w-full top-0 left-0">
                <header className="bg-background/30 backdrop-blur-sm ">
                {/* px-4 sm:px-6 lg:px-8 */}
                    <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            {/* LOGO */}
                            <div className="flex md:flex md:items-center md:gap-12">
                                <div className="block">
                                
                                    <a href="#">
                                        <img alt="JK" src={star} style={{width: 50, height: 50, opacity: 1}}/>
                                    </a>
                                    
                                </div>
                            </div>
                        
                            {/* RIGHT SIDE */}
                            <div class="md:flex md:items-center md:gap-12">    
                                <nav aria-label="Global" class="md:block">
                                    <ul class="flex items-center gap-6 text-sm">
                                        <li>
                                        <a class="text-text transition hover:text-gray-500/75" href="#projects"> PROJECTS </a>
                                        </li>

                                        <li>
                                        <a class="text-text transition hover:text-gray-500/75" href="#about"> ABOUT </a>
                                        </li>

                                        <li>
                                        <a class="text-text transition hover:text-gray-500/75" href="/"> RESUME </a>
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

