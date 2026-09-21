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
        placeholder='coreAuthority'
        property='authority'
    />
    <Text
        placeholder='complianceScope'
        property='scope'
        required
    />
    <DateTime
        placeholder='coreEffectiveDate'
        property='effectiveDate'
    />
    <DateTime
        placeholder='coreExpiryDate'
        property='expiryDate'
    />
    <Numeric
        placeholder='coreReviewIntervalDays'
        property='reviewIntervalDays'
    />
    <LongText
        placeholder='complianceDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
