import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        number
        required
    />
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
        detectedDate
        required
    />
    <Select
        complianceSeverity
        options={[
            'low',
            'medium',
            'high',
            'critical',
        ]}
        placeholder='severity'
        required
    />
    <LongText
        description
        required
    />
</>

export default <DialogForm inputs={inputs} />
