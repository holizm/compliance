import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='complianceNumber'
        property='number'
        required
    />
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
        placeholder='complianceDetectedDate'
        property='detectedDate'
        required
    />
    <Select
        options={[
            'low',
            'medium',
            'high',
            'critical',
        ]}
        placeholder='complianceSeverity'
        property='complianceSeverity'
        required
    />
    <LongText
        placeholder='complianceDescription'
        property='description'
        required
    />
</>

export default <DialogForm inputs={inputs} />
