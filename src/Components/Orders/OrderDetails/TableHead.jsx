import React from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th colSpan='2'>Items</th>
        <th className='text-end' colSpan='2'>
          <a href='#javascript' className='theme-color'>
            Edit Items
          </a>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
