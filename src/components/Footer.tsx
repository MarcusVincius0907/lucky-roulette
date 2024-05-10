import Image from "next/image";

export default function Header() {
  return (
    <>
      <footer className="w-full flex justify-center items-center absolute bottom-0">
        <div className="w-full bg-black rounded-t-full h-[5rem] flex justify-center items-center">
          <div className="imageContainer flex items-center justify-center w-full gap-20">
            <Image
              src="/raizes-logo.png"
              alt="Raizes"
              width="47"
              height="60"
            ></Image>
            <Image
              src="/adv-logo.png"
              alt="Igreja Adventista"
              width="55"
              height="53"
            ></Image>
          </div>
        </div>
      </footer>
    </>
  );
}
