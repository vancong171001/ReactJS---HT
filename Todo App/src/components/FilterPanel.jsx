import React from 'react';
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

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <input name="search-text" placeholder="Search" />
      <div className="filter-container">
        {FILTER_ITEMS.map(filtetItem => {
          return (
            <div className="filter-item">
              <div className="filter-name">
                <img src={filtetItem.iconPath} />
                <p>{filtetItem.label}</p>
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
