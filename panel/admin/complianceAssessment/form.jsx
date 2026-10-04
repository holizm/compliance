import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        complianceRequirement
        placeholder='requirement'
        required
    />
    <Text
        required
        subject
    />
    <DateTime
        assessmentDate
        required
    />
    <Select
        complianceStatus
        options={[
            'pending',
            'compliant',
            'nonCompliant',
            'expired',
            'waived',
        ]}
        placeholder='state'
        required
    />
    <LongText findings />
</>

export default <DialogForm inputs={inputs} />
