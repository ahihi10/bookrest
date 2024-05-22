// import { View } from 'react-native'
// import React from 'react'
// import { SliderBox } from 'react-native-image-slider-box'



// const Carousel = () => {
//     const images = [
//         "https://posapp.vn/wp-content/uploads/2022/03/ma1-1024x682.jpg",
//         "https://posapp.vn/wp-content/uploads/2022/03/ma4-1024x683.jpg"
//     ]
//   return (
//     <View>
//       <SliderBox 
//       images={images} 
//       autoPlay 
//       circleLoop 
//       dotColor="#13274F" 
//       inactiveDotColor="#90A4AE" 
//       ImageComponentStyle={{
//         borderRadius:6,
//         width:"94%",
//         marginTop:10
//       }} />
//     </View>
//   )
// }

// export default Carousel


import React from 'react';
import { View, Image } from 'react-native';


const Carousel = () => {
  const images = [
    "https://posapp.vn/wp-content/uploads/2022/03/ma1-1024x682.jpg",
    "https://posapp.vn/wp-content/uploads/2022/03/ma4-1024x683.jpg"
  ];

  return (
    <View>
      {images.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={{ borderRadius:6,width:"94%", marginTop:10 }} />
      ))}
    </View>
  );
};

export default Carousel;

