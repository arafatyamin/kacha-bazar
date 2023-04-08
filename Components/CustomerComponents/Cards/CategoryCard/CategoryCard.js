import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ data }) => {
  const { title, subTitleOne, subTitleTwo, subTitleThree, imgUrl } = data;
  return (
    <div className="p-3 border rounded bg-white hover:shadow-md duration-200">
      <div className="flex gap-3">
        <div>
          <Image src={imgUrl} alt={title} width="30" height="30" />
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default CategoryCard;
