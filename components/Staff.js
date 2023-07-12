import Image from "next/image";
import Link from "next/link";

const Staff = ({ staff }) => {
  const { certification, img, name, title } = staff;

  return (
    <Link href="/staff/1">
      <article className="transition-all duration-500 bg-white border rounded-2xl overflow-clip border-primary-stroke w-[300px] hover:scale-105 hover:shadow-md">
        <div className="w-full h-[200px] md:h-[300px] relative">
          <Image
            src={img}
            alt="staff image"
            fill
            className="object-cover max-w-full"
          />
        </div>
        {/* <Image src={img} alt="staff image" width={380} height={300} /> */}
        <div className="px-5 py-[5px] sm:py-[10px] space-y-[5px] sm:space-y-[10px]">
          <h3 className="text-lg font-bold text-semantic">{name}</h3>
          <h4 className="text-sm">{certification}</h4>
          <h4 className="text-sm">{title}</h4>
        </div>
      </article>
    </Link>
  );
};

export default Staff;
