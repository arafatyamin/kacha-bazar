import Link from "next/link";

const CategoryCard = ({ data }) => {
  const { title, subTitleOne, subTitleTwo, subTitleThree } = data;
  return (
    <div className="p-3 border rounded">
      <Link
        href="#"
        className="font-medium hover:text-green-500 transition-all"
      >
        {title}
      </Link>
      <ul>
        <li>
          <Link
            href="#"
            className="text-xs text-gray-500 hover:text-green-500 transition-all"
          >
            {subTitleOne}
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-xs text-gray-500 hover:text-green-500 transition-all"
          >
            {subTitleTwo}
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-xs text-gray-500 hover:text-green-500 transition-all"
          >
            {subTitleThree}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoryCard;
