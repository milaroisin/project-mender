import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bodyContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'

    }, 
    menderWelcomeLogo: {
        marginTop: '30%',
        alignItems: 'center',
    }, 
    buttonGroup: {
        marginTop: '30%',
        flex: 1,
        justifyContent: 'center'
    }, 
    propertyContainer: {
        height: 50
    }, 
    imageWelcomeLogo:{
        width: 250, 
        height: 250, 
        borderRadius: 125, 
        backgroundColor: 'teal'
    }, 
    imageTopBarLogo: {
        marginLeft: 10,
        width: 50, 
        height: 50, 
        borderRadius: 25,
        backgroundColor: 'teal',
        alignSelf: 'flex-start'
    },
    imageNormalLogo: {
        marginLeft: 10,
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'teal'
    }
})

const loginComponent = StyleSheet.create({
    imageBackgroundLogin: {
        width: '100%',
        height: '100%',
        justifyContent:'center',
    },
    loadingStyle: {
        alignSelf:'center',
        backgroundColor: 'white',
        fontWeight: 'bold',
        padding: '2%'
    }
})

const signUpComponent = StyleSheet.create({
    signUpPageComponent: {
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        alignSelf: 'center',
        fontSize: 20,
        paddingTop: 10,
        marginTop: 25,
    },
    headerView: {
        paddingBottom: 10,
        marginBottom: 15,
        borderBottomColor: '#4DAFFF',
        borderBottomWidth: 3,
    },
    fieldDescriptor: {
        paddingTop: 10
    },
    signUpInputText: {
        height: 40, 
        width: 150, 
        borderBottomColor: 'black', 
        borderBottomWidth: 1,
        marginBottom: 3,
    },
    invalidSignUpInputText: {
        height: 40, 
        width: 150, 
        borderBottomColor: 'red', 
        borderBottomWidth: 1,
        marginBottom: 3
    },
    picker: {
        width: 160,
        height: 100
    },
    pickerItem: {
        height: 100
    },
    registerButton: {
        alignSelf: 'center',
        marginRight:40,
        marginLeft:40,
        marginTop:5,
        paddingTop:5,
        paddingBottom:10,
        backgroundColor:'#4DAFFF',
        borderRadius:10,
        borderWidth: 2,
        borderColor: '#fff',
        width: 200,
        height: 40
    },
    registerText:{
        alignSelf: 'center',
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
        fontSize: 16
    }
})

const headerStyles = StyleSheet.create({
    commonHeaderTextComponent: {
        flex: 2,
        paddingTop: 20
    },
    commonHeaderText: {
        textAlign: 'center', 
        fontSize: 30,
        paddingTop: 10
    },
    commonHeaderTitle: {
        alignItems: 'center', 
        width: '100%', 
        justifyContent: 'space-around'
    },
    commonHeaderSearch: {
        flex: 2, 
        alignSelf: 'center', 
        width: 300,
        paddingBottom: 10
    },
    commonHeaderComponent: {
        flex: 1, 
        borderBottomColor:'#d3d3d3', 
        borderBottomWidth: 2
    },
    propertyHeaderText: {
        fontSize: 20,
        paddingTop: 15
    },
    profileButton: {
        marginRight: 10, 
        width: 50, 
        height: 50, 
        alignSelf: 'flex-start'
    }
})

const buttons = StyleSheet.create({
    buttonSignUp: {
        width: '50%',
        alignSelf: 'center',
        borderRadius: 25
    },
    buttonLogIn: {
        width: '50%',
        alignSelf: 'center',
        borderRadius: 25
    },
    buttonProperty: {
        marginRight:0,
        marginLeft:0,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor:'#f5f5f5',
        borderRadius: 0,
        height: 50
    },
    buttonTextProperty: {
        textAlign:'center',
        alignSelf: 'center',
        paddingLeft : 0,
        paddingRight : 0,
        marginBottom: 10,
        fontSize: 20
    }
})

export { styles, buttons, loginComponent, headerStyles, signUpComponent };
