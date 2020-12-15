const mockedNavigate = jest.fn();

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon')

jest.mock("@react-native-community/async-storage", () =>
    require("@react-native-community/async-storage/jest/async-storage-mock"),
);

jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => ({
            navigate: mockedNavigate,
        }),
    };
});


import React from 'react';
import {create, act} from 'react-test-renderer';
import Login from '../screens/login';


const tree = create(
    <Login />
);

test('snapshot', () => {
    let component = tree.toJSON();
    expect(component).toMatchSnapshot();
});

test('text button login', () => {
    const text = tree.root.findByProps({testID: 'textButton'}).props
    expect(text.children).toEqual('Entrar')
});

test('button click', () => {
    // const button = tree.root.findByProps({testID: 'entryButton'}).props
    // act(() => button.onPress())
    // expect(mockedNavigate).toHaveBeenCalledTimes(1)
    // expect(text.children).toEqual('Entrar')
});