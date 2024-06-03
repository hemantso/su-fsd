import ItemList from './components/ItemList';

/**
 * Home page component.
 * @returns {React.ReactElement} The home page component.
 */
export default function Home(): React.ReactElement {
  return (
    <div className="container mx-auto mt-4 flex flex-col items-center">
      <ItemList />
    </div>
  );
}