const Card = ({ title, tutor, level, className }) => {
  return (
    <div
      className={`border-color border w-[300px] bg-color p-4 rounded-lg ${className}`}
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="paragraph text[13px]">Tutor: {tutor}</p>
      <span className="block text-yellow mt-3">{level}</span>
    </div>
  );
};

export default Card;
