import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Profil = ({ route, navigation }) => {
  const { clubs, players } = route.params;

  React.useEffect(() => {});

  //RETOUR PAGE PRECEDENTE
  const goBack = () => {
    navigation.pop();
  };

  //COMPTEUR ETOILES JOUEUR
  var Stars = [];
  for (let i = 0; i < players.stars; i++) {
    Stars.push(
      <View key={i}>
        <Image
          source={{
            uri: "https://image.flaticon.com/icons/png/512/130/130188.png",
          }}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
          }}
        ></Image>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* NAVBAR */}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: 10,
            justifyContent: "center",
          }}
          onPress={goBack}
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
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 50,
          }}
        >
          <View style={{}}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {clubs.club}
            </Text>
          </View>
        </View>
      </View>

      {/* PREMIER CONTAINER PROFIL */}
      <View style={{ alignItems: "center" }}>
        <View>
          <Image
            source={{
              uri: players.playerimage,
            }}
            resizeMode="cover"
            style={{
              borderRadius: 70,
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
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>
            {clubs.playername}
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            paddingVertical: 15,
            paddingHorizontal: 20,
            width: "90%",
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            <Text style={styles.h1}>Numéro : </Text>
            {players.numberplayer} 👕
            {"\n"}
            {"\n"}
            <Text style={styles.h1}>Naissance : </Text>
            {players.playerage} {"\n"}
            {"\n"}
            <Text style={styles.h1}>Equipe actuelle : </Text>
            {clubs.club}
          </Text>
        </View>
      </View>

      {/* SECOND CONTAINER PROFIL */}
      <Text style={styles.biographytitle}>Biographie ⚽️</Text>
      <View style={styles.biography}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.desc_title}>Nom/prénom : </Text>
          <Text>{players.playername}</Text>
        </View>
        <View style={styles.descr_tab}>
          <Text style={styles.desc_title}>Nationalité : </Text>
          <Text>{players.playercountry}</Text>
        </View>
        <View style={styles.descr_tab}>
          <Text style={styles.desc_title}>Taille (cm) : </Text>
          <Text>1.{players.sizeplayer} cm</Text>
        </View>
        <View
          style={{ paddingTop: 40, flexDirection: "row", flexWrap: "wrap" }}
        >
          <Text style={styles.desc_title}>Poste : </Text>
          <Text>Attaquant</Text>
        </View>
        <View style={styles.descr_tab}>
          <Text style={styles.desc_title}>But cette saison : </Text>
          <Text>{players.goal}</Text>
        </View>
        <View style={styles.descr_tab}>
          <Text style={styles.desc_title}>Parcours senior : </Text>
          <Text>
            {players.playerstartclub} - {clubs.club}
          </Text>
        </View>
        <View style={styles.stars}>{Stars}</View>
      </View>
    </SafeAreaView>
  );
};

/* STYLE SCREEN PROFIL */

const styles = StyleSheet.create({
  h1: {
    fontWeight: "bold",
  },
  navtitle: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  desc_title: {
    fontWeight: "bold",
    flex: 1,
    fontSize: 16,
  },
  desc: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    fontSize: 14,
  },
  stars: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 50,
  },
  descr_tab: {
    paddingTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  biography: {
    paddingLeft: 20,
    paddingRight: 34,
    paddingTop: 20,
    backgroundColor: "#F8F8F8",
    height: "100%",
  },
  biographytitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 16,
    paddingBottom: 10,
    paddingLeft: 20,
    backgroundColor: "#F8F8F8",
  },
});

export default Profil;
