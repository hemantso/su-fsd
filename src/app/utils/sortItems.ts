interface Item {
  createdAt: string;
  filename: string;
}

type SortBy = 'createdAt' | 'filenameAsc' | 'filenameDesc';

/**
 * Function to sort items based on the given sort criteria.
 * @param {Item[]} items - Array of items to be sorted.
 * @param {SortBy} sortBy - Sorting criteria.
 * @returns {Item[]} - Sorted array of items.
 */
export const sortItems = (items: Item[], sortBy: SortBy): Item[] => {
  switch (sortBy) {
    case 'createdAt':
      return items.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    case 'filenameAsc':
      return items.sort((a, b) =>
        a.filename.replace(/\d+/g, n => n.padStart(20, '0')).localeCompare(b.filename.replace(/\d+/g, n => n.padStart(20, '0')))
      );
    case 'filenameDesc':
      return items.sort((a, b) =>
        b.filename.replace(/\d+/g, n => n.padStart(20, '0')).localeCompare(a.filename.replace(/\d+/g, n => n.padStart(20, '0')))
      );
    default:
      return items;
  }
};
