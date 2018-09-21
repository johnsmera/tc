import React, { Component } from 'react';
import { Container, Header, Content, List, Item, Input, Button, ListItem, Text, Icon} from 'native-base';
import { withNavigation } from 'react-navigation';
import { isSignedIn } from './../services/auth';
import { View, TouchableOpacity } from 'react-native';
class VisualizaVenda extends Component {
    render() {
        var items = [
          '#201239 | cliente nome',
          '#201232 | cliente nome',
          '#201233 | cliente nome',
        ];
        return (
        
          <Container>
             <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Procurar por cliente" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

            <Content>
                  <List dataArray={items}
                renderRow={(item) =>
                <TouchableOpacity onPress={() => alert('ok')}>     
                  <ListItem>
                    <Text>{item}</Text>
                  </ListItem>
                </TouchableOpacity>
                }>
              </List>
            </Content>
          </Container>
      
        );
      }
}

export default withNavigation(VisualizaVenda);