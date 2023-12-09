import React, { Component } from "react";

export type ItemInfo = {
  id: number;
  title: string;
};

type ItemListProps = { items: ItemInfo[] };
type ItemListState = {};

class ItemList extends Component<ItemListProps, ItemListState> {
  render() {
    const { items } = this.props;
    return (
      <>
        {items.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </>
    );
  }
}

export default ItemList;
