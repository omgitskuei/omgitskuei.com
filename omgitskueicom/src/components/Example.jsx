
// const teams = [
//     {
//       name: 'Calvin Hawkins',
//       email: 'calvin.hawkins@example.com',
//       image:
//         'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       name: 'Kristen Ramos',
//       email: 'kristen.ramos@example.com',
//       image:
//         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       name: 'Ted Fox',
//       email: 'ted.fox@example.com',
//       image:
//         'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   ];


//   function Cell({ props }) {
//     return (
//       <td className="py-4 flex">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
// </svg>

//         { props.text}
//       </td>
//     )
//   }
  
//   export default function Row({ teams }) {
//     return (
//       <ul className="divide-y divide-gray-200">
//         {teams.map((team) => <Cell key={team.id} props={team.props} />)}
//       </ul>
//     )
//   }
   
