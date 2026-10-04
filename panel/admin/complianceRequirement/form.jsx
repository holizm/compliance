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
        code
        required
    />
    <Text authority />
    <Text
        required
        scope
    />
    <DateTime effectiveDate />
    <DateTime expiryDate />
    <Numeric reviewIntervalDays />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
