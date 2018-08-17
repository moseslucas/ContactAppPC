import React from 'react';
// import the components we need from nativebase
import { Container, Body, Header, Content, List, ListItem, Text, Left, Right, Icon, Button } from 'native-base';
// import phonecall sa we can call some digitz
import { phonecall } from 'react-native-communications'

class ContactList extends React.Component {
  
  constructor () {
    super()

    this.state = {
      contacts:  [
        {name: 'Moses', mobile: '09157569919', email: 'lukeses09@gmail.com', compoany: 'Proudcloud'},
        {name: 'Jimi Hendrix', mobile: '09173428288'},
        {name: 'Batista Bomb', mobile: '09158578928'},
        {name: 'Hulk Hogan', mobile: '0906928182x'},
        {name: 'John Cena', mobile: '09759890102'}
      ]
    }
  }

  openRecord (contact) {
    this.props.navigation.navigate('ContactView', { contact: contact } )
  }

  delete (name) {
    this.setState({
      contacts: this.state.contacts.filter( contact => contact.name !== name )
    })
  }

  // render here function is required
  render() {


    return (
      <Container>
        <Header />
        <Content>
          <List>
            {
              // iterate through each contacts
              this.state.contacts.map((contact, i) => {
                return (
                  // will render ListItem for each iteration of contacts
                  // pressing a ListITem will call the dial() function
                  <ListItem key={i} onPress={ () => {this.openRecord(contact)} }>
                    <Body>
                      <Text> {contact.name} </Text>
                      <Text note> {contact.mobile} </Text>
                    </Body>
                    <Right>
                      <Button danger onPress={ () => { this.delete(contact.name) }  }>
                        <Text>
                          DELETE
                        </Text>
                      </Button>
                    </Right>
                  </ListItem>
                )
              })
            }
          </List>
        </Content>
      </Container>
    );
  }
}

export default ContactList
