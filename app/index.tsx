import { Card } from "@/components/Card";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import ThemedText from "@/components/ThemedText";
import { getPokemonId } from "@/functions/pokemon";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import { useIsFetching } from "@tanstack/react-query";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Image, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Index() {
  const {data} = useFetchQuery("/pokemon?limit=21")
  const pokemons = data?.results ?? [] 
  const colors = useThemeColors();
  const isFetching = useIsFetching();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor : colors.tint}]}>
      <View style = {styles.header}>
        <Image source = {require("@/assets/images/pokeball.png")} width={24} height={24}/>
        <ThemedText variant="headline" color="grayWhite"> Pokemon</ThemedText>
      </View>
      
        <Card style = {styles.body}>
          <FlatList
           data={pokemons}
           numColumns={3}
           contentContainerStyle = {[styles.gripgap, styles.list]}
           columnWrapperStyle={styles.gripgap}
           ListFooterComponent={
            isFetching ? <ActivityIndicator color={colors.tint}/> : null
           }
           renderItem={({item}) => 
            <PokemonCard id={getPokemonId(item.url)} name={item.name} style={{ flex: 1 / 3 }}> 
            </PokemonCard>} keyExtractor={(item) => item.url}/> 
          
        </Card>
      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
      flex : 1,
      padding : 4 
    },
  header : 
  {
    flexDirection : "row",
    alignItems : "center", 
    gap : 16, 
    padding : 12
  },
  body : {
    flex : 1
  },
  gripgap : {
    gap : 8
  },
  list : {
    padding : 12
  }
});