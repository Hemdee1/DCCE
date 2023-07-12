import Image from "next/image";
import HeaderLayout from "../../components/HeaderLayout";

const StaffProfile = () => {
  return (
    <HeaderLayout>
      <div className="flex flex-col justify-center max-w-full gap-10 pt-20 mx-auto lg:gap-5 lg:flex-row w-inner-width padding">
        <div className="relative w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] mx-auto">
          <Image
            src="/images/profile.png"
            alt="staff image"
            priority
            fill
            className="object-cover rounded-md shadow-sm shadow-gray-500"
          />
        </div>
        <div className="w-full text-sm lg:w-1/2 sm:text-base">
          <h3 className="mb-5 text-xl font-semibold text-center uppercase">
            Muhammad Umar Ahmad
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
            etiam non quam lacus.
            <br /> <br />
            Tempor commodo ullamcorper a lacus vestibulum sed arcu non.
            Elementum nibh tellus molestie nunc non blandit massa enim. Vitae
            elementum curabitur vitae nunc sed velit dignissim sodales.
          </p>

          <button className="mt-5 text-base font-semibold text-semantic">
            Drive/Dropbox link
          </button>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default StaffProfile;
