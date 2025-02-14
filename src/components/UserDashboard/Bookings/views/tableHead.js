import {Table, TableHeadCell} from "flowbite-react"


const TableHead = (props) => {
   const {column} = props


    return(
        <>
        <Table.Head>
            {
                column.map((title, index)=>(
                    <TableHeadCell key={index}>{title}</TableHeadCell>
                ))
            }

        </Table.Head>
        </>
    )


}
export default TableHead
