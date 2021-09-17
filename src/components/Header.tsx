import React from "react";
import { Flex,Box ,Input,Text, Icon,HStack, Avatar} from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine} from 'react-icons/ri';

export function Header() {
    return(
        <Flex 
            as = "header"
            w = "100%"
            maxWidth = {1480}
            h = "20"
            mx = "auto"
            mt = "4"
            px = "6" 
            align = "center"
            >
                <Text 
                fontSize= "3xl"
                fontWeight= "bold" 
                letterSpacing="tight" 
                w = "64">
                    dashgo
                <Text as = "span" ml = "1" color= "pink">.</Text>
                </Text>

            <Flex 
            as = "label"
            flex = "1"
            py= "4"
            px = "8"
            ml = "6" 
            maxWidth = {400}
            alignSelf = "center"
            color = "gray.200"
            position = "relative"
            bg = "gray.800"
            borderRadius = "full">
                <Input
                color = "gray.50"
                variant = "unstyled"
                mr = "4"
                px = "4"
                placeholder = "Buscar na plataforma"
                _placeholder ={{color:"gray.400"}}
                />
                <Icon as = {RiSearchLine} fontSize = "20"/>
            </Flex>

            <Flex
            align = "center"
            ml = "auto"
            >
                <HStack 
                    spacing ="8" ml= "auto" pr = "8" py = "1"
                    color="green.300" borderRightWidth = {1} borderColor = "gray.700"
                >
                    <Icon as ={RiNotificationLine } fontSize = "20" />
                    <Icon as ={RiUserAddLine } fontSize = "20" />
                </HStack>

                <Flex align = "center"> 
                    <Box mr= "4" textAlign = "right">
                        <Text>Lucas Ribeiro</Text>
                        <Text>lucas@email.com</Text>
                    </Box>
                    <Avatar size = 'md' name = "Lucas Ribeiro" src = "https://github.com/DevDosSantosLucas.png"/>
                </Flex>
            </Flex>
        </Flex>
    )
}