'use client';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import riders from "./data.json"


export default function Some({localData}: any){

    return (
        <>
        <div>
        <TableContainer>
            <Table variant='simple'>
                    <Thead>
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
                      <Tbody>
            {riders["Leaderboard"]?.slice(0, 10).map((r: Record<string, any>) => (
              <Tr key={r.id}>
                <Td>{r.Position}</Td>
                <Td>{r.Name}</Td>
                <Td>{r["Ride count"]}</Td>
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