import React, { ReactNode } from 'react'

export interface ITable<col, row>
    extends React.DetailedHTMLProps<
        React.TableHTMLAttributes<HTMLTableElement>,
        HTMLTableElement
    > {
    columns: col[]
    rows: row[]
    renderRow: (item: keyof row, index?: number) => ReactNode | JSX.Element
    renderColumns: (item: col, index?: number) => ReactNode | JSX.Element
    baseTableStyles?: React.CSSProperties
    baseTableClasses?: string
}

const Table = <col extends {}, row extends {}>(props: ITable<col, row>) => {
    const { columns, renderColumns, renderRow, rows } = props

    const getRows = () =>
        rows.map((rowItem, index) => {
            const keys = Object.keys(rowItem)
            return (
                <tr>
                    {keys.map((key: string, i) => {
                        return (
                            <td key={index}>
                                {renderRow(
                                    //@ts-ignore
                                    rowItem[key],
                                    index
                                )}
                            </td>
                        )
                    })}
                </tr>
            )
        })

    return (
        <table {...props}>
            <tr>
                {columns.map((colItem, index) => (
                    <th key={index}>{renderColumns(colItem, index)}</th>
                ))}
            </tr>

            {getRows()}
        </table>
    )
}

export default Table
