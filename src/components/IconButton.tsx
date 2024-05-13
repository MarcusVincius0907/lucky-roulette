import Image from "next/image";

export default function IconButton(props) {
  return (
    <>
      <div
        onClick={props.click}
        className="flex justify-center items-center bg-white rounded-md hover:opacity-80 cursor-pointer p-2 border-black border-2"
      >
        <Image
          src="/settings.png"
          alt="Configuracao"
          width="29"
          height="29"
        ></Image>
      </div>
    </>
  );
}
