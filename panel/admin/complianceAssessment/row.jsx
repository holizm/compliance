import { DateTime } from 'list'

export default item => <>
    <td>{item.complianceRequirement?.title}</td>
    <td>{item.subject?.title}</td>
    <DateTime value={item.assessmentDate} />
    <td>{item.complianceStatus}</td>
</>
