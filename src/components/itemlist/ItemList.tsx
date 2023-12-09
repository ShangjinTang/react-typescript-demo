import React from "react";

export type ItemInfo = {
  id: number;
  title: string;
};

type ItemListProps = {
  items: ItemInfo[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
};

export default ItemList;
