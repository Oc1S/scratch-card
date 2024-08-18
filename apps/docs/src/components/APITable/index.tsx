import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { propsList } from '@site/src/constants';

// const keys = ['attritube', 'type', 'description', 'default'];

const renderTag = (content: React.ReactNode) => {
  return <code className="rounded-md bg-black/20 px-2 py-1">{content}</code>;
};
const APITable: React.FC = () => {
  const keys = Object.keys(propsList[0]);

  const renderCell = (key: string, value: string) => {
    switch (key) {
      case 'type':
        return renderType(value);
      case 'default':
        return renderDefault(value);
      default:
        return value;
    }
  };

  const renderType = renderTag;

  const renderDefault = (value: string | null) => {
    if (value === null) {
      return '-';
    }
    return renderTag(value.toString());
  };
  return (
    <Table aria-label="API Table">
      <TableHeader className="test11">
        {keys.map(key => {
          return (
            <TableColumn key={key} className="capitalize">
              {key}
            </TableColumn>
          );
        })}
      </TableHeader>
      <TableBody className="w-full">
        {propsList.map(prop => {
          return (
            <TableRow key={prop.attritube}>
              {keys.map(key => {
                return <TableCell key={key}>{renderCell(key, prop[key])}</TableCell>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default APITable;
