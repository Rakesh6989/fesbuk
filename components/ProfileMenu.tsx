import Image from "next/image";
interface ProfileMenuProps {
  image: string;
  name?: string;
}

function ProfileMenu({ image, name }: ProfileMenuProps) {
  return (
    <div className="flex justify-start items-center gap-5 py-5">
      <Image
        src={image}
        height={60}
        width={60}
        alt="user"
         priority
        className="rounded-full object-cover"
      />

      <button>{name}</button>
    </div>
  );
}

export default ProfileMenu;
