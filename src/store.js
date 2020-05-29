import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        aboutData:"Günümüzde her alanda kendini gösteren yapay zekânın geleceği şekillendiren teknoloji olacağı inancıyla çıktığımız yolda Yapay Zekâ ve Görüntü İşleme Topluluğu’muzu değerli danışmanımız Doç. Dr. Murat CEYLAN’ ın destekleri ve yönlendirmeleriyle 7 Mart 2018 tarihinde kurduk. Kurulduğumuz günden itibaren yapay zekâ alanında kendimizi geliştirmek adına Python yazılım dili kursu, yapay sinir ağları kursu, derin öğrenmeye giriş kursu, arduino kursu gibi çalışmaların yanı sıra yapay zekânın uygulama alanlarına ilişkin periyodik sunumlar, seminerler ve kitap okuma tartışma etkinlikleri gerçekleştirdik. Bununla birlikte farklı şehirlerde bulunan öğrenci toplulukları ve derneklerin düzenlediği konferanslara üyelerimizle birlikte katılım sağladık. Ulusal düzeyde tanınmakta olan topluluğumuz 'Yapay Zekâ Üreten Türkiye' anlayışıyla çeşitli proje grupları oluşturarak yapay zekanın farklı alanlarındaki uygulamalarını içeren laboratuvar çalışmalarını realize etmektedir.",
    },
    getters: {
        aboutDataGetters(state){
            return state.aboutData;
        }
    },
    mutations: {},
    actions: {}
})

export default store