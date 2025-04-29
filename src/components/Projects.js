import proj1 from "../assets/img/proj1.png"
import proj2 from "../assets/img/proj2.png"
import proj3 from "../assets/img/proj3.png"
import graph from "../assets/img/accuracy-graph.png"

import proj5 from "../assets/img/proj5.png"

import Card from "./props/Card"





export default function Projects() {


    return (
        <>
            <div id="projects">
                {/* PROJECTS TITLE */}
                <span className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-background px-6 text-blue-900">SELECTED PROJECTS</span>
                </span>

                {/* PROJECTS */}
                <div class="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div class=" mx-22 mt-20 mb-10 relative block overflow-hidden rounded-lg">
                        <div class="grid md:grid-cols-2 grid-rows-2 sm:justify-between sm:gap-4">



                            {/* PROJECT 4 */}
                            {/* GREP + SED */}
                            <Card
                                imgsrc={proj5}
                                tags=" ALGORITHMS | COMPUTATION THEORY | AUTOMATA THEORY | DATASTRUCTURES  "
                                title="Unix Grep & Sed"
                                link="https://github.com/johnkimdw/"
                                description="Built a regex matcher in python with a modified Dijkstra's algorithm, parsing regex to regular operations to NFAs. Constructed the Unix sed command by creating a tree of operators, operands, and groups. 
"
                            />

                            {/* PROJECT 2 */}
                            {/* ALORA FINANCE */}
                            <Card
                                imgsrc={proj2}
                                tags=" FULL STACK | WEB DESIGN | START-UP  "
                                title="Alora Finance"
                                link="https://alora-finance.vercel.app/"
                                description="A financial education website to educate students on personal finance.
                                    Led a team of nine college students to deploy the website through ReactJS, Redux, Django, and PostgreSQL."
                            />

                            {/* PROJECT 1 */}
                            {/* ML */}
                            <Card
                                imgsrc={graph}
                                tags=" ML | Neural Networks | LLM "
                                title="ML Pickup Line Generator & Classifier"
                                link="https://github.com/johnkimdw/Pickup-Line-Generator"
                                description="Recurrent neural network built in Python using TensorFlow and Keras to help with in-person and online dating."
                            />
                            

                            {/* PROJECT 3 */}
                            {/* CRK */}
                            <Card
                                imgsrc={proj3}
                                tags=" REACTJS | DJANGO | API "
                                title="Cookie Run Kingdom Web Application"
                                link="https://github.com/johnkimdw/Cookie-Run-Kingdom-AI-Battler"
                                description="Webapp that stores cookies stats, descriptions, and more to predict arena game outcomes."
                            />

                            

                            {/* PROJECT 4 */}
                            {/* SUDOKU SOLVER */}
                            {/* <Card
                                imgsrc={proj4}
                                tags=" GUI | PYTHON | ALGORITHMS "
                                title="Sudoku Solver"
                                link="https://github.com/johnkimdw/Sudoku-Solver"
                                description="Solves sudoku puzzles through a backtracking algorithm and visualizes the process."
                            /> */}

                        

                        </div>

                            
                    </div>
                    {/* <p class="bg-green-500 text-text outline-red-500">hello world</p> */}
                </div>
            </div>


            

        </>
    );
}
