const TeamCard = ({ data }) => {
  const { img, name, role } = data;
  return (
    <>
      <div className="max-w-sm p-2 border rounded">
        <span>
          <img src={img} alt={name} className="rounded" />
        </span>
        <div className="py-4">
          <h5 className="text-lg font-semibold">{name}</h5>
          <span className="opacity-75 text-sm">{role}</span>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
