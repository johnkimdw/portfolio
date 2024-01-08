import Star from "../assets/SplineModel"

export default function Intro() {
    return (
        <>

        <div class="w-screen max-w-full max-h-3xl pt-16">
            <div class="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                {/* ABOUT SECTION */}
                <div class="bg-background  mx-22 my-20 relative block overflow-hidden rounded-lg p-6 sm:p-14 lg:p-22 border border-black">

                    {/* NAME INTRO */}
                    <div class="grid grid-cols-2 sm:justify-between sm:gap-4">
                        {/* COL 1 */}
                        <div>
                            <h1 class="text-4xl font-bold text-text">
                                Hi, I'm John&#160;&#160;
                                <span class="animate-wave text-4xl">👋🏻</span>
                            </h1>
                            {/* <span class="animate-wave text-6xl">👋🏻</span> */}

                            <br/>
                            <p className="mt-1 text-xl font-medium text-gray-600">I am a sophomore at the University of Notre Dame and a passionate, results-driven developer who strives to empower people through technology.</p>
                            <br/>
                            <p class="mt-1 text-xl font-medium text-black">Incoming SWE intern @ Humana</p>
                            
                            <br/>
                            <p className="mt-1 text-xl font-medium text-gray-600">Currently a research assistant at the Lucy Institute of Data and Society</p>
                        </div>
                        {/* COL 2 */}
                        <div class="overflow-visible">
                            {/* <p>2</p> */}
                            <Star/>
                        </div>
                    </div>
                    {/* <Star/> */}
                        
                </div>
                {/* <p class="bg-green-500 text-text outline-red-500">hello world</p> */}
            </div>
        </div>


{/* 
        <div class="w-screen h-screen max-w-full max-h-3xl pt-16">
            <div class="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div class="bg-primary/5 px-20 py-20 mx-22 my-20 relative block overflow-hidden rounded-lg p-4 sm:p-6 lg:p-8">

                    <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                        <h1 class="text-4xl font-bold text-text">
                            Hi, I'm John
                        </h1>

                        <br/>

                        <p className="mt-1 text-xl font-medium text-gray-600">I am a student at the University of Notre Dame and developer who strives to bridge the gap between complex technologies and human beings.</p>


                        <br/>
                        
                        <p className="mt-1 text-xl font-medium text-gray-600">Incoming SWE intern @ Humana </p></div>


                    </div>
                    <Star/>

                    
                </div>
            </div>
        </div> */}


        </>
    );
}

