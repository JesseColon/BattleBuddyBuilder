import React, { useState } from 'react';
import { Table, FormControl } from 'react-bootstrap';

const YourTableComponent = ({ items, page_number, page_size }) => {
  const [sortKey, setSortKey] = useState('');
  const [sortDirection, setSortDirection] = useState(1);
  const [filterValues, setFilterValues] = useState({
    id: '',
    name: '',
    munit: '',
    rate: '',
  });

  const handleColumnSort = (key) => {
    setSortKey(key);
    setSortDirection(sortKey === key ? -sortDirection : 1);
  };

  const handleColumnSortCss = (key) => {
    if (sortKey === key) {
      return sortDirection === 1 ? 'fa-sort-asc' : 'fa-sort-desc';
    }
    return 'fa-sort';
  };

  const onChangeHandler = (key, e) => {
    const newFilterValues = { ...filterValues };
    newFilterValues[key] = e.target.value;
    setFilterValues(newFilterValues);
  };

  const filteredItems = items.filter((item) => {
    return (
      item.id.includes(filterValues.id) &&
      item.name.includes(filterValues.name) &&
      item.munit.includes(filterValues.munit) &&
      item.rate.includes(filterValues.rate)
    );
  });

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => handleColumnSort('id')}>
              <b>Id</b> <i className={`fa fa-fw ${handleColumnSortCss('id')}`}></i>
            </th>
            <th onClick={() => handleColumnSort('name')}>
              <b>Name</b> <i className={`fa fa-fw ${handleColumnSortCss('name')}`}></i>
            </th>
            <th onClick={() => handleColumnSort('munit')}>
              <b>Munit</b> <i className={`fa fa-fw ${handleColumnSortCss('munit')}`}></i>
            </th>
            <th onClick={() => handleColumnSort('rate')}>
              <b>Rate</b> <i className={`fa fa-fw ${handleColumnSortCss('rate')}`}></i>
            </th>
          </tr>
          <tr>
            <th></th>
            <th>
              <FormControl
                type="text"
                value={filterValues.id}
                onChange={(e) => onChangeHandler('id', e)}
              />
            </th>
            <th>
              <FormControl
                type="text"
                value={filterValues.name}
                onChange={(e) => onChangeHandler('name', e)}
              />
            </th>
            <th>
              <FormControl
                type="text"
                value={filterValues.munit}
                onChange={(e) => onChangeHandler('munit', e)}
              />
            </th>
            <th>
              <FormControl
                type="text"
                value={filterValues.rate}
                onChange={(e) => onChangeHandler('rate', e)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index}>
              <th>{(index + 1) + (page_number - 1) * page_size}</th>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.munit}</td>
              <td>{item.rate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default YourTableComponent;
