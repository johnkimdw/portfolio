export default function Intro() {
    return (
        <>

        <div class="w-screen h-screen max-w-full max-h-3xl pt-16">
            <div class="container mx-auto py-5">
                <div class="px-20 py-20 mx-22 my-20 relative block overflow-hidden rounded-lg border border-accent p-4 sm:p-6 lg:p-8">
                    <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            Building a SaaS product as a software developer
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                        </div>

                    </div>

                    <div className="mt-4">
                        <p className="max-w-[40ch] text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                        maiores deleniti consectetur nobis et eaque.
                        </p>
                    </div>

                    <dl className="mt-6 flex gap-4 sm:gap-6">
                        <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Published</dt>
                        <dd className="text-xs text-gray-500">31st June, 2021</dd>
                        </div>

                        <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                        <dd className="text-xs text-gray-500">3 minute</dd>
                        </div>
                    </dl>
                </div>
                {/* <p class="bg-green-500 text-text outline-red-500">hello world</p> */}
            </div>
        </div>

        </>
    );
}

