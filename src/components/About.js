import headshot from "../assets/img/headshot.JPG"


export default function About() {
    return (
        <>
            <div id="about">
                {/* ABOUT TITLE */}
                <span className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-background px-6 text-blue-900">ABOUT ME</span>
                </span>


                {/* ABOUT ME SECTION */}
                <div class="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div class="bg-blue-100/30 p-10 mx-22 my-20 relative block overflow-hidden border rounded-lg border-primary  ">
                        <div class="grid md:grid-cols-2 sm:justify-between sm:gap-4 text-text">
                            {/* LEFT——PHOTO & NAME & SHORT DESC */}
                            <div class="place-self-center">

                                <img src={headshot} class="mx-auto block rounded-full" width="280" height="280"></img>

                                <div class="lg:px-10 md:px-8 pt-4 mx-auto block ">
                                    <div class="font-garamond font-bold italic text-4xl text-primary">
                                        John Kim
                                        <span class="font-gb text-xl">        김동휘</span>
                                        <div class="mt-px"></div>
                                        {/* <span class="font-gb text-base font-normal">동C휘: <span class="font-garamond text-xl">east star</span></span> */}
                                    </div>
                                    {/* <h1 class="font-garamond italic text-4xl">John Kim</h1> */}

                                    <br/>
                                    <span class="font-bold"></span> NJ, Seoul, and Shanghai.
{/* 
                                    I am a sophomore at the University of Notre Dame majoring in Computer Science and minoring in Real Estate. I'm currently researching machine learning and how to apply algorithmic recourse on regressions to provide high-stakes explanations for decisions such as loan decisions at the Lucy Family Institute for Data and Society. 
                                
                                
                                <br/>
                                <br/>
                                
                                In my free time, I like cooking and also dancing (recently dressed up as Snow White for one of my dances...). Feel free to reach out to discuss anything related to tech, food, and k-dramas! */}

                                
                                    
                                </div>
                                
                            </div>

                            {/* RIGHT——LONG DESC & EDUCATION & ACHIEVEMENTS */}
                            <div class="">
                                <div class=" lg:px-10 md:px-8 pt-4 align-middle">
                                {/* rotating text: Fun Facts: never trying jellied eels again, */}

                                    {/* ABOUT DESC */}

                                    I am a junior at the University of Notre Dame majoring in Computer Science. I research alongside Professor Nuno Moniz and we recently published a paper on relevance-aware algorithmic recourse, improving explainability of semi-autonomous decision-making models. Previously, I worked with him on analyzing ML cancer detection models that optimize hyperparameters through grid search.
                                    
                                    <br/>
                                    <br/>
                                    
                                    In my free time, I like cooking and dancing. I'm also just getting into One Piece from constant recommendations by my friends, although I do enjoy k-dramas more. Anyways, feel free to reach out to discuss anything related to tech, food, and shows!
                                


                                    {/* EDUCATION */}
                                    <div class="relative tracking-normal leading-4">
                                        <div class="mt-5 font-bold">Education</div>
                                        <span class="block bg-black/10 p-2.5 rounded-md my-2">2026 - University of Notre Dame</span>
                                        <span class="block bg-black/10 p-2.5 rounded-md">2022 - Wellington College International School</span>
                                    </div>

                                    {/* PUBLICATIONS */}
                                    <div class="relative tracking-normal leading-4">
                                        <div class="mt-5 font-bold">Publications</div>
                                        <a href="https://arxiv.org/abs/2405.19072">
                                            <span class="block bg-black/10 p-2.5 rounded-md my-2 text-text hover:text-black/60 underline">2024 - Relevance Aware Algorithmic Recourse</span>
                                        </a>

                                        
                                    </div>

                                    {/* ACHIEVEMENTS */}
                                    <div class="relative tracking-normal leading-4">
                                        <div class="mt-5 font-bold">Achievements</div>
                                        <span class="block bg-black/10 p-2.5 rounded-md my-2">2024 - iTREDs Scholar</span>
                                        <span class="block bg-black/10 p-2.5 rounded-md my-2">2022 - Sorin Scholar</span>
                                        <span class="block bg-black/10 p-2.5 rounded-md mb-2">202X - Deans List &#160;x3</span>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

