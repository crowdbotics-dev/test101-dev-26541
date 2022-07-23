import React from "react";
import { View, ImageBackground, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
export class Blank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => <ScrollView contentContainerStyle={{
    flexGrow: 1
  }} style={styles.ScrollView_1}>
      <View style={styles.View_2} />
      <View style={styles.View_1_96}>
        <Text style={styles.Text_1_96}>Sign up</Text>
      </View>
      <View style={styles.View_1_97}>
        <Text style={styles.Text_1_97}>I don’t have an account. Login</Text>
      </View>
      <View style={styles.View_1_98}>
        <View style={styles.View_1_99}>
          <View style={styles.View_1_100} />
          <View style={styles.View_1_101}>
            <Text style={styles.Text_1_101}>Log In</Text>
          </View>
        </View>
        <View style={styles.View_1_102}>
          <View style={styles.View_1_103} />
          <View style={styles.View_1_104}>
            <Text style={styles.Text_1_104}>Sign up</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_105}>
        <View style={styles.View_1_106}>
          <Text style={styles.Text_1_106}>Or</Text>
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4612e663-9334-4052-ba09-00e1d987e8a5"
      }} style={styles.ImageBackground_1_107} />
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c04878b-3ef3-43e7-9dab-8bfd43eb7e59"
      }} style={styles.ImageBackground_1_108} />
      </View>
      <View style={styles.View_1_109}>
        <View style={styles.View_1_110}>
          <View style={styles.View_1_111}>
            <View style={styles.View_1_112} />
            <View style={styles.View_1_113} />
            <View style={styles.View_1_114}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b39418af-4426-47ca-b924-2057a3ac9a77"
            }} style={styles.ImageBackground_1_115} />
            </View>
          </View>
        </View>
        <View style={styles.View_1_118}>
          <View style={styles.View_1_119}>
            <View style={styles.View_1_120} />
            <View style={styles.View_1_121} />
            <View style={styles.View_1_122}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0647bf3-9819-423c-8e0f-d4c6a3f84057"
            }} style={styles.ImageBackground_1_123} />
            </View>
          </View>
        </View>
        <View style={styles.View_1_128}>
          <View style={styles.View_1_129}>
            <View style={styles.View_1_130} />
            <View style={styles.View_1_131} />
          </View>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27005c7a-a4f1-4a72-b488-380548884b26"
        }} style={styles.ImageBackground_1_132} />
        </View>
      </View>
      <View style={styles.View_1_134}>
        <View style={styles.View_I1_134_34_107}>
          <Text style={styles.Text_I1_134_34_107}>Email address</Text>
        </View>
        <View style={styles.View_I1_134_34_108}>
          <Text style={styles.Text_I1_134_34_108}>Email</Text>
        </View>
        <View style={styles.View_I1_134_34_109} />
        <View style={styles.View_I1_134_34_110}>
          <Text style={styles.Text_I1_134_34_110}>|Value enter|</Text>
        </View>
      </View>
      <View style={styles.View_1_135}>
        <View style={styles.View_I1_135_34_164}>
          <Text style={styles.Text_I1_135_34_164}>Password</Text>
        </View>
        <View style={styles.View_I1_135_34_165}>
          <Text style={styles.Text_I1_135_34_165}>Enter</Text>
        </View>
        <View style={styles.View_I1_135_34_166} />
        <View style={styles.View_I1_135_34_167}>
          <Text style={styles.Text_I1_135_34_167}>|En enter|</Text>
        </View>
      </View>
      <View style={styles.View_1_136}>
        <View style={styles.View_I1_136_34_314}>
          <Text style={styles.Text_I1_136_34_314}>Confirm password</Text>
        </View>
        <View style={styles.View_I1_136_34_315}>
          <Text style={styles.Text_I1_136_34_315}>Enter</Text>
        </View>
        <View style={styles.View_I1_136_34_316} />
        <View style={styles.View_I1_136_34_317}>
          <Text style={styles.Text_I1_136_34_317}>|En enter|</Text>
        </View>
      </View>
      <View style={styles.View_1_137}>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e4e4160-364e-4950-8c3a-f042f931940d"
      }} style={styles.ImageBackground_1_138} />
      </View>
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2: {
    height: hp("122%")
  },
  View_1_96: {
    width: wp("35%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "flex-start"
  },
  Text_1_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_97: {
    width: wp("62%"),
    top: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_1_97: {
    color: "rgba(109, 116, 119, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_98: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_99: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_100: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_101: {
    width: wp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "flex-start"
  },
  Text_1_101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_102: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_103: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_104: {
    width: wp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_1_104: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_105: {
    width: wp("74%"),
    height: hp("3%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_1_106: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "flex-start"
  },
  Text_1_106: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_107: {
    width: wp("28%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_108: {
    width: wp("28%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_1_109: {
    width: wp("63%"),
    height: hp("8%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_110: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_111: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_112: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_1_113: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_114: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_115: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_118: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%")
  },
  View_1_119: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_120: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_1_121: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_122: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_123: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_128: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  View_1_129: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_130: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_1_131: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1_132: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_134: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_134_34_107: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_134_34_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_134_34_108: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I1_134_34_108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_134_34_109: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.5
  },
  View_I1_134_34_110: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1_134_34_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_135: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_135_34_164: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_135_34_164: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_135_34_165: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I1_135_34_165: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_135_34_166: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.5
  },
  View_I1_135_34_167: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I1_135_34_167: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_136: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_136_34_314: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_136_34_314: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_136_34_315: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I1_136_34_315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_136_34_316: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 0.5
  },
  View_I1_136_34_317: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I1_136_34_317: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_137: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_138: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);