import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ data }) => {
  const { name, icon, subCategories, slug } = data;
  return (
    <div className="p-3 border rounded bg-white hover:shadow-md duration-200">
      <div className="flex gap-3">
        <div>
          <Image src={icon} alt={name} width="30" height="30" />
        </div>
        <div>
          <Link
            href={"/c/" + slug}
            className="font-medium hover:text-green-500 transition-all"
          >
            {name}
          </Link>
          <ul>
            {subCategories?.slice(0, 2)?.map((subCategory) => (
              <li>
                <Link
                  href={"/c/" + slug + "/" + subCategory?.slug}
                  className="text-xs text-gray-500 hover:text-green-500 transition-all"
                >
                  - {subCategory?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
