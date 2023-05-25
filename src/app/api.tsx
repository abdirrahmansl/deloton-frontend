'use client';
import { HTTP_METHODS } from 'next/dist/server/web/http';
import { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
// const axios = require('axios').default;

// export async function http(
//     request: RequestInfo
// ): Promise<any> {
//     const response = await fetch("http://127.0.0.1:5000/daily/?date=20-05-2023")
//     const body = await response.json()
//     return body
// }


// async function getData() {
//   const res = await fetch('http://127.0.0.1:5000/daily/?date=20-05-2023', {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//     },
//   }
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
 
//   return res.json();
// }

export default function Some(){
    
    const [res, setRes ] = useState<any>()


    const axios = require('axios').default;

    var config = {
        method: 'get',
        url: 'http://c7-deloton-api-lb-798045880.eu-west-2.elb.amazonaws.com/leaderboard/',
        headers: { },
       
    };
    axios(config).then( function (response: any) {
        console.log(response.data.Leaderboard)
        setRes(response.data.Leaderboard)
        console.log(JSON.stringify(response))
    }).catch( function (error: any) {
        console.log(error)
    })

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
            {res?.slice(0, 10).map((data: any) => (
              <Tr key={data.id}>
                <Td>{data.Position}</Td>
                <Td>{data.Name}</Td>

                <Td>{data["Ride count"]}</Td>
              </Tr>
            ))}
          </Tbody>

            </Table>
        </TableContainer>
        </div>
            </>
    )
    }

    // 105 187 119