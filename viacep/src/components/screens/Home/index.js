import { BoxInput } from "../../BoxInput/index"
import {ScrollForm, ContainerForm, ContainerAdd} from "./style"
import axios from 'axios';
import { useEffect, useState } from "react";



export function Home(){

    const [cep, setCep] = useState();
    const [endereco, setEndereco] = useState({});

    useEffect(() => {
        if(cep){
            getcep();
        }
        else{
            clearCep();
        }
    }, [cep]);

    const getcep = async () => {
        try{
            const response = await axios.get(`https://brasilaberto.com/api/v1/zipcode/${cep}`) // https://viacep.com.br/ws/${cep}/json/
            setEndereco(response.data)
        }catch(error){
            console.error
        } 
    }

    function clearCep(){
        setEndereco({})
    }
      
      
    
    return(
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel="informe o Cep"
                    placeholder="Cep..."
                    KeyType="numeric"
                    maxLenght={9}
                    editable={true}
                    fieldValue={cep}
                    onchangeText={text => setCep(text)}

                />

                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    fieldValue={endereco.result.street}
                       
                />

                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldValue={endereco.result.district}
                        
                />

                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldValue={endereco.result.city}
                                      
                />
                <ContainerAdd>
                    <BoxInput
                        fieldWidth={65}
                        textLabel="Estado"
                        placeholder="Estado..."
                        fieldValue={endereco.result.state}
                        
                    />
                    
                    <BoxInput
                        fieldWidth={25}
                        textLabel="UF"
                        placeholder="UF"
                        fieldValue={endereco.result.stateShortname}
                        
                    />
                </ContainerAdd>

                
            </ContainerForm>
        </ScrollForm>
    )
        
    
}
