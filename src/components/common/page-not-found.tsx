import Logo from '@/assets/logo.png'
import pageNotFoundImage from '@/assets/images/pagenotfound.png'
import { Link } from 'react-router'

const PageNotFound = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="mx-2 w-full border border-gray-300  shadow-md sm:w-90">
                <div className="flex flex-col items-center bg-linear-to-b from-sky-950 to-sky-900">
                    <div className="flex flex-col items-center px-8 py-4">
                        {/* logo */}
                        <div className="mb-4 size-10">
                            <img
                                className="h-full w-full rounded-full object-cover"
                                src={Logo}
                            />
                        </div>
                        {/* heading */}
                        <h1 className="text-lg font-medium tracking-tight text-gray-100">
                            Page Not Found
                        </h1>
                        {/* text */}
                        <p className="pt-2 text-sm text-gray-400">
                            You seems Lost
                        </p>
                    </div>
                </div>

                <div>
                    <img src={pageNotFoundImage} />
                </div>

                <div className="flex justify-between px-12 py-4 items-center bg-linear-to-b from-sky-950 to-sky-900">
                    <h1 className="text-lg font-medium tracking-tight text-gray-100">
                        Page Not Found
                    </h1>
                    <Link
                        className="bg-white text-black border border-gray-300 py-1 px-2 rounded text-xs hover:text-white hover:bg-sky-600 transition-all duration-300 active:bg-sky-700 truncate "
                        to={'/'}
                    >
                        Go to Home
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default PageNotFound