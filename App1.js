import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView, 
  Image,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native';
import Carousel , { getInputRangeFromIndexes }from 'react-native-snap-carousel';
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


 const scrollInterpolator = (index, carouselProps) => {
    const range = [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
}

const animatedStyles= (index, animatedValue, carouselProps) => {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

    return {
        zIndex: carouselProps.data.length - index,
        opacity: animatedValue.interpolate({
            inputRange: [2, 3],
            outputRange: [1, 0]
        }),
        transform: [{
            rotate: animatedValue.interpolate({
                inputRange: [-1, 0, 1, 2, 3],
                outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
                extrapolate: 'clamp'
            })
        }, {
            [translateProp]: animatedValue.interpolate({
                inputRange: [-1, 0, 1, 2, 3],
                outputRange: [
                    -sizeRef * 0.5,
                    0,
                    -sizeRef, // centered
                    -sizeRef * 2, // centered
                    -sizeRef * 3 // centered
                ],
                extrapolate: 'clamp'
            })
        }]
    };
}


  
  return (
    <View style={styles.mainContainer}>
       
        
      <View style={styles.container}>
        {/* <View style={styles.containerTitulo}> 
          <Text style={styles.titulo}>PUBLICACIONES GENERALES</Text>
        </View> */}
      <ScrollView>

          <View >
              
              <View style={styles.cardContainer}>
                <View>
                  <View style={styles.viewContent} >
                    <Text style={styles.titulo}>Carousel - 1</Text>
                  </View>
                  {/* Carousel 1 */}
                      <View style={{ flexDirection:'row', justifyContent: 'center',textAlign:"center" }}>

                        <Carousel
                          layout={"default"}
                          /* ref={ref => this.carousel = ref} */
                          data={data.carouselItems}
                          
                          sliderWidth={Dimensions.get("screen").width}
                          itemWidth={300}
                          renderItem={renderItem}
                          />
                      </View>
                </View>
              </View>
          
          </View>

          <View >
              
              <View style={styles.cardContainer}>
                <View>
                  <View style={styles.viewContent} >
                    <Text style={styles.titulo}>Carousel - 2</Text>
                  </View>
                  {/* Carousel 1 */}
                      <View style={{ flexDirection:'row', justifyContent: 'center',textAlign:"center" }}>

                        <Carousel
                          layout={'stack'}
                          /* ref={ref => this.carousel = ref} */
                          data={data.carouselItems}
                          
                          sliderWidth={Dimensions.get("screen").width}
                          itemWidth={300}
                          renderItem={renderItem}
                          />
                      </View>
                </View>
              </View>
          
          </View>

          <View >
              
              <View style={styles.cardContainer}>
                <View>
                  <View style={styles.viewContent} >
                    <Text style={styles.titulo}>Carousel - 3</Text>
                  </View>
                  {/* Carousel 1 */}
                      <View style={{ flexDirection:'row', justifyContent: 'center',textAlign:"center" }}>

                        <Carousel
                          layout={'tinder'}
                          
                          /* ref={ref => this.carousel = ref} */
                          data={data.carouselItems}
                          
                          sliderWidth={Dimensions.get("screen").width}
                          itemWidth={300}
                          renderItem={renderItem}
                          onSnapToItem={(index) => ({ activeSlide: index }) }
                          />
                          
                      </View>
                </View>
              </View>
          
          </View>

          <View >
              
              <View style={styles.cardContainer}>
                <View>
                  <View style={styles.viewContent} >
                    <Text style={styles.titulo}>Carousel - 4</Text>
                  </View>
                  {/* Carousel 1 */}
                      <View >

                        <Carousel
                          /* ref={ref => this.carousel = ref} */
                          data={data.carouselItems}
                          sliderWidth={Dimensions.get("screen").width}
                          itemWidth={300}
                          renderItem={renderItem}
                          onSnapToItem={(index) => ({ activeSlide: index }) }
                          scrollInterpolator={scrollInterpolator}
                          slideInterpolatedStyle={animatedStyles}
                          useScrollView={true}
                          />
                          
                      </View>
                </View>
              </View>
          
          </View>

        </ScrollView>
      <StatusBar style="auto" />
    </View>
    
    </View>
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

/* const styles = StyleSheet.create({
 
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
}); */

const styles = StyleSheet.create({
 
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
    paddingTop: 50
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    color:'#121310',
    backgroundColor:'#fff',
    
    padding: 20,
    width: "100%",
    height: 700,
  },
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
    
  },
 

});
