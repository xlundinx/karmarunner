import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 10
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={item.img}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    width: ITEM_WIDTH,
    paddingBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
    resizeMode: 'contain',
  },
  header: {
    color: "#FFF",
    textAlign: 'center',
    fontSize: 16,
    textTransform:'uppercase',
    paddingLeft: 0,
    paddingTop: 30
  },
  body: {
    color: "#FFF",
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  }
})

export default CarouselCardItem;