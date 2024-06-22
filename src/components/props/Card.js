export default function Projects(props) {


    return (
        <>

            <div className="relative w-full border border-red-500/0 cursor-pointer 
            ">
                
                {/* IMAGE */}
                <div className="relative w-full h-80 bg-gray-400/10 overflow-hidden border border-white  rounded p-4">
                    <img
                        alt="project"
                        src={props.imgsrc}
                        className="w-full h-full object-cover object-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                    />
                </div>

                <div className="bg-primary/0 p-4 sm:p-6">
                    <p className="block text-xs text-gray-600"> {props.tags} </p>

                    <a href={props.link}>
                    <h3 className="mt-0.5 text-lg text-blue-600 hover:text-primary">{props.title}</h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">
                    {props.description}
                    </p>
                </div>
                

            </div>


        </>
    );
}