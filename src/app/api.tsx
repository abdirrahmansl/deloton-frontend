'use client';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import riders from "./data.json"


export default function Some(){
    return (
        <>
        <div>
        <TableContainer>
            <Table variant='simple'>
                    <TableCaption placement='top' textDecoration='underline' mb={10} fontWeight='bold' >Ride Leaderboard</TableCaption>
                    <Thead >
                        <Tr>
                            <Th>
                                Position
                            </Th>
                            <Th>
                                Name
                            </Th>
                            <Th>
                                Ride Count
                            </Th>
                        </Tr>
                    </Thead>
                      <Tbody >
            {riders["Leaderboard"]?.slice(0, 10).map((r: Record<string, any>) => (
              <Tr key={r.id} >
                <Td align='center'>{r.Position}</Td>
                <Td align='center'>{r.Name}</Td>
                <Td align='center'>{r["Ride count"]}</Td>
              </Tr>
            ))}
          </Tbody>
            </Table>
        </TableContainer>
        </div>
        <div>
        </div>
            </>
    )
    }

    // 105 187 119