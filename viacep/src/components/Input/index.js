import { InputText } from "./style";

export function Input({
    placeholder,
    editable,
    fieldValue,
    onchangeText,
    KeyType,
    maxLength
}) {
    return(
        <InputText
            placeholder={placeholder}
            editable={editable}
            keyboardType={KeyType}
            maxLenght={maxLength}
            value={fieldValue}
            onChangeText={onchangeText}
        />
        
    )
}