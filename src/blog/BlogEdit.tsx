import { Box, Typography } from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";
import { FC } from "react";
import {
  List,
  ListProps,
  Datagrid,
  TextField,
  ImageField,
  ChipField,
  Edit,
  SimpleForm,
  TextInput,
  useTranslate,
  ImageInput,
  ArrayInput,
  SimpleFormIterator,
  required,
  EditProps,
} from "react-admin";

const BlogEdit: FC<EditProps> = (props) => {
  const translate = useTranslate();
  return (
    <Edit {...props}>
      <SimpleForm>
        <Typography variant="h6" gutterBottom>
          {translate("resources.blog.name", 2)}
        </Typography>
        <TextInput autoFocus fullWidth source="title" validate={required()}/>
        <TextInput multiline fullWidth source="description" resettable validate={required()}/>

        <Box pt="5em" />
        <Typography variant="h6" gutterBottom>
            Contenido
        </Typography>

        <RichTextInput source="body" validate={required()}/>

        <Box pt="5em" />
        <Typography variant="h6" gutterBottom>
            Detalles
        </Typography>
        <ImageInput source="image" label="Related pictures" accept="image/*" validate={required()}>
          <ImageField source="image" title="title" />
        </ImageInput>
        <ArrayInput source="tags">
          <SimpleFormIterator>
            <TextInput source="name" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};


export default BlogEdit;
