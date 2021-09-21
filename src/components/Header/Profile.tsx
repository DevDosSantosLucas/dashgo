import { Box, Flex ,Text, Avatar} from "@chakra-ui/react";
import React from "react";

export function Profile(){
    return(
        <Flex align = "center"> 
                    <Box mr= "4" textAlign = "right">
                        <Text>Lucas Ribeiro</Text>
                        <Text>lucas@email.com</Text>
                    </Box>
                    <Avatar size = 'md' name = "Lucas Ribeiro" src = "https://github.com/DevDosSantosLucas.png"/>
                </Flex>
    )
}