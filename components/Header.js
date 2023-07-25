import Link from "next/link";
import { HeaderLinks } from "../data";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const [url, setUrl] = useState("");

  useLayoutEffect(() => {
    const { pathname } = router;

    if (pathname.includes("staff")) {
      return setUrl("/staff");
    }

    setUrl(pathname);
  }, [router]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-primary-stroke">
      <div className="py-2 tracking-widest text-[11px] sm:text-xs text-center text-white capitalize bg-[#222]">
        Abubakar tafawa balewa university, Bauchi
      </div>
      <div className="flex flex-wrap px-1 sm:px-0 bg-white justify-center items-center gap-y-2 gap-x-5 sm:gap-x-[50px] text-sm font-bold uppercase min-h-[46px]">
        {HeaderLinks.map((data) => {
          const { id, title, link } = data;

          return (
            <Link
              href={link}
              key={id}
              className={`py-1 sm:py-3 border-b-2 transition-all duration-300 ${
                url === link
                  ? "border-semantic text-semantic"
                  : "border-white text-[#222]"
              }`}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
