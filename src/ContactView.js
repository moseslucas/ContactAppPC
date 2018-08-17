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

class ContactView extends Component {
  
  tawag (mobile) {
    phonecall(mobile, false)
  }

  mensahe (mobile) {
    text(mobile, false)
  }


  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem bordered header>
              <Text> {this.props.navigation.state.params.contact.name} </Text>
            </CardItem>
            <CardItem bordered>
              <Text> {this.props.navigation.state.params.contact.mobile} </Text>
            </CardItem>
            <CardItem bordered>
              <Text> {this.props.navigation.state.params.contact.email} </Text>
            </CardItem>
            <CardItem bordered>
              <Text> {this.props.navigation.state.params.contact.company} </Text>
            </CardItem>
          </Card>

          <Button full primary onPress={ () => { this.tawag(this.props.navigation.state.params.contact.mobile)  }  }>
            <Text> CALL </Text>
          </Button>
          <Button full success onPress={ () => { this.mensahe(this.props.navigation.state.params.contact.mobile)  }  }>
            <Text> SMS </Text>
          </Button>

        </Content>
      </Container>
    );
  }
}

export default ContactView
