import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
// import { auth2 } from '../functions/auth'
import Styles from '../styles/styles'
import { Drawer } from 'react-native-material-drawer'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Icon } from 'react-native-elements'
import { Value } from 'react-native-reanimated'

const auth = require('../functions/auth')

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const widthPercent = (screenWidth / 100)
const heightPercent = (screenHeight / 100)

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			label: "Eventos",
			isOpen: false,
			limit: 2,
			page: 1,
		}

	}

	async getEvents() {
		const myRequest = new Request(
			`https://frontend-test.agendaedu.com/api/events?limit=${this.state.limit};page=${this.state.page}`,
			{
				method: 'GET',
				// mode: 'no-cors',
				headers: {
					token:
						'3O701JINSMVIRtuuB7fY1SZ37bYIqDoPTs1auRYzHzLzxXXcuxvptQaowASztVJzAnGl6X00MRIZYjOTAN9SDt0rMZ47EfCNrAWB2oadSedsKbGGx2FRE9HnnloCs0sbONRvpqg5YmI7lrZ90RhrKGI',
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
				// body: JSON.stringify({
				//   token: '3O701JINSMVIRtuuB7fY1SZ37bYIqDoPTs1auRYzHzLzxXXcuxvptQaowASztVJzAnGl6X00MRIZYjOTAN9SDt0rMZ47EfCNrAWB2oadSedsKbGGx2FRE9HnnloCs0sbONRvpqg5YmI7lrZ90RhrKGI',
				// })
			}
		)

		fetch(myRequest)
			.then(response => {
				if (response.status === 200) {
					return response.json()
				} else {
					throw new Error('erro em no servidor.')
				}
			})
			.then(response => {
				// console.log(`RESPONSE: ${JSON.stringify(response)} `)
				console.debug(response)
				// ...
			})
			.catch(error => {
				console.log(`RESPONSE: ${JSON.stringify(error)} `)
				// console.error(error)
			})
	}


	async componentDidMount() {
		const { navigation } = this.props

		navigation.setOptions({
			headerLeft: () => (
				<TouchableOpacity onPress={() => { this.setState({ isOpen: !this.state.isOpen }) }}>
					<Icon
						size={widthPercent * 8}
						color="#000"
						containerStyle={{ marginLeft: widthPercent * 4, backgroundColor: "#FFF" }}
						type="ionicon"
						name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
					/>
				</TouchableOpacity>
			),
		})

		this.getEvents()

		// await auth.login() == true ? this.setState({label: "Sucesso"}) :  this.setState({label: "Credenciais Incorretas"})
	}

	render() {
		const { navigation } = this.props

		return (
			<View style={styles.container}>
				<Drawer
					style={{ justifyContent: "center" }}
					open={this.state.isOpen}
					drawerContent={
						<View style={Styles.lateralMenu}>
							<TouchableOpacity
								style={Styles.btnSair}
								onPress={() => { auth.logOut(navigation) }}
							>
								<Text style={Styles.labelBtnEntrar}>Sair</Text>
							</TouchableOpacity>
						</View>
					}
					onClose={() => this.setState({ isOpen: false })}
					animationTime={250}
				>
					<ScrollView>
						<View style={Styles.homeContainer}>

							<View style={Styles.mainContainer}>
								<View style={Styles.header}>
									<View style={{ flex: 1 }}>
										<Text style={Styles.headerLabel}>Quarta, 25 de janeiro</Text>
									</View>
									<View style={{ flex: 1 }}>
										<View style={Styles.headerLine} />
									</View>
								</View>

								<View style={Styles.eventContainer}>
									<View style={Styles.eventLateralMarker} />
									<View style={Styles.imageView}>
										<Image
											style={Styles.cardImage}
											source={require('../assets/imgs/image.jpeg')}
										/>
									</View>
									<View style={Styles.eventContent} >
										<Text style={Styles.eventContentType}>EVENTOS</Text>
										<Text style={Styles.eventTitle}>Aula especial de natação</Text>
										<View style={Styles.clockView}>
											<EvilIcons
												size={widthPercent * 6.5}
												color="#666666"
												containerStyle={{ backgroundColor: "#F00" }}
												name={'clock'}
											/>
											<Text style={Styles.txtClock}>14:00</Text>
										</View>
										<Text style={Styles.eventDateTime}>Quarta, 25 de janeiro às 20:00h</Text>
									</View>
								</View>

							</View>
						</View>
					</ScrollView>
				</Drawer>

				<StatusBar style='auto' />
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})



export default function ({ props, route }) {
	const navigation = useNavigation()

	return <Home {...props} navigation={navigation} />
}
