import React from 'react';

interface DropdownProps {
  handleSortChange: (sortBy: string) => void;
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
}

/**
 * Dropdown component renders a dropdown menu to select the sort criteria.
 * @param {function} handleSortChange - Function to set the sort criteria.
 * @param {boolean} dropdownOpen - Boolean indicating if the dropdown is open.
 * @param {function} setDropdownOpen - Function to toggle the dropdown open/close state.
 */
const Dropdown: React.FC<DropdownProps> = ({
  handleSortChange,
  dropdownOpen,
  setDropdownOpen,
}) => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="inline-flex justify-center w-full gap-x-1.5 px-6 py-1 text-md font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
        >
          Sort By
          <svg
            className="-mr-1 h-6 w-6 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {dropdownOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <p
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              role="menuitem"
              onClick={() => {
                handleSortChange('createdAt');
                setDropdownOpen(false);
              }}
            >
              Created At
            </p>
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
              onClick={() => {
                handleSortChange('filenameAsc');
                setDropdownOpen(false);
              }}
            >
              Filename Asc
            </p>
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
              onClick={() => {
                handleSortChange('filenameDesc');
                setDropdownOpen(false);
              }}
            >
              Filename Desc
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
