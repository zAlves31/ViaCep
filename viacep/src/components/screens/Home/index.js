import { BoxInput } from "../../BoxInput/index"
import {ScrollForm, ContainerForm, ContainerAdd} from "./style"



export function Home(){
    return(
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel="informe o Cep"
                    placeholder="Cep..."
                    KeyType="numeric"
                    maxLenght={9}
                    editable={true}
                />

                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                       
                />

                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                        
                />

                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                                      
                />
                <ContainerAdd>
                    <BoxInput
                        fieldWidth={65}
                        textLabel="Estado"
                        placeholder="Estado..."
                        
                    />
                    
                    <BoxInput
                        fieldWidth={25}
                        textLabel="UF"
                        placeholder="UF"
                        
                    />
                </ContainerAdd>

                
            </ContainerForm>
        </ScrollForm>
    )
        
    
}