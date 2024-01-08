import proj1 from "../assets/img/proj1.png"
import proj2 from "../assets/img/proj2.png"
import proj3 from "../assets/img/proj3.png"
import proj4 from "../assets/img/proj4.png"



export default function Projects() {


    return (
        <>
            <div id="projects">
                {/* PROJECTS TITLE */}
                <span className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-background px-6 text-text">SELECTED PROJECTS</span>
                </span>

                {/* PROJECTS */}
                <div class="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div class=" mx-22 mt-20 mb-10 relative block overflow-hidden rounded-lg">
                        <div class="grid md:grid-cols-2 grid-rows-2 sm:justify-between sm:gap-4">





                            {/* PROJECT 1 */}
                            {/* ML */}
                            <div className="relative w-full border border-red-500/0 cursor-pointer 
                            ">
                              
                                <div className="relative w-full h-80 bg-gray-400/10 overflow-hidden border border-black  rounded p-4">
                                    <img
                                        alt="project 1"
                                        src={proj1}
                                        className="w-full h-full object-cover object-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                                    />
                                </div>

                                <div className="bg-primary/0 p-4 sm:p-6">
                                    <p className="block text-xs text-gray-600"> ML/AI | Neural Networks </p>

                                    <a href="https://github.com/JohndKim/Pickup-Line-Generator">
                                    <h3 className="mt-0.5 text-lg text-text hover:text-primary">ML Pickup Line Generator & Classifier</h3>
                                    </a>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">
                                    Recurrent neural network built in Python using TensorFlow and Keras to help with in-person and online dating.
                                    </p>
                                </div>
                                

                            </div>

                            {/* PROJECT 2 */}
                            {/* ALORA FINANCE */}
                            <div className="relative w-full border border-red-500/0 cursor-pointer 
                            ">
                                {/* IMAGE */}
                                <div class="relative w-full h-80 bg-gray-400/10 overflow-hidden border border-black  rounded p-4
                                
                                ">
                                    <img
                                        alt="project 2"
                                        src={proj2}
                                        class=" w-full h-full object-cover object-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
                                    />
                                </div>
                                

                                <div className="bg-primary/0 p-4 sm:p-6">
                                    <p className="block text-xs text-gray-600"> WEB DESIGN | START-UP | FULL STACK</p>

                                    <a href="https://alora-finance.vercel.app/">
                                    <h3 className="mt-0.5 text-lg text-text hover:text-primary">Alora Finance</h3>
                                    </a>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">
                                    A financial education website to educate students on personal finance.
                                    <br/>
                                    Lead a team of seven college students to deploy the website through ReactJS, Redux, Django, and PostgreSQL.
                                    </p>
                                </div>
                            </div>

                            {/* PROJECT 3 */}
                            {/* CRK */}
                            <div className="relative w-full border border-red-500/0 cursor-pointer 
                            ">
                                {/* IMAGE */}
                                <div class="relative w-full h-80 bg-gray-400/10 overflow-hidden border border-black  rounded p-4
                                
                                ">
                                    <img
                                        alt="project 3"
                                        src={proj3}
                                        class="w-full h-full object-cover object-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                                    />
                                </div>
                                

                                <div className="bg-primary/0 p-4 sm:p-6">
                                    <p className="block text-xs text-gray-600">REACTJS | DJANGO | API </p>

                                    <a href="https://github.com/JohndKim/Cookie-Run-Kingdom-AI-Battler">
                                    <h3 className="mt-0.5 text-lg text-text hover:text-primary">Cookie Run Kingdom Web Application</h3>
                                    </a>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">
                                    Webapp that stores cookies stats, descriptions, and more to predict arena game outcomes.


                                    </p>
                                </div>
                            </div>

                            {/* PROJECT 4 */}
                            {/* SUDOKU SOLVER */}
                            <div className="relative w-full border border-red-500/0 cursor-pointer 
                            ">
                                {/* IMAGE */}
                                <div class="relative w-full h-80 bg-gray-400/10 overflow-hidden border border-black  rounded p-4
                                
                                ">
                                    <img
                                        alt="project 4"
                                        src={proj4}
                                        class="w-full h-full object-cover object-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                                    />
                                </div>
                                

                                <div className="bg-primary/0 p-4 sm:p-6">
                                    <p className="block text-xs text-gray-600">GUI | PYTHON | ALGORITHMS </p>

                                    <a href="https://github.com/JohndKim/Sudoku-Solver">
                                    <h3 className="mt-0.5 text-lg text-text hover:text-primary">Sudoku Solver</h3>
                                    </a>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">
                                    Solves sudoku puzzles through a backtracking algorithm and visualizes the process.


                                    </p>
                                </div>
                            </div>

                        </div>

                            
                    </div>
                    {/* <p class="bg-green-500 text-text outline-red-500">hello world</p> */}
                </div>
            </div>


            

        </>
    );
}