import { Box, Flex ,Text, Avatar} from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData =true} : ProfileProps){
    return(
        <Flex align = "center"> 
          {showProfileData && (
                        <Box mr= "4" textAlign = "right">
                        <Text>Lucas Ribeiro</Text>
                        <Text>lucas@email.com</Text>
                    </Box>
          )}
                    <Avatar size = 'md' name = "Lucas Ribeiro" src = "https://github.com/DevDosSantosLucas.png"/>
                </Flex>
    )
}