const Card = ({ title, tutor, level, className }) => {
  return (
    <div
      className={`border-color border bg-color p-4 rounded-lg ${className} flex items-center gap-3`}
    >
      <img
        className="w-[100px] h-[100px] rounded-lg object-cover shadow-lg"
        src="https://ik.imagekit.io/fhkx5v1dg/web-development.jpg?updatedAt=1762186278265"
      />
      <div className="scale-[.9]">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text[13px]">Tutor: {tutor}</p>
        <span className="block text-yellow">{level}</span>
      </div>
    </div>
  );
};

export default Card;
