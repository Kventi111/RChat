import React from "react";

import { Card, EmptyState } from "components";
import { List } from "./style";

const url =
  "https://images.unsplash.com/photo-1563494270-4e133aea0ede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80";


class DialogList extends React.Component {
  render() {
    const { list,fetchMessagesById } = this.props;
    return (
      <List>
        {list.length ? (
          list.map(item => (
            <Card
              key={item._id}
              imgSrc={url}
              userName={item.partner.fullname}
              lastUpdate={"14:00"}
              lastMessage={item.lastMessage.text}
              onClick={() => fetchMessagesById(item._id)}
            />
          ))
        ) : (
          <EmptyState
            text={"Создайте диалог"}
            subtitle={"не злите фрэнка :)"}
          />
        )}
      </List>
    );
  }
}

export default DialogList;
