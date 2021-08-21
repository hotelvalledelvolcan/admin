import { FC } from "react";
import {
  List,
  ListProps,
  Datagrid,
  TextField
} from "react-admin";

const BlogList: FC<ListProps> = (props) => {
  return (
    <List
      {...props}
      pagination={false}
    >
      <Datagrid>
        <TextField source="title" />
        <TextField source="description" />
        <TextField source="image" />
        <TextField source="slug" />
        <TextField source="tags" />

      </Datagrid>
    </List>
  );
};

export default BlogList;
