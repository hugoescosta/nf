import React from "react";
import { Text, TextInput } from "react-native";
import styles from "../styles";

function Input(props) {
    return(
        <>
            {props.label && <Text style={[styles.text]}>{props.label}</Text>}
            <TextInput
                style={[styles.input]}
                placeholder={props.placeholder}
                placeholderTextColor="rgba(225,225,225,0.4)"
                secureTextEntry={props.secureTextEntry}
                keyboardType={props.keyboardType}
                {...props}
            />
        </>
    )
}

export default Input