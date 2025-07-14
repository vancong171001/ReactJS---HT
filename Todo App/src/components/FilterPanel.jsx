import './FilterPanel.css';

const FILTER_ITEMS = [
  {
    id: 'all',
    label: 'All',
    iconPath: 'public/inbox.png',
  },
  {
    id: 'important',
    label: 'Important',
    iconPath: 'public/flag.png',
  },
  {
    id: 'completed',
    label: 'Completed',
    iconPath: 'public/check.png',
  },
  {
    id: 'delete',
    label: 'Deleted',
    iconPath: 'public/delete.png',
  },
];

const FilterPanel = ({ selectedItemId, setSelectedItemId }) => {
  return (
    <div className="filter-panel">
      <input name="search-text" placeholder="Search" />
      <div className="filter-container">
        {FILTER_ITEMS.map(filtertItem => {
          return (
            <div
              className={`filter-item ${
                filtertItem.id === selectedItemId ? 'selected' : ''
              }`}
              onClick={() => {
                setSelectedItemId(filtertItem.id);
              }}
            >
              <div className="filter-name">
                <img src={filtertItem.iconPath} />
                <p>{filtertItem.label}</p>
              </div>
              <p>22</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterPanel;
