import React from 'react';
// import the components we need from nativebase
import { Container, Body, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
// import phonecall sa we can call some digitz
import { phonecall } from 'react-native-communications'

class App extends React.Component {

  dial (mobile) {
    phonecall(mobile, false)
  }

  // render here function is required
  render() {
    // Our Data Source
    const contacts = [
      {name: 'Moses', mobile: '09157569919'},
      {name: 'Jimi Hendrix', mobile: '09173428288'},
      {name: 'Batista Bomb', mobile: '09158578928'},
      {name: 'Hulk Hogan', mobile: '0906928182x'},
      {name: 'John Cena', mobile: '09759890102'}
    ]

    return (
      <Container>
        <Header />
        <Content>
          <List>
            {
              // iterate through each contacts
              contacts.map((contact, i) => {
                return (
                  // will render ListItem for each iteration of contacts
                  // pressing a ListITem will call the dial() function
                  <ListItem key={i} onPress={ () => {this.dial(contact.mobile)} }>
                    <Body>
                      <Text> {contact.name} </Text>
                      <Text note> {contact.mobile} </Text>
                    </Body>
                    <Right>
                      <Icon name='arrow-forward' />
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

export default App
