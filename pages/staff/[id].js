import Image from "next/image";
import HeaderLayout from "../../components/HeaderLayout";

const StaffProfile = () => {
  return (
    <HeaderLayout>
      <div className="flex justify-center max-w-full gap-5 pt-20 mx-auto w-inner-width padding">
        <div className="relative w-[300px] h-[300px]">
          <Image
            src="/images/profile.png"
            alt="staff image"
            priority
            fill
            className="object-cover"
          />
        </div>
        <div className="w-1/2">
          <h3 className="mb-5 font-semibold capitalize">Muhammad Umar Ahmad</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
            etiam non quam lacus.
            <br /> <br />
            Tempor commodo ullamcorper a lacus vestibulum sed arcu non.
            Elementum nibh tellus molestie nunc non blandit massa enim. Vitae
            elementum curabitur vitae nunc sed velit dignissim sodales.
          </p>

          <button className="mt-5 font-semibold text-semantic">
            Drive/Dropbox link
          </button>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default StaffProfile;
