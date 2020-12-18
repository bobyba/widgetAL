import React from "react";
import { List, Avatar, Button, Skeleton } from "antd";
import s from "./index.module.css";

const ListRender = (props) => {
  debugger;
  return (
    <List
      className="das"
      size="small"
      itemLayout="horizontal"
      dataSource={props.data}
      bordered
      renderItem={(item) => (
        <List.Item
          className={s.listItem}
          actions={[
            <a
              type="link"
              key="list-loadmore-more"
              onClick={() => {
                debugger;
                props.selectItem(item);
              }}
            >
              ещё
            </a>,
          ]}
        >
          <List.Item.Meta
            avatar={
              props.avatar ? (
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              ) : (
                ""
              )
            }
            title={item.name}
            description={item.descrip}
          />
          {props.price && <div>{item.price} руб</div>}
        </List.Item>
      )}
    />
  );
};

export default ListRender;
