import React, { Component } from 'react';
import { Container, Item, Input, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body } from 'native-base';
import { LiestView } from 'realm/react-native'


import styles from '../styles/styles';

import realm from "../db_ini"

import { findInDb, findInDbTagText } from '../../../db/db_helper'

import { base64Icon, donny } from '../../../db/base64img'

const showContactDetail = (navigate,setRecentContactId,contactId) => {
  navigate({routeName: 'ConnectDetail'})
  setRecentContactId(contactId)
}

const getSearchResult = (text,setSearchQuery) => {
  console.log("moin")
  console.log(text)
  //setSearchQuery(text)
}

//TODO user ListView from realm

const ConnectView = (props) => {
  const { navigate, setRecentContactId, contactId, searchQuery, setSearchQuery } = props
  console.log(setSearchQuery)
  let datas = realm.objects('User')
  const uri = "./donny-copy.png"

    return (
      <Container style={styles.container}>
      <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onChangeText={(text)=> setSearchQuery(text)}/>
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text onClick={() => setSearchQuery("moin")}>Search </Text>
                    </Button>
                </Header>
        <Content style={{marginTop:10}}>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem avatar onPress={() => showContactDetail(navigate,setRecentContactId,data.userId)}>
                <Left>
                  <Thumbnail source={{uri: findInDbTagText(data.userData[0].personalData,"tagDescription","Image")}} />
                </Left>
                <Body>
                  <Text>
                    {findInDb(data.userData[0].personalData,"tagDescription","Vorname").tagText}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.publicSharedData[0].hashTagData[0].tagDescription}
                    {": "}
                    {data.publicSharedData[0].hashTagData[0].tagText}
                  </Text>
                </Body>
                <Right>
                <Icon ios='md-add' android="md-add" style={{fontSize: 25, color: 'black'}}/>
                </Right>
              </ListItem>
        }
          />
        </Content>
      </Container>
    )
}

export default ConnectView;
