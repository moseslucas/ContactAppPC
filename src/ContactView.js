import React, { Component } from 'react'
import {
  Container,
  Content,
  Title,
  Text,
  Card,
  CardItem,
  Button
} from 'native-base'
import { phonecall, text } from 'react-native-communications'

export default class ContactView extends Component {
  tawag (mobile) {
    phonecall(mobile, false)
  }

  mensahe (mobile) {
    text(mobile, false)
  }

  render() {
    const { contact } = this.props.navigation.state.params
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem bordered header>
              <Text> {contact.name} </Text>
            </CardItem>
            <CardItem bordered>
              <Text> {contact.email} </Text>
            </CardItem>
            <CardItem bordered>
              <Text> {contact.mobile} </Text>
            </CardItem>
            <CardItem bordered>
              <Text> {contact.description} </Text>
            </CardItem>
          </Card>
        </Content>
        <Button full info onPress={ () => { this.tawag(contact.mobile) }  }>
          <Text> CALL </Text>
        </Button>
        <Button full success onPress={ () => { this.mensahe(contact.mobile) }  } >
          <Text> SMS </Text>
        </Button>
        <Button full danger>
          <Text> DELETE </Text>
        </Button>
      </Container>
    );
  }
}
