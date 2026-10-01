import { DateTime } from 'list'

export default item => <>
    <td>{item.number}</td>
    <td>{item.complianceRequirement?.title}</td>
    <DateTime value={item.detectedDate} />
    <td>{item.complianceSeverity}</td>
</>
