import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>complianceNumber</th>
    <th>complianceRequirement</th>
    <th>complianceDetectedDate</th>
    <th>complianceSeverity</th>
</>

const row = item => <>
    <td>{item.number}</td>
    <td>{item.complianceRequirement?.title}</td>
    <DateTime value={item.detectedDate} />
    <td>{item.complianceSeverity}</td>
</>

export default <List
    create={Form}
    filters={<Text property='number' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
