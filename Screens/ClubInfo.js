import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { getPlayers } from "../redux/actions";
import { useDispatch } from "react-redux";

const SPACING = 20;
const AVATAR_SIZE = 70;

const ClubInfo = ({ route, navigation }) => {
  const { clubs } = route.params;
  const { players } = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    //RECUPERATION DES JOUEURS 1X
    dispatch(getPlayers());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* NAVBAR */}
      <View
        style={{ flexDirection: "row" }}
        onPress={() => navigation.goBack()}
      >
        <TouchableOpacity
          style={styles.backbutton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={{
              uri: "https://d29fhpw069ctt2.cloudfront.net/icon/image/39092/preview.png",
            }}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* PREMIER CONTAINER */}
      <View style={{ alignItems: "center" }}>
        <View>
          <Image
            resizeMode="cover"
            style={{
              backgroundColor: clubs.imageclub,
              borderRadius: 30,
              marginTop: 30,
              width: 140,
              height: 140,
            }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 15,
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>{clubs.club}</Text>
        </View>
        <View style={styles.clubdetails}>
          <Text style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Championnat actuel : </Text>
            Ligue 1 {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Nom complet : </Text>{" "}
            {clubs.club} {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Création : </Text>{" "}
            {clubs.creationdate}
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 20,
          backgroundColor: "#F8F8F8",
        }}
      >
        Joueurs actuels ⚽️
      </Text>
      {/* DEUXIEME CONTAINER */}
      <FlatList
        data={players}
        style={{
          backgroundColor: "#F8F8F8",
        }}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                // ENVOIE DES DONNÉES A LA PAGE PROFIL
                navigation.navigate("Profil", {
                  clubs: clubs,
                  players: item,
                });
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  padding: SPACING,
                  borderRadius: 12,
                }}
              >
                <Image
                  style={styles.playerimage}
                  source={{ uri: item.playerimage }}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "700" }}>
                    {item.playername}
                  </Text>
                  <Text style={{ fontSize: 14, opacity: 0.8 }}>
                    №{item.numberplayer} 👕
                  </Text>
                  <Text style={{ fontSize: 10, opacity: 0.8 }}>
                    Nombre de but cette saison : {item.goal}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

//STYLES CLUBINFO
const styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 50,
  },
  backbutton: {
    width: 50,
    paddingLeft: 10,
    justifyContent: "center",
  },
  clubdetails: {
    marginTop: 20,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "90%",
  },
  playerimage: {
    width: 35,
    height: 35,
    borderRadius: AVATAR_SIZE,
    marginRight: SPACING / 2,
  },
});

export default ClubInfo;
