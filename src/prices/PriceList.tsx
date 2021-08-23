import { FC } from "react";
import { ListProps, List } from "react-admin";
import PriceGrid from "./PriceGrid";

const PriceList: FC<ListProps> = props => (
    <List
        {...props}
        sort={{ field: 'name', order: 'ASC' }}
        perPage={20}
        pagination={false}
        component="div"
        actions={false}
    >
        <PriceGrid />
    </List>
);

export default PriceList;