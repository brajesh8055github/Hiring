
const Scroll=()=> {
  return (
    <div className="w-full bg-black py-2 overflow-hidden">
      <div className="whitespace-nowrap flex gap-8 animate-scroll text-white text-sm font-medium">
        {Array(2).fill([
          "Subscribe to our newsletter",
          "How it works",
          "Documentation",
          "Join the community",
        ]).flat().map((item, index) => (
          <span key={index} className="mx-4">{item} •</span>
        ))}
      </div>
    </div>
  );
}
export default Scroll
