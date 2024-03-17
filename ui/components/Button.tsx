export function Button({ className, children, isMuted = false, ...rest }: any) {
  return (
    <button
      className={`p-2 transition-all bg-[#ffffff05] backdrop-filter backdrop-blur-xl hover:bg-[#ffffff10] rounded-lg shadow-lg ${isMuted ? "text-zinc-500" : ""} hover:text-white ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
