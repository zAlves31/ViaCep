import { BoxInput } from "../../BoxInput/index"
import {ScrollForm, ContainerForm, ContainerAdd} from "./style"
import axios from 'axios';
import { useEffect, useState } from "react";



export function Home(){

    const [cep, setCep] = useState();
    const [endereco, setEndereco] = useState({});
    const [estado, setEstado] = useState()

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
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setEndereco(response.data)

            const estado = await axios.get (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${response.data.uf}`)
            setEstado(estado.data.nome);
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
                    fieldValue={endereco.logradouro}
                       
                />

                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldValue={endereco.bairro}
                        
                />

                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldValue={endereco.localidade}
                                      
                />
                <ContainerAdd>
                    <BoxInput
                        fieldWidth={65}
                        textLabel="Estado"
                        placeholder="Estado..."
                        fieldValue={estado}
                        
                    />
                    
                    <BoxInput
                        fieldWidth={25}
                        textLabel="UF"
                        placeholder="UF"
                        fieldValue={endereco.uf}
                        
                    />
                </ContainerAdd>

                
            </ContainerForm>
        </ScrollForm>
    )
        
    
}
