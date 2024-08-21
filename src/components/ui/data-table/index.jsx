import { Thead, Tbody, Table, Td, Tr, Th } from "@components/table";
import { tableNavigation } from "@mocks/data-table"
import "./style.scss"
const index = ({ data,deleteItem }) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    {tableNavigation.length && tableNavigation.map((item) => <Th key={item.id}>{item.title}</Th>)}
                </Tr>
            </Thead>

            <Tbody>

                {
                    data.map((item,index) => (
                        <Tr key={item.id}>
                            <Td>{index+1}</Td>
                            <Td>{item.customer}</Td>
                            <Td>{item.email}</Td>
                            <Td>{item.phone}</Td>
                            <Td><button className="btn btn-primary">Edit</button></Td>
                            <Td><button onClick={()=>deleteItem(item.id)} className="btn btn-primary">Delete</button></Td>

                        </Tr>
                    ))
                }


            </Tbody>
        </Table>
    );
};

export default index;