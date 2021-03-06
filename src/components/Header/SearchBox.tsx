import { Flex, Icon, Input } from "@chakra-ui/react";
import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { useState,useRef } from "react";

// interface SearchBoxProps {
//     showTextSearchBox?: boolean;
// }
// export function SearchBox({showTextSearchBox }: SearchBoxProps){
export function SearchBox(){
    // const [search,setSearch] =useState('');

    const seachInputRef =useRef<HTMLInputElement>(null)

    return(
        
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
            // placeholder ={showTextSearchBox? "Buscar na plataforma":""}
            placeholder ="Buscar na plataforma"

            _placeholder ={{color:"gray.400"}}
            ref={seachInputRef}
            // value ={search}
            // onChange ={event =>setSearch(event.target.value)}
            />
            <Icon as = {RiSearchLine} fontSize = "20"/>
        </Flex>
    )}


    