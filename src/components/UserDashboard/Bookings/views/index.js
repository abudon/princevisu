import {Table} from 'flowbite-react'
import TableHead from "./tableHead";
import TableBody from "./tableBody";


const BookingTable = (props) => {
    const { column, row } = props;

    return (
        <div className="overflow-x-auto">
            <Table hoverable>
                <TableHead column={column}></TableHead>
                {row.length > 0 && <TableBody row={row}></TableBody>}
            </Table>
        </div>
    );
};
export default BookingTable
