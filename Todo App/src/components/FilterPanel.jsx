import './FilterPanel.css';

import PropTypes from 'prop-types';

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

const FilterPanel = ({ selectedFilterId, setSelectedFilterId, todoList }) => {
  const countByFilterType = todoList.reduce(
    (acc, cur) => {
      let newAcc = { ...acc };
      if (cur.isCompleted) {
        newAcc = { ...newAcc, completed: newAcc.completed + 1 };
      }
      if (cur.isImportant) {
        newAcc = { ...newAcc, important: newAcc.important + 1 };
      }
      if (cur.isDeleted) {
        newAcc = { ...newAcc, deleted: newAcc.deleted + 1 };
      }

      return newAcc;
    },
    { all: todoList.length, important: 0, completed: 0, deleted: 0 }
  );

  console.log({ countByFilterType });

  return (
    <div className="filter-panel">
      <input name="search-text" placeholder="Search" />
      <div className="filter-container">
        {FILTER_ITEMS.map(filtertItem => {
          return (
            <div
              key={filtertItem.id}
              className={`filter-item ${
                filtertItem.id === selectedFilterId ? 'selected' : ''
              }`}
              onClick={() => {
                setSelectedFilterId(filtertItem.id);
              }}
            >
              <div className="filter-name">
                <img src={filtertItem.iconPath} />
                <p>{filtertItem.label}</p>
              </div>
              <p>{countByFilterType[filtertItem.id]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

FilterPanel.propTypes = {
  selectedFilterId: PropTypes.string,
  setSelectedFilterId: PropTypes.func,
  todoList: PropTypes.array,
};

export default FilterPanel;
