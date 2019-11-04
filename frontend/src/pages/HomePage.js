import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { userLogout } from '../redux/actions';
import { styles } from '../stylesheets/Stylesheet';
import CommonHeader from '../components/CommonHeader';
import WorkOrderComponent from '../components/WorkOrderModal';

class HomePage extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home'
    }
    constructor(props) {
        super(props);
        this.state = {
            loggingOut: false,
            user: props.user.user,
            displayModal: false,
        },
            this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState(prevState => {
            return {
                displayModal: true
            }
        });
    }

    closeModal = () => {
        this.setState(prevState => {
            return {
                displayModal: false
            }
        })
    }

    openWorkModal = () => {
        this.openModal
    }

    static navigationOptions = {
        title: 'Home Page',
    };

    handleLogout = async () => {
        this.setState({ loggingOut: true })
        await this.props.userLogout();
        this.props.navigation.navigate('WelcomePage')
    }

    render() {
        var { loggingOut } = this.state;
        return (
            <View style={styles.container}>
                <CommonHeader user={this.state.user} />
                <View style={styles.bodyContainer}>
                    {loggingOut
                        ? <Text>Logging out...</Text>
                        : <View style={styles.container}>
                            <Button
                                title="Logout"
                                onPress={() => this.handleLogout()}
                            />
                        </View>

                    }
                    <WorkOrderComponent
                        data="Seb"
                        display={this.state.displayModal}
                        closeModal={() => this.setState({ displayModal: false })}
                    />
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout())
});

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
