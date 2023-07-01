import Link from "next/link";
import { footerLinks } from "../data";

const date = new Date();

const Footer = () => {
  return (
    <footer className="bg-white border-t border-primary-stroke pt-[50px]">
      <div className="w-inner-width mx-auto max-w-full space-y-[50px] padding">
        <div className="w-full flex justify-between gap-5">
          <div>
            <h3 className="text-sm font-semibold">Logo</h3>
          </div>

          {footerLinks.map((footer, index) => {
            const { links, title } = footer;
            return (
              <div key={index}>
                <h3 className="text-sm font-semibold mb-[10px] capitalize">
                  {title}
                </h3>

                <div className="space-y-2">
                  {links.map((data, index) => {
                    const { link, title } = data;

                    return (
                      <Link
                        href={link}
                        key={index}
                        className="text-xs block capitalize"
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

        <div className="flex justify-between py-5 border-t border-primary-stroke px-5 2xl:px-0">
          <button className="text-xs text-semantic">Get The App Here</button>
          <h5 className="capitalize text-xs">
            all rights reserved © {date.getFullYear()}
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
