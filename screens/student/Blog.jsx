import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../../components/Header";

const Blog = ({navigation}) => {
  const DATA = [
    {
      id: "1",
      title:"Deneyler",
      blogName: "Sağlıklı Yaşamın Sırları",
      blog: "Sağlıklı yaşam, bedenimizi ve zihnimizi dengede tutmak için gereken adımları atmaktır. Bu, düzenli egzersiz yapmak, dengeli beslenmek, yeterli uyku almak, stresten uzak durmak ve olumlu ilişkiler kurmak gibi çeşitli unsurları içerir. Fiziksel aktivite, kalp sağlığını korur, kas kütlesini artırır ve stresi azaltır. Dengeli beslenme, vücudun ihtiyaç duyduğu besin maddelerini sağlar ve hastalıklara karşı direnci artırır. Yeterli uyku, vücudun iyileşmesini ve yenilenmesini sağlar, zihinsel netliği artırır. Stresten uzak durmak ve olumlu ilişkiler kurmak, ruh sağlığını korur ve genel refahı artırır.Sağlıklı yaşam tarzı benimsemek, hastalıklardan korunmanın yanı sıra yaşam kalitesini artırır ve yaşlanma sürecini yavaşlatır. Ayrıca, enerji seviyelerini artırır, özgüveni güçlendirir ve mental sağlığı destekler. Sağlıklı yaşam, sadece bedeni değil, aynı zamanda ruhu da besler. Bu nedenle, kendimize sağlık ve mutluluğu sağlayacak yaşam tarzı seçimleri yapmak önemlidir. Her birimiz, küçük adımlarla sağlıklı yaşamı benimseyebilir ve hayatımızı daha tatmin edici ve dengeli hale getirebiliriz.Dengeli beslenme, vücudun ihtiyaç duyduğu besin maddelerini sağlar ve hastalıklara karşı direnci artırır. Yeterli uyku, vücudun iyileşmesini ve yenilenmesini sağlar, zihinsel netliği artırır. Stresten uzak durmak ve olumlu ilişkiler kurmak, ruh sağlığını korur ve genel refahı artırır.Sağlıklı yaşam tarzı benimsemek, hastalıklardan korunmanın yanı sıra yaşam kalitesini artırır ve yaşlanma sürecini yavaşlatır. Ayrıca, enerji seviyelerini artırır, özgüveni güçlendirir ve mental sağlığı destekler. Sağlıklı yaşam, sadece bedeni değil, aynı zamanda ruhu da besler. Bu nedenle, kendimize sağlık ve mutluluğu sağlayacak yaşam tarzı seçimleri yapmak önemlidir. Her birimiz, küçük adımlarla sağlıklı yaşamı benimseyebilir ve hayatımızı daha tatmin edici ve dengeli hale getirebiliriz.",
      img:"https://cdnstorage.sendbig.com/unreal/female.webp",
      uri:"https://images.pexels.com/photos/8980974/pexels-photo-8980974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
      id: "2",
      title:"Makaleler",
      blogName: "İyi Bir Uyku İçin 10 Öneri",
      blog: "Düzenli Bir Uyku Programı Belirleyin: Her gece aynı saatte yatağa gitmek ve aynı saatte uyanmak, biyolojik saatimizi düzenler ve uyku kalitesini artırır.Uyku Ortamını Rahat ve Koyu Tutun: Koyu ve sessiz bir ortam, uyku için en idealidir. Perdeleri çekin, gürültüyü azaltın ve rahat bir yatakta uyuyun.Yatmadan Önce Rahatlama Ritüelleri Uygulayın: Sıcak bir duş almak, kitap okumak veya hafif bir yoga yapmak gibi rahatlama aktiviteleri, stres seviyelerini düşürür ve uyku kalitesini artırır.Akşam Yemeği Saatine Dikkat Edin: Ağır yemekler ve kafein içeren içecekler gece uykusunu olumsuz etkileyebilir. Akşam yemeği yedikten sonra birkaç saat geçirin ve hafif bir atıştırmalık alın.Düzenli Egzersiz Yapın: Düzenli egzersiz, vücudu yorgun düşürür ve uyumayı kolaylaştırır. Ancak, yatmadan hemen önce ağır egzersiz yapmaktan kaçının.Teknolojik Cihazları Uykudan Önce Kapatın: Televizyon izlemek veya cep telefonuyla oynamak, uyku düzenini bozabilir. Ekranlardan yayılan mavi ışık, uyku hormonu melatonin üretimini engelleyebilir.Stresten Uzak Durun: Stres ve endişe, uykusuzluğun ana nedenlerinden biridir. Rahatlama tekniklerini uygulayın ve zihni sakinleştiren aktivitelere yönelin.Doğal Işığı Değerlendirin: Gün boyunca doğal ışığa maruz kalmak, biyolojik saatimizi düzenler ve gece uykusu kalitesini artırır. Mümkünse, gün içinde dışarıda zaman geçirin.Uyku Pozisyonunuza Dikkat Edin: Sırt üstü yatmak, en iyi uyku pozisyonlarından biridir çünkü omurga ve boyun için daha az baskı uygular. Ancak, herkesin farklı tercihleri vardır.Alkol ve Sigaradan Kaçının: Alkol ve sigara, uyku kalitesini olumsuz etkileyebilir. Mümkünse, yatmadan önce bu maddeleri tüketmekten kaçının.",
      img:"https://cdnstorage.sendbig.com/unreal/female.webp",
      uri:"https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
      id: "3",
      title:"Bloglar",
      blogName: "Sağlıklı Beslenme",
      blog: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section.",
      img:"https://cdnstorage.sendbig.com/unreal/female.webp",
      uri:"https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
      id: "4",
      title:"Gezegenler",
      blogName: "Yeni Teknolojiler",
      blog: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section.",
      img:"https://cdnstorage.sendbig.com/unreal/female.webp",
      uri:"https://images.pexels.com/photos/3912992/pexels-photo-3912992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },


  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity
      className=" w-44  h-44 relative m-2 justify-center items-center shadow-sm shadow-griAcik rounded-md bg-beyaz "
      activeOpacity={0.8}
      onPress={() => navigation.navigate("BlogRead", { item })}
    >
      {/* image */}
      <Image
        source={{ uri: item.uri }}
        className="rounded-md w-44 h-44 absolute "
        fill="cover"
      />
      <View className="rounded-md bg-gri/60  w-44 h-44 absolute " />
      <Text className="text-center font-nunitoExtraBold text-xl text-beyaz px-1">
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-[0.95]">
      <Header />
      <Text className="text-2xl font-nunitoExtraBold px-3 mt-3">
              Kategoriler
            </Text>
          <View className=" items-center">
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              numColumns={2}
            />
          </View>
    </View>
  );
};

export default Blog;
