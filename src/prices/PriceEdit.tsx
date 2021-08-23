import { Typography } from "@material-ui/core";
import { FC } from "react";
import {
  Edit,
  EditProps,
  NumberInput,
  required,
  SimpleForm,
  useRecordContext,
  useTranslate,
} from "react-admin";
import { Price } from "../types";

const PriceTitle = (props: any) => {
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

const PriceEdit: FC<EditProps> = (props) => {
  return (
    <Edit {...props} title={<PriceTitle />}>
      <SimpleForm>
        <NumberInput fullWidth source="amount" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default PriceEdit;
