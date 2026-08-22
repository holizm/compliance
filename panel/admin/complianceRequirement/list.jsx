import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>complianceRequirement</th>
    <th>complianceCode</th>
    <th>complianceAuthority</th>
    <th>complianceScope</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.authority}</td>
    <td>{item.scope}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
