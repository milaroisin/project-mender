import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import {titleStyles, textInputStyles, buttonStyles, containerStyles, changeProfileComponentStyles} from '../../stylesheets/ProfilePageStylesheet';

const ChangePasswordComponent = (props) => {
    return (
        <View style={containerStyles.container}>
            <View style={containerStyles.changeComponentContainer}>
                <View style={changeProfileComponentStyles.changeProfileInsideComponent}>
                    <View style={changeProfileComponentStyles.changeProfileInsideComponentRows}>
                        <View style={changeProfileComponentStyles.changeProfileInputComponent}>
                            <Text style={changeProfileComponentStyles.changeProfileTextAlignSelf}>Current Password</Text>
                            <TextInput style={props.validAuth
                                ? textInputStyles.textInput
                                : textInputStyles.invalidTextInput}
                                       secureTextEntry={true}
                                       onChangeText={text => props.handleCurrentPassword(text)}/>
                        </View>
                    </View>
                    <View style={changeProfileComponentStyles.changeProfileInsideComponentRows}>
                        <View style={changeProfileComponentStyles.changeProfileInputComponent}>
                            <Text style={changeProfileComponentStyles.changeProfileTextAlignSelf}>New Password</Text>
                            <TextInput style={props.validPassword && props.passwordNotAlreadyUsed
                                ? textInputStyles.textInput
                                : textInputStyles.invalidTextInput}
                                       secureTextEntry={true}
                                       onChangeText={text => props.handleNewPasswordChange(text)}/>
                        </View>
                    </View>
                    <View style={changeProfileComponentStyles.changeProfileInsideComponentRows}>
                        <View style={changeProfileComponentStyles.changeProfileInputComponent}>
                            <Text style={changeProfileComponentStyles.changeProfileTextAlignSelf}>Re-Enter New Password</Text>
                            <TextInput style={props.validEmailMatch
                                ? textInputStyles.textInput
                                : textInputStyles.invalidTextInput}
                                       onChangeText={text => props.handleConfirmEmail(text)}/>
                        </View>
                    </View>
                    <View style={changeProfileComponentStyles.changeProfileInsideComponentNormalRows}>
                        {!props.validPasswordMatch &&
                        <Text style={changeProfileComponentStyles.changeProfileInvalidText}>Passwords must match.</Text>
                        }
                        {!props.validPassword &&
                        <Text style={changeProfileComponentStyles.changeProfileInvalidText}>Password must be at least 8 characters, and must include at least one number and at least one letter.</Text>
                        }
                        {!props.validAuth &&
                        <Text style={changeProfileComponentStyles.changeProfileInvalidText}>Please enter correct password.</Text>
                        }
                        {!props.passwordNotAlreadyUsed &&
                        <Text style={changeProfileComponentStyles.changeProfileInvalidText}>Can't use same as previous password.</Text>
                        }
                    </View>
                    <View style={changeProfileComponentStyles.changeProfileInsideComponentNormalRows}>
                        <View style={changeProfileComponentStyles.changeProfileConfirmButton}>
                            <TouchableOpacity style={props.disableUpdateButton ? buttonStyles.buttonConfirmDisabled : buttonStyles.buttonConfirm}
                                              disabled={props.disableUpdateButton}
                                              onPress={() => props.handlePasswordChange()}><Text>Confirm</Text></TouchableOpacity>
                        </View>
                        <View style={changeProfileComponentStyles.changeProfileBackButton}>
                            <TouchableOpacity onPress={() => props.goToProfilePage()}><Text style={{textDecorationLine:'underline'}}>Back</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flex: 1}}>
            </View>
        </View>
    );
}

export default ChangePasswordComponent;