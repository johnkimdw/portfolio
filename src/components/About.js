import headshot from "../assets/img/headshot.JPG"


export default function About() {
    return (
        <>
            {/* ABOUT TITLE */}
            <span className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative flex justify-center">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                ></div>

                <span className="relative z-10 bg-background px-6 text-text">ABOUT ME</span>
            </span>


            {/* ABOUT ME SECTION */}
            <div class="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 border border-background">
                <div class="bg-about/0 p-10 mx-22 my-20 relative block overflow-hidden border rounded-lg border-black  ">
                    <div class="grid grid-cols-2 sm:justify-between sm:gap-4 text-text">
                        {/* PHOTO & NAME & SHORT DESC */}
                        <div class=" p-3 py-5 border border-background">

                            <img src={headshot} class="mx-auto block rounded-full" width="280" height="280"></img>

                            <div class="px-10 px-md-10 pt-4 mx-auto block">
                                <div class="font-garamond font-bold italic text-4xl">
                                    John Kim
                                    <span class="font-gb text-xl">        김동휘</span>
                                </div>
                                {/* <h1 class="font-garamond italic text-4xl">John Kim</h1> */}

                                <br/>
                                Born in Seoul.
                                <br/>
                                Raised in New Jersey.
                                <br/>
                                Lived in Shanghai.
                                <br/>
                                Studying in Notre Dame.
                                
                                {/* <div>
                                Seoul:&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; born
                                <br/>
                                New Jersey: &#160; raised
                                <br/>
                                Shanghai: &#160;&#160;&#160;&#160;&#160;&#160;&#160; lived
                                <br/>
                                Notre Dame: &#160;learned
                                <br/>
                                Seoul → New Jersey → Shanghai → Notre Dame
                                <br/> 

                                </div>*/}
                                
                            </div>
                            
                        </div>

                        {/* LONG DESC & EDUCATION & ACHIEVEMENTS */}
                        <div class=" p-5 py-5 py-md-8 pr-10 pr-md-5">
                        {/* rotating text: Fun Facts: never trying jellied eels again, */}

                            {/* ABOUT DESC */}

                            I am a sophomore at the University of Notre Dame majoring in Computer Science and minoring in Real Estate. I'm currently researching machine learning and how to apply algorithmic recourse on regressions to provide high-stakes explanations such as loan decisions at the Lucy Family Institute for Data and Society. 
                            
                            
                            <br/>
                            <br/>
                            
                            In my free time, I like watching k-dramas and also dancing (recently dressed as Snow White for one of my dances...). Feel free to reach out to discuss anything related to tech, horror movies, and mahjong!
                          


                            {/* EDUCATION */}
                            <div class="relative tracking-normal leading-4">
                                <div class="mt-5 font-bold">Education</div>
                                <span class="block bg-black/10 p-2.5 rounded-md my-2">2026 - University of Notre Dame</span>
                                <span class="block bg-black/10 p-2.5 rounded-md">2022 - Wellington College International School</span>
                            </div>

                            {/* ACHIEVEMENTS */}
                            <div class="relative tracking-normal leading-4">
                                <div class="mt-5 font-bold">Achievements</div>
                                <span class="block bg-black/10 p-2.5 rounded-md my-2">2023 - Sorin Scholar</span>
                                <span class="block bg-black/10 p-2.5 rounded-md mb-2">2023 - Deans List &#160;x2</span>
                                <span class="block bg-black/10 p-2.5 rounded-md">2021 - Patent Pending Hydrogel Bandage</span>

                            </div>
                            
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

