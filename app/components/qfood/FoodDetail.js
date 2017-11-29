import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {H1} from 'native-base';

export default class FoodDetail extends Component {

    render(){

        return(
            <View style={{flex:1, alignItems: 'center', paddingHorizontal: 30 }}>
                <H1 style={{marginVertical: 20}}>TEA</H1>
                <View>
                    <Text style={{fontSize: 18}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor neque, elementum sed scelerisque at, porttitor convallis massa. Praesent leo ligula, aliquam eu sagittis eu, congue quis nulla. Mauris sed nulla at velit dapibus dapibus non id quam. Sed ut nibh ante. Quisque sodales consectetur felis, at sodales lorem tempus consequat. Mauris condimentum nunc id nulla sodales, a eleifend risus convallis. Aliquam justo nibh, varius in ultrices vitae, vulputate vel nunc. Fusce vestibulum quam tempor nunc pulvinar cursus. In id risus in sem aliquet volutpat vitae id ante. Etiam interdum eu ex tristique pellentesque.
                    </Text>
                </View>
            </View>
        );
    }
}