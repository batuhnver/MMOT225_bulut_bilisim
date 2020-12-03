import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  ImageBackground
} from 'react-native';


import NewsItem from './NewsItem.js';

import Background from './wallpaper.jpg';

const App = () => {
  return (
    <SafeAreaView>
      <ImageBackground source={Background} style={{ resizeMode: 'cover' }}>
        <ScrollView>
          <NewsItem type='Technology' title="Bilgisayar Fiyatları" description="Bilgisayar fiyatları bu ay artış gösterdi." />
          <NewsItem type='Technology' title="Telefon Fiyatları" description="Telefonlar çok ucuzladı." />
          <NewsItem type='Technology' title="Playstation 5 fiyatı" description="Playstation 5 fiyatı 8 bin liradan pahalı olacak." />
          <NewsItem type='Magazine' title="Mahmut sosyal medyayı salladı" description="Mahmut tuncer geçtiğimiz günlerde Instagram'dan yaptığı gönderiler ile gündemi sarstı." />
          <NewsItem type='Magazine' title="Yaşar Alptekin'in eşi hayatını kaybetti" description="Eski oyuncu ve manken Yaşar Alptekin'in eşi Nilgün Altınyay yaşamını yitirdi." />
          <NewsItem type='Magazine' title="Ünlü youtuber Esad evinde basıldı" description="Geçtiğimiz günlerde youtube videosu çekerken Esad evinde basıldı." />
          <NewsItem type='Politics' title="Yeni amerika seçimleri" description="Amerikanın yeni başkanı Joe Biden seçilmiştir." />
          <NewsItem type='Politics' title="Başkan Erdoğan ünlü youtuber Esad'ı ziyaret etti" description="Geçtiğimiz günlerde başkan erdoğan ünlü youtuber esad'ı evinde ziyaret etti." />
          <NewsItem type='Politics' title="Yeni ekonomi durumu" description="Ekonomimiz gayet iyi." />
          <NewsItem type='Sports' title="Derbide nefesler kesildi" description="FB-Beşiktaş derbisi nefes kesti" />
          <NewsItem type='Sports' title="Türkiye Almanya Maçı" description="Türkiye-Almanya maçı 1-1 beraberlik ile bitti." />
          <NewsItem type='Sports' title="FB-GS Derbisi " description="FB-GS Derbisi Heyecanlı geçti." />
          <NewsItem type='Health' title="Coronavirüs Son Dakika" description="Çin virüsü hızla yayılıyor." />
          <NewsItem type='Health' title="Sigara Ömürleri Tüketiyor" description="Doktorlar sigara kullanımını kesinlikle önermiyor." />
          <NewsItem type='Health' title="Kokain kalp krizine yol açtı" description="Kokain kullanan Ünlü Sosyal medya fenomeni BM geçtiğimiz günlerde ufak bir kalp krizi geçirdi.Hayati durumu iyi." />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};



export default App;
