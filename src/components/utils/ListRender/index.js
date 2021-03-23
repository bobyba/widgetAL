import React from "react";
import { List, Avatar, Button, Skeleton, Empty } from "antd";
import s from "./index.module.css";
import Checkbox from "antd/lib/checkbox/Checkbox";

const ListRender = (props) => {
  debugger;
  return (
    <List
      className="das"
      locale={{
        emptyText: (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Нет данных"
          />
        ),
      }}
      size="small"
      itemLayout="horizontal"
      dataSource={props.data}
      bordered
      renderItem={(item) => (
        <List.Item
          className={s.listItem}
          actions={[
            <div style={{ marginRight: "-2.5vw" }}>
              {props.checkbox ? <Checkbox /> : <a>ещё</a>}
            </div>,
          ]}
          onClick={() => {
            props.selectItem && props.selectItem(item);
            if (item.timeTableData) {
              props.setSelectedOrNew && props.setSelectedOrNew("selectChild");
            } else {
              props.setSelectedOrNew && props.setSelectedOrNew("selectParent");
            }
          }}
        >
          <List.Item.Meta
            avatar={props.avatar ? <Avatar src={props.avatar} /> : ""}
            title={item.label}
            description={item.description}
          />
          {props.price && <div>{item.price} P</div>}
        </List.Item>
      )}
    />
  );
};

export default ListRender;
