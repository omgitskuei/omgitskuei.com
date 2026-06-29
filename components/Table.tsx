'use client'

export const NewComponent = ({
    exampleFunction,
    string = "false",
    bool = false,
    children
}: {
    exampleFunction: Function,
    string?: string,
    bool?: boolean,
    children: JSX.Element[] | JSX.Element
}) => {
    return (

        <table>
            <caption>Quarterly Financial Sales Report (2026)</caption>

            <thead>
                <tr>
                    <th scope="col">Product Category</th>
                    <th scope="col">Q1 Sales</th>
                    <th scope="col">Q2 Sales</th>
                    <th scope="col">Status Notes</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">Electronics</th>
                    <td>$14,250.00</td>
                    <td>$16,400.00</td>
                    <td>Exceeded targets</td>
                </tr>
                <tr>
                    <th>Office Supplies</th>
                    <td>$4,800.00</td>
                    <td>$5,120.00</td>
                    <td>Stable Growth</td>
                </tr>
                <tr>
                    <th>Furniture</th>
                    <td>$8,900.00</td>
                    <td>$7,300.00</td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <td>Total Revenue</td>
                    <td>$27,950.00</td>
                    <td>$28,820.00</td>
                    <td>N/A</td>
                </tr>
            </tfoot>
        </table>
    )
}
