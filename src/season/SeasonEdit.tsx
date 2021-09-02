import { Typography } from "@material-ui/core";
import { FC } from "react";
import {
    DateInput,
  Edit,
  EditProps,
  NumberInput,
  required,
  SimpleForm,
  useRecordContext,
  useTranslate,
} from "react-admin";
import { Season } from "../types";

const SeasonTitle = (props: any) => {
  const translate = useTranslate();
  let typeDescription = "";
  switch (props.record.type) {
    case 1:
      typeDescription = translate("resources.prices.types.full");
      break;
    case 2:
      typeDescription = translate("resources.prices.types.half");
      break;
    case 3:
      typeDescription = translate("resources.prices.types.without");
      break;

    default:
      typeDescription = props.record.id;
      break;
  }
  return <span>{typeDescription}</span>;
};

const SeasonEdit: FC<EditProps> = (props) => {
  return (
    <Edit {...props} title={<SeasonTitle />}>
      <SimpleForm>
        <DateInput fullWidth source="start" validate={required()} />
        <DateInput fullWidth source="end" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default SeasonEdit;
