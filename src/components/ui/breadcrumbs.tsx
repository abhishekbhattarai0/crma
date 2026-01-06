import { cn } from "@/utils/cn";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ className }: { className?: string }) => {
    const location = useLocation();

    const pathnames = location.pathname
        .split("/")
        .filter(Boolean);


    return (
        <nav className={cn("", className)} >
            <div className="flex w-full justify-between">
                <h1 className="text-foreground/80 font-semibold text-xl capitalize">
                    {location.pathname
                        .split("/").at(-1)}
                </h1>
                <ol className="flex flex-wrap items-center text-xs sm:text-sm text-gray-500">
                    {/* Home */}
                    {/* <li>
                    <Link
                        to="/"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        Home
                    </Link>
                </li> */}

                    {pathnames.map((value, index) => {
                        const to = "/" + pathnames.slice(0, index + 1).join("/");
                        const isLast = index === pathnames.length - 1;

                        return (
                            <li key={to} className="flex items-center ">
                                {/* Separator */}

                                {isLast ? (<>
                                    <span className="mx-2 text-gray-400">/</span>
                                    <span className=" text-gray-600 capitalize">
                                        {decodeURIComponent(value)}
                                    </span>
                                </>
                                ) : (
                                    <>
                                        <span className="mx-2 text-gray-400">/</span>
                                        <Link
                                            to={to}
                                            className="text-gray-700 hover:text-blue-800 capitalize transition-colors font-medium"
                                        >
                                            {decodeURIComponent(value)}
                                        </Link>
                                    </>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs