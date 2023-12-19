import TableRow from "./TableRow";


function TableBody(props) {
    console.log("TableBody props;", props);



    /**
     * tbodyId - String
     * hidden - String
     * Object[{ cells:Object[] }]
     */
    const { tbodyId, hidden, rows, } = props;

    return (
        <tbody id={tbodyId} hidden={hidden}>
            {rows.map((row) => (
                <TableRow key={row.rowId}
                    rowId={row.rowId}
                    hidden={row.hidden}
                    cells={row.cells} />
            ))}
        </tbody>
    );
}

export default TableBody;