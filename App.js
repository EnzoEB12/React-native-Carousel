import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView, 
  Image,
  StyleSheet,
  Dimensions,

} from 'react-native';
import Carousel from 'react-native-snap-carousel';
//import data from './Pages/data.js';

export default function App() {

  const data = {
    activeIndex:0,
    carouselItems: [
    {
        img: "https://picsum.photos/id/11/200/300"
    },
    {
      img: "https://picsum.photos/id/10/200/300"
    },
    {
      img: "https://picsum.photos/id/12/200/300"
    },
    {
      img: "https://picsum.photos/id/13/200/300"
    },
    {
      img: "https://picsum.photos/id/14/200/300"
    },
  ]
}

  const renderItem = ({item, index}) => {
    return(
      <View>
          <Image source = {{uri:`${item.img}`}}
                style={styles.cardIMG}
          />
      </View>
    )
  }



  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#0a837f', paddingTop: 50, }}>
    <View style={styles.viewContent} >
        <Text style={styles.titulo}>Carousel - Test</Text>
    </View>

    {/* Carousel 1 */}
    <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center',textAlign:"center" }}>

        <Carousel
          layout={"default"}
          /* ref={ref => this.carousel = ref} */
          data={data.carouselItems}
          
          sliderWidth={Dimensions.get("screen").width}
          itemWidth={300}
          renderItem={renderItem}
           />
    </View>

    
  </SafeAreaView>
  );
}


/* 

<Carousel
        data={data}
        renderItem={({item,index})=>{
          return(
            <View>
              <Image 
              source = {{uri:"https://picsum.photos/id/11/200/300"}}
              />
            </View>
          )
        }}
        sliderWidth={Dimensions.get("screen").width}
        itemWidth={500}
      />

*/

const styles = StyleSheet.create({
 
  viewContent:{
    marginBottom:50,
  },
  cardIMG:{
    width: "90%",
    height: "80%",
    borderRadius: 10,
    
  },
  titulo:{
    textAlignVertical: "center",
    textAlign:"center",
    fontSize:50,
    fontWeight: 'bold',
    color:"white"
  }
});


