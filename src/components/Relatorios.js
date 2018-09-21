import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text, List, ListItem, Button, Icon } from 'native-base';
import { StyleSheet, TouchableOpacity, Alert, View, AsyncStorage, ListView, TextInput, ActivityIndicator} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import api from './../services/api';
import {withNavigation} from 'react-navigation';
import Routes, {SignedInRoutes,SignedOutRoutes,createRootNavigator} from './../Routes';

class Relatorios extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { 
        chosenDate: new Date().toISOString(),
        isLoading: true,
        text: '',
        tableHead: ['Cliente', 'CPF', 'Produtos', 'Contato'],
        tableData: [
            ['1ewewewewewewe', '2wewewewewe', '3wewewewewewe', '4ewewe'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
        ],
        date1: '',
        date2: '',
        resServer: '',
        dataSource: '',
    };

    this.arrayholder = [];

    this.setDate = this.setDate.bind(this);
    this.setDate2 = this.setDate2.bind(this);
    this.dataAtualFormatada = this.dataAtualFormatada.bind(this);
  }

  _searchByDate = async () => {
    const token = 
    await AsyncStorage.getItem('@CodeApi:token');

    const response = await api.post('/relatorios', {
        date1: this.state.date1,
        date2: this.state.date2,
      });
    
  //  const dados = Object.values(response.data);

  //  Alert.alert(dados)

    this.setState({resServer: response.data})

    let teste = JSON.stringify(this.state.resServer);


    Alert.alert(teste)
    
  } 
  
/*
async componentDidMount() {
    const token = 
    await AsyncStorage.getItem('@CodeApi:token');

    const response = await api.post('/relatorios', {
        date1: this.state.date1,
        date2: this.state.date2,
      });
    
    this.setState({resServer: response.data})

    let teste = JSON.stringify(this.state.resServer);


    Alert.alert(teste)
}
*/

  isRes = async () => {
    const token = 
    await AsyncStorage.getItem('@CodeApi:token');

    const dt1 = this.state.date1.toString()
    const dt2 = this.state.date2.toString()

  return fetch('http://159.69.23.49:3000/relatorios', {
      method: 'POST',
      headers: {
          'content-type': "application/json",
          'Authorization': `Bearer ${token}`,
     },
       body: JSON.stringify({
           'date1': dt1,
           'date2': dt2
       })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      }, function() {

        // In this block you can do something with new state.
        this.arrayholder = responseJson ;

      });
    })
    .catch((error) => {
      console.error(error);
    });
  };

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  dataAtualFormatada(date) { 
    var data = date;
    var dia = data.getDate();
    if (dia.toString().length == 1)
      dia = "0"+dia;
    var mes = data.getMonth()+1;
    if (mes.toString().length == 1)
      mes = "0"+mes;
    var ano = data.getFullYear();  
    return dia+"/"+mes+"/"+ano;
    } 

  setDate(newDate) {
   // newGet = this.dataAtualFormatada(newDate)
   getDate = newDate.toISOString();
    this.setState({ date1: getDate });
  }
  setDate2(newDate) {
    //newGet2 = this.dataAtualFormatada(newDate)
    getDate2 = newDate.toISOString();
    this.setState({ date2: getDate2 });
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Detalhes</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <Container>
        <Content style={{backgroundColor:'#eaeaea'}}>
          <Text style={{fontSize: 20}}>
             Data inicial: 
          </Text>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"pt-br"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="< Clique para informar a data >"
            textStyle={{ color: "green", fontSize: 20 }}
            placeHolderTextStyle={{ color: "#000000" }}
            onDateChange={this.setDate}
            style={{borderRadius: 2, borderColor: '#000000', borderWidth: 0.5}}
            placeHolderTextStyle={{fontSize: 18, color: '#012a04'}}
            />
            <Text style={{fontSize: 20}}>
             Data final: 
          </Text>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"pt-br"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="< Clique para informar a data >"
            textStyle={{ color: "green", fontSize: 20 }}
            placeHolderTextStyle={{ color: "#000000" }}
            onDateChange={this.setDate2}
            placeHolderTextStyle={{fontSize: 18, color: '#012a04'}}
            />
            

        <Button iconLeft block success 
          style={styles.buttonDefault}
          onPress={this.isRes}
        >
          <Icon name='search' />
          <Text>Procurar</Text>
        </Button>
        
            { !!state.dataSource &&
             
                <ListView
                
                dataSource={state.dataSource}

                renderSeparator= {this.ListViewItemSeparator}

                renderRow={(rowData) => 
               
               <List>
                   <ListItem>
                <Text> Cliente:{rowData.nome} | Produto: {rowData.produto} | CPF: {rowData.cpf} </Text>
                    </ListItem>
                </List>
                


                }

                enableEmptySections={true}

                style={{marginTop: 10}}

                />
          }

            { !!state.dataSource && <Text style={{fontSize: 11}}>
                  De: {this.state.date1.toString()} até {this.state.date2.toString()}
            </Text> }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#cecece' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#eaeaea' },
    btn: { width: 70, height: 25, backgroundColor: '#4682B4',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
  });

  export default withNavigation(Relatorios);