import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>complianceRequirement</th>
    <th>coreSubject</th>
    <th>coreAssessmentDate</th>
    <th>stateMachinesState</th>
</>

const row = item => <>
    <td>{item.complianceRequirement?.title}</td>
    <td>{item.subject?.title}</td>
    <DateTime value={item.assessmentDate} />
    <td>{item.complianceStatus}</td>
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
