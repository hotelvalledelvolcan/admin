import { FC } from "react";
import { ListProps, List } from "react-admin";
import SeasonGrid from "./SeasonGrid";

const SeasonList: FC<ListProps> = props => (
    <List
        {...props}
        sort={{ field: 'name', order: 'ASC' }}
        perPage={20}
        pagination={false}
        component="div"
        actions={false}
    >
        <SeasonGrid />
    </List>
);

export default SeasonList;