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
        placeholder='code'
        property='code'
        required
    />
    <Text
        placeholder='authority'
        property='authority'
    />
    <Text
        placeholder='scope'
        property='scope'
        required
    />
    <DateTime
        placeholder='effectiveDate'
        property='effectiveDate'
    />
    <DateTime
        placeholder='expiryDate'
        property='expiryDate'
    />
    <Numeric
        placeholder='reviewIntervalDays'
        property='reviewIntervalDays'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
