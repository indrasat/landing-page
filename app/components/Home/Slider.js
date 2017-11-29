import React from 'react';
import ImageSlider from 'react-native-image-slider';

const Slider = ({position, onPositionChanged}) =>{

    return(
        <ImageSlider
            images={[
                require('../../assets/images/iklan-carousell-01.jpg'),
                require('../../assets/images/teh-01.jpg'),
                require('../../assets/images/milk-01.jpg'),
        ]}
            style={{marginHorizontal:10, marginTop:30, borderRadius:15}}
            position={position}
            onPositionChanged={onPositionChanged}
        />
    )

}

export default Slider;