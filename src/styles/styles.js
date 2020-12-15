import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import * as Font from 'expo-font'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const widthPercent = (screenWidth / 100)
const heightPercent = (screenHeight / 100)



export default StyleSheet.create({


    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
    },

    // ../screens/configuration.js
    txtLoading: {
        fontSize: widthPercent * 7,
        fontFamily: 'SFProDisplay-Bold',
        color: '#333333',
    },

    // ../screens/login.js
    formContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
    },
    btnEntrarContainer: {
        // flex: 0.2,
        width: '100%',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerLoginInput: {

    },
    containerEmail: {

    },
    containerPsw: {
        marginTop: heightPercent * 2,
    },
    labelMain: {
        fontFamily: 'SFProDisplay-Bold',
        fontSize: widthPercent * 7.2,
        color: '#333333',
        marginBottom: widthPercent * 8,
    },

    labelEmail: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: widthPercent * 4.2,
        color: '#666666',
        marginBottom: widthPercent * 1.5,
    },
    ViewLoginInput: {
        flexDirection: "row",
    },
    loginInput: {
        width: widthPercent * 87.2,
        height: heightPercent * 9.5,
        borderRadius: widthPercent * 1,
        fontSize: widthPercent * 5,
        fontFamily: 'SFProDisplay-Regular',
        borderColor: '#733DBE',
        borderWidth: 1,
        backgroundColor: '#FFF',
        color: '#333333',
        paddingRight: '14%',
        paddingLeft: '7%',

    },
    EmailInputIcon: {
        position: "absolute",
        right: widthPercent * 3,
        alignSelf: "center"

    },
    btnChangeVisblePsw: {
        position: "absolute",
        right: widthPercent * 3,
        alignSelf: "center",
        width: widthPercent * 10,
        height: widthPercent * 10,
        justifyContent: "center",
        alignItems: "center",
    },
    btnEntrar: {
        alignSelf: "center",
        width: '82%',
        height: widthPercent * 15,
        borderRadius: widthPercent * 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#733DBE',
        bottom: 0,
        marginBottom: '7%',
    },
    labelBtnEntrar: {
        fontFamily: 'SFProDisplay-Semibold',
        fontSize: widthPercent * 5,
        color: '#FFFFFF',
    },

    // ../screens/home.js
    homeContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFF',
        alignItems: 'center',
        paddingBottom: heightPercent * 5,
        // justifyContent: 'center',
        width: null,
        height: null,
    },
    mainContainer: {
        width: '88%',
        alignItems: "center",
        marginTop: heightPercent * 5,
        // backgroundColor: '#0FF',
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: '#FFF',
        justifyContent: "space-between",
        marginBottom: heightPercent * 2,
    },
    headerLine: {
        // backgroundColor: '#F00',
        borderBottomColor: '#C3CBD2',
        borderBottomWidth: 1,
        justifyContent: "flex-start",
    },
    headerLabel: {
        fontFamily: 'SFProDisplay-Semibold',
        fontSize: widthPercent * 4.1,
        color: '#999999',
    },
    eventContainer: {
        width: '100%',
        height: heightPercent * 23,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: widthPercent * 2,
        // backgroundColor: '#F00',
        marginTop: heightPercent * 1.5,
        // borderWidth: 1,
        // borderColor: '#733DBE1A',
        shadowColor: '#733DBE1A',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 1,
        elevation: widthPercent * 2,
        backgroundColor: '#FFF',


        // elevation: 5,
    },
    eventLateralMarker: {
        width: '2.5%',
        height: '100%',
        backgroundColor: '#733DBE',
        borderTopLeftRadius: widthPercent * 2,
        borderBottomLeftRadius: widthPercent * 2,

    },
    eventContent: {
        flex: 1,
        height: '100%',
        backgroundColor: '#FFF',
        borderTopRightRadius: widthPercent * 2,
        borderBottomRightRadius: widthPercent * 2,
        justifyContent: "center"
    },
    imageView:{
        width: '23%',
        backgroundColor: '#FFF',
        marginLeft: widthPercent * 4,
    },
    cardImage:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        borderRadius: widthPercent * 2,
    },
    eventContentType: {
        // fontFamily: 'SFProDisplay-Regular',
        fontFamily: 'SFProDisplay-Medium',
        fontSize: widthPercent * 4,
        color: '#999999',
        marginTop: widthPercent * -2,
        marginLeft: widthPercent * 3,

    },
    eventTitle: {
        fontFamily: 'SFProDisplay-Medium',
        fontSize: widthPercent * 4.8,
        color: '#333333',
        marginTop: widthPercent * 2,
        marginLeft: widthPercent * 3,
    },
    clockView: {
        flexDirection: "row",
        marginTop: heightPercent * 0.3,
        marginLeft: widthPercent * 2,
        alignItems: "center",
        textAlignVertical: "top"
    },
    txtClock: {
        fontFamily: 'SFProDisplay-Regular',
        color: '#666666',
        fontSize: widthPercent * 4.5,
        textAlignVertical: "center",
    },
    eventDateTime:{
        fontFamily: 'SFProDisplay-Regular',
        color: '#999999',
        fontSize: widthPercent * 4,
        marginLeft: heightPercent * 2,
        marginTop: heightPercent * 1,
    },
    lateralMenu: {
        paddingVertical: widthPercent * 5
    },
    btnSair: {
        alignSelf: "center",
        width: '95%',
        height: widthPercent * 15,
        borderRadius: widthPercent * 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#733DBE',
        bottom: 0,
        marginBottom: '7%',
    },
})
