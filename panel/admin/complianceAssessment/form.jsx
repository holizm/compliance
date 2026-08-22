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
        placeholder='complianceSubject'
        property='subject'
        required
    />
    <DateTime
        placeholder='complianceAssessmentDate'
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
        placeholder='complianceStatus'
        property='complianceStatus'
        required
    />
    <LongText
        placeholder='complianceFindings'
        property='findings'
    />
</>

export default <DialogForm inputs={inputs} />
