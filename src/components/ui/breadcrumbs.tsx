import { cn } from "@/utils/cn";
import { Link, useLocation } from "react-router-dom";
// import { Button } from "./button";
// import { ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";

const Breadcrumbs = ({ className }: { className?: string }) => {
  const location = useLocation();
  // const navigate = useNavigate();

  const pathnames = location.pathname
    .split("/")
    .filter(Boolean);


  return (
    <nav className={cn("", className)} >
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2">
          {/* <Button variant="ghost" size="icon-sm" className="rounded-full p-1" onClick={() => navigate(-1)}> <ArrowLeft /> </Button> */}
          <h1 className="text-foreground/70 font-semibold text-lg capitalize">
            {decodeURIComponent(location.pathname)
              .split("/").at(-1)?.replace('-', " ")}
          </h1>

        </div>
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
              <li key={to} className="flex items-center text-foreground/80">
                {/* Separator */}

                {isLast ? (
                  <div className="">
                    <span className="mx-2 t">/</span>
                    <span className="  capitalize">
                      {decodeURIComponent(value).split("/").at(-1)?.replace('-', " ")}
                    </span>
                  </div>
                ) : (
                  <>
                    <span className="mx-2">/</span>
                    <Link
                      to={to}
                      className="text-foreground/80 hover:text-blue-800 capitalize transition-colors font-medium"
                    >
                      {decodeURIComponent(value).split("/").at(-1)?.replace('-', " ")}
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
