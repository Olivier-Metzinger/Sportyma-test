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

import { getClubs } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

// VARIABLES GLOBALES
const SPACING = 20;
const AVATAR_SIZE = 70;

const Clubs = ({ navigation }) => {
  const { clubs } = useSelector((state) => state.dataReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
    //RECUPERATION DES CLUBS 1X
    dispatch(getClubs());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 30, lineHeight: 36, fontWeight: "bold" }}>
            Liste des club(s)
          </Text>
        </View>
        {/* LISTE DES CLUBS */}
        <FlatList
          data={clubs}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{
            padding: 10,
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  // ENVOIE DES DONNÉES A LA PAGE INFO CLUB
                  navigation.navigate("ClubInfo", {
                    clubs: item,
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
                  {/* AVATAR CLUB */}
                  <Image
                    style={{
                      width: AVATAR_SIZE,
                      height: AVATAR_SIZE,
                      borderRadius: AVATAR_SIZE,
                      marginRight: SPACING / 2,
                      backgroundColor: item.imageclub,
                    }}
                  />
                  <View>
                    <Text style={{ fontSize: 22, fontWeight: "700" }}>
                      {item.club}
                    </Text>
                    <Text style={{ fontSize: 18, opacity: 0.8 }}>
                      {item.country}
                    </Text>
                    <Text style={{ fontSize: 14, opacity: 0.8, color: "blue" }}>
                      Joueur(s): {item.playersnumber}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

//STYLES CLUBS
const styles = StyleSheet.create({});

export default Clubs;
