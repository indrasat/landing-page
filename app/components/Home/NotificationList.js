import React, {Component} from 'react';
const {Body, Card, CardItem, Content, H2, List, ListItem, Right, Text} = require('native-base');
import styles from '../Global/styles';

export default class NotificationList extends Component {
    constructor(props){
        super(props);
    }

    render(){

        return(
            <Card transparent style={styles.cardTransparent}>
                <CardItem style={[styles.cardList, styles.cardTitle]}>
                    <H2 style={styles.textTitleCard}>Hello Jason,</H2>
                </CardItem>
                <CardItem style={[styles.cardList, styles.cardListBorderBottom]}>
                    <Content>
                        <List style={styles.cardListBorder}>
                            <ListItem style={styles.cardListItem}>
                                <Body><Text style={styles.cardNotificationText}>Your Car is Ready Sir</Text></Body>
                                <Right><Text style={styles.cardNotificationText}>14:20</Text></Right>
                            </ListItem>
                            <ListItem style={styles.cardListItem}>
                                <Body><Text style={styles.cardNotificationText}>Your Car is Ready Sir</Text></Body>
                                <Right><Text style={styles.cardNotificationText}>14:20</Text></Right>
                            </ListItem>
                            <ListItem style={styles.cardListItem}>
                                <Body><Text style={styles.cardNotificationText}>Your Car is Ready Sir</Text></Body>
                                <Right><Text style={styles.cardNotificationText}>14:20</Text></Right>
                            </ListItem>
                            <ListItem style={styles.cardListItem}>
                                <Body><Text style={styles.cardNotificationText}>Your Car is Ready Sir</Text></Body>
                                <Right><Text style={styles.cardNotificationText}>14:20</Text></Right>
                            </ListItem>
                        </List>
                    </Content>
                </CardItem>
            </Card>
        );
    }
}
