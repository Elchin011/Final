import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { FC } from "react"
import { BasicTableProps } from "./type"



export const BasicTable: FC<BasicTableProps> = ({ rows, cols, isLoading }) => {
    return (
        <>
            {isLoading ? (
                <div className="flex items-center justify-center h-64">
                    <span className="text-gray-500">Loading...</span>
                </div>
            ) : (
                <Table >

                    <TableHeader>
                        <TableRow>
                            {
                                cols.map((col: any) => (
                                    <TableHead key={col} className="text-left">
                                        {col}
                                    </TableHead>
                                ))
                            }
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            rows && rows.map((row: any, index: number) => (
                                <TableRow key={index}>
                                    {
                                        cols.map((col: any) => (
                                            <TableCell key={col} className="text-left py-5.5">
                                                {row[col]}
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                        }
                    </TableBody>

                </Table>

            )
            }

        </>
    )
}
