
import { cn } from "@/utils/cn";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ className }: { className?: string }) => {
  const location = useLocation();

  // Split and keep only first 2 segments
  const pathnames = location.pathname
    .split("/")
    .filter(Boolean)
    .slice(0, 2);

  const formatLabel = (value: string) =>
    decodeURIComponent(value)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <nav className={cn("w-full", className)}>
      <div className="flex w-full justify-between items-center">
        {/* Page Title */}
        <h1 className="text-foreground/70 font-semibold text-lg">
          {pathnames.length > 0
            ? formatLabel(pathnames[pathnames.length - 1])
            : "Home"}
        </h1>

        {/* Breadcrumb */}
        <ol className="flex flex-wrap items-center text-xs sm:text-sm text-foreground/80">
          {pathnames.map((value, index) => {
            const to = "/" + pathnames.slice(0, index + 1).join("/");
            const isLast = index === pathnames.length - 1;

            return (
              <li key={to} className="flex items-center">
                {index !== 0 && <span className="mx-2">/</span>}

                {isLast ? (
                  <span className="font-medium">
                    {formatLabel(value)}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="hover:text-blue-800 transition-colors capitalize"
                  >
                    {formatLabel(value)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;