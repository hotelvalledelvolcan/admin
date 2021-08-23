import { FC } from "react";
import {
  List,
  ListProps,
  Datagrid,
  TextField,
  ImageField,
  ChipField,
  EditButton,
  ArrayField,
  SingleFieldList,
} from "react-admin";

const BlogList: FC<ListProps> = (props) => {
  return (
    <List {...props} pagination={false}>
      <Datagrid>
        <TextField source="title" />
        <TextField source="description" />
        <ImageField source="image" title="title" />
        <ArrayField source="tags">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ArrayField>
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default BlogList;
