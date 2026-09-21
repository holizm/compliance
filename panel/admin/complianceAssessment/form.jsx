import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='complianceRequirement'
        property='complianceRequirement'
        required
    />
    <Text
        placeholder='coreSubject'
        property='subject'
        required
    />
    <DateTime
        placeholder='coreAssessmentDate'
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
        placeholder='stateMachinesState'
        property='complianceStatus'
        required
    />
    <LongText
        placeholder='coreFindings'
        property='findings'
    />
</>

export default <DialogForm inputs={inputs} />
