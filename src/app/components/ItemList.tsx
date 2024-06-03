'use client';

import React, { useState, useEffect } from 'react';
import { sortItems } from '../utils/sortItems';
import Dropdown from './Dropdown';

// Define types for the items
interface Item {
  createdAt: string;
  filename: string;
}

type SortBy = 'createdAt' | 'filenameAsc' | 'filenameDesc';
/**
 * Component for displaying a list of items with sorting options.
 */
const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [sortedItems, setSortedItems] = useState<Item[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>('createdAt');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/items')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format');
        }
        setItems(data);
        setSortedItems(sortItems(data, sortBy));
      })
      .catch((err) => {
        setError('Failed to fetch items. Please try again later.');
      });
  }, []);

  const handleSortChange = (newSortBy: SortBy) => {
    setSortBy(newSortBy);
    setSortedItems(sortItems(items, newSortBy));
  };

  if (error) {
    return (
      <div className="container mx-auto mt-4 flex flex-col items-center">
        <div className="bg-red-100 text-red-800 p-4 rounded-md">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-4 flex flex-col items-center">
      <Dropdown
        handleSortChange={handleSortChange}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      />
      <div className="grid grid-cols-2 gap-4 mt-4">
        {sortedItems.length === 0 ? (
          <>
            <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
            <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-300 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-300 mb-2.5"></div>
            <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-300 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-300 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-300 max-w-[360px]"></div>
          </>
        ) : (
          sortedItems.map((item, index) => (
            <div
              key={index}
              className="border px-8 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
            >
              <p>{item.createdAt}</p>
              <p>{item.filename}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemList;
