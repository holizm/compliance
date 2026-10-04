import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='number'
        property='number'
        required
    />
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
        placeholder='detectedDate'
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
        placeholder='severity'
        property='complianceSeverity'
        required
    />
    <LongText
        placeholder='description'
        property='description'
        required
    />
</>

export default <DialogForm inputs={inputs} />
