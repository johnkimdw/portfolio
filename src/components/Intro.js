import Star from "../assets/SplineModel"

export default function Intro() {
    return (
        <>

        <div class="w-screen h-screen max-w-full max-h-3xl pt-16">
            <div class="container mx-auto py-5 px-4 sm:px-6 lg:px-8">
                <div class="bg-primary/5 px-20 py-20 mx-22 my-20 relative block overflow-hidden rounded-lg p-4 sm:p-6 lg:p-8">

                    {/* NAME INTRO */}
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
                    {/* <Star/> */}

                    
                </div>
                {/* <p class="bg-green-500 text-text outline-red-500">hello world</p> */}
            </div>
        </div>

        </>
    );
}

