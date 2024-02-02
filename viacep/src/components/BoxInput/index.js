import { Input } from "../Input/index";
import { FieldContent } from "./style";
import { Label } from "../Label/index";


export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue,
    onchangeText,
    KeyType = 'default',
    maxLenght
}) => {
    return(
        <FieldContent fieldWidth={fieldWidth}>
            <Label textLabel={textLabel}/>

            <Input
                placeholder={placeholder}
                editable={editable}
                KeyType={KeyType}
                maxLenght={maxLenght}
                fieldValue={fieldValue}
                onchangeText={onchangeText}
            />
        </FieldContent>
        
    );
};