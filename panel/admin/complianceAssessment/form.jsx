import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='requirement'
        property='complianceRequirement'
        required
    />
    <Text
        placeholder='subject'
        property='subject'
        required
    />
    <DateTime
        placeholder='assessmentDate'
        property='assessmentDate'
        required
    />
    <Select
        options={[
            'pending',
            'compliant',
            'nonCompliant',
            'expired',
            'waived',
        ]}
        placeholder='state'
        property='complianceStatus'
        required
    />
    <LongText
        placeholder='findings'
        property='findings'
    />
</>

export default <DialogForm inputs={inputs} />
