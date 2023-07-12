import Link from "next/link";
import { footerLinks } from "../data";

const date = new Date();

const Footer = () => {
  return (
    <footer className="bg-white border-t border-primary-stroke pt-[50px]">
      <div className="w-inner-width mx-auto max-w-full space-y-[50px] padding">
        <div className="flex flex-col flex-wrap justify-between w-full gap-10 sm:flex-row">
          <div>
            <h3 className="font-semibold">Logo</h3>
          </div>

          {footerLinks.map((footer, index) => {
            const { links, title } = footer;
            return (
              <div key={index}>
                <h3 className="font-semibold mb-[10px] capitalize">{title}</h3>

                <div className="space-y-2">
                  {links.map((data, index) => {
                    const { link, title } = data;

                    return (
                      <Link
                        href={link}
                        key={index}
                        className="block text-sm capitalize"
                      >
                        {title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col justify-between gap-2 px-5 py-5 text-center border-t sm:flex-row border-primary-stroke 2xl:px-0">
          <button className="text-sm font-bold text-semantic">
            Get The App Here
          </button>
          <h5 className="text-sm capitalize">
            all rights reserved © {date.getFullYear()}
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
