import Link from "next/link";
import { HeaderLinks } from "../data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const [url, setUrl] = useState("");

  useEffect(() => {
    const { pathname } = router;

    if (pathname.includes("staff")) {
      return setUrl("/staff");
    }

    setUrl(pathname);
  }, [router]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-primary-stroke">
      <div className="py-2 tracking-widest text-xs text-center text-white capitalize bg-[#222]">
        Abubakar tafawa balewa university, Bauchi
      </div>
      <div className="flex bg-white justify-center items-center gap-[50px] text-sm font-semibold uppercase">
        {HeaderLinks.map((data) => {
          const { id, title, link } = data;

          return (
            <Link
              href={link}
              key={id}
              className={`py-3 border-semantic ${
                url === link
                  ? "border-b-2 text-semantic"
                  : "border-none text-[#222]"
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
