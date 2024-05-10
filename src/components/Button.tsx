export default function Button(props) {
  return (
    <>
      <div className="flex justify-center items-center bg-black rounded-md hover:opacity-80 cursor-pointer px-10 py-2">
        <span className=" text-2xl text-white text-center">{props.text}</span>
      </div>
    </>
  );
}
