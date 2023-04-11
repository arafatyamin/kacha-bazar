import { CiSearch } from 'react-icons/ci';

const SearchBar = () => {
  return (
    <div className="bg-white flex-1 flex h-10 items-center rounded-md px-4 gap-2 mx-4">
      <input
        className="outline-none w-full text-sm "
        placeholder="Search for products (e.g. fish, apple, oil)"
      />
      <CiSearch className="text-gray-primary cursor-pointer hover:scale-110 duration-200" />
    </div>
  );
}

export default SearchBar