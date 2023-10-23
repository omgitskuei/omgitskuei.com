

function TableRow(props) {
    console.log("TableRow props;", props);

    const { rowId, hidden, cells } = props;

    return (
        <tr id={rowId} hidden={hidden}>
            {cells.map((cell) => (
                <td key={cell.cellId}
                    headers={cell.colname}
                    class={cell.classes}
                    colspan={cell.colspan}
                    rowspan={cell.rowspan}
                    hidden={cell.hidden}
                    contenteditable={cell.editable}
                    id={cell.cellId}
                    title={cell.hovertext}>
                    {cell.text}
                </td>
            ))}
        </tr>
    );
}

export default TableRow;