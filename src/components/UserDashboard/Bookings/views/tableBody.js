import {Table} from "flowbite-react"



const TableBody = (props) => {
    const {row} = props


    return(
        <>
            <Table.Body className="divide-y">
                {
                    row.map((items, index)=>(
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        key={index}>
                            <Table.Cell className="whitespace-nowrap  text-gray-900 dark:text-white font-extrabold">
                                {items.booking_status.toUpperCase()}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {items.customer_name}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {items.phone_number}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {items.email}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {items.home_address}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {(new Date(items.booking_datetime)).toISOString().split('T')[0]+' '+items.start_time}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {items.session_type}
                            </Table.Cell>

                        </Table.Row>
                    ))
                }

            </Table.Body>
        </>
    )


}
export default TableBody
