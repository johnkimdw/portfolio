import proj1 from "../assets/img/proj1.png"

export default function Projects() {
    return (
        <>
            {/* PROJECTS TITLE */}
            <span className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative flex justify-center">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-blue-700 to-transparent opacity-75"
                ></div>

                <span className="relative z-10 bg-background px-6 text-text">SELECTED PROJECTS</span>
            </span>

            {/* PROJECTS */}
            <div class="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div class=" mx-22 my-20 relative block overflow-hidden rounded-lg">
                    <div class="grid grid-cols-2 grid-rows-2 sm:justify-between sm:gap-4">


                    
                        <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                                alt="project 1"
                                src={proj1}
                                className="h-56 w-full object-cover"
                            />

                            <div className="bg-primary/10 p-4 sm:p-6">
                                <p className="block text-xs text-gray-600">PRODUCT DESIGN | OBSERVABILITY | API | DASHBOARD</p>

                                <a href="https://github.com/JohndKim/Pickup-Line-Generator">
                                <h3 className="mt-0.5 text-lg text-text hover:text-primary">ML Pickup Line Generator & Classifier</h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">
                                Recurrent neural network built in Python using TensorFlow and Keras to help with in-person and online dating.
                                

                                </p>
                            </div>
                        </div>
                        
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>

                    </div>

                        
                </div>
                {/* <p class="bg-green-500 text-text outline-red-500">hello world</p> */}
            </div>


            

        </>
    );
}