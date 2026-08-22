import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='complianceCode'
        property='code'
        required
    />
    <Text
        placeholder='complianceAuthority'
        property='authority'
    />
    <Text
        placeholder='complianceScope'
        property='scope'
        required
    />
    <DateTime
        placeholder='complianceEffectiveDate'
        property='effectiveDate'
    />
    <DateTime
        placeholder='complianceExpiryDate'
        property='expiryDate'
    />
    <Numeric
        placeholder='complianceReviewIntervalDays'
        property='reviewIntervalDays'
    />
    <LongText
        placeholder='complianceDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
