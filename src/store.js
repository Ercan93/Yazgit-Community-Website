import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        aboutData: "Günümüzde her alanda kendini gösteren yapay zekânın geleceği şekillendiren teknoloji olacağı inancıyla çıktığımız yolda Yapay Zekâ ve Görüntü İşleme Topluluğu’muzu değerli danışmanımız Doç. Dr. Murat CEYLAN’ ın destekleri ve yönlendirmeleriyle 7 Mart 2018 tarihinde kurduk. Kurulduğumuz günden itibaren yapay zekâ alanında kendimizi geliştirmek adına Python yazılım dili kursu, yapay sinir ağları kursu, derin öğrenmeye giriş kursu, arduino kursu gibi çalışmaların yanı sıra yapay zekânın uygulama alanlarına ilişkin periyodik sunumlar, seminerler ve kitap okuma tartışma etkinlikleri gerçekleştirdik. Bununla birlikte farklı şehirlerde bulunan öğrenci toplulukları ve derneklerin düzenlediği konferanslara üyelerimizle birlikte katılım sağladık. Ulusal düzeyde tanınmakta olan topluluğumuz 'Yapay Zekâ Üreten Türkiye' anlayışıyla çeşitli proje grupları oluşturarak yapay zekanın farklı alanlarındaki uygulamalarını içeren laboratuvar çalışmalarını realize etmektedir.",
        activities: [
            {
                title: "Sunumlar",
                data: ["CPU-GPU-TPU", "Otonom Araçlar", "Tarımda Yapay Zeka", "Siber Güvenlik", "Akıllı Şehirler", "Evrişimsel Sinir Ağları", "Sağlık Alanında Yapay Zeka", "Beynimiz Nasıl Öğrenir?", "Yapay Zeka ve İstatistik", "Yapay Zekanın Ülkeler Üzerine Etkisi"]
            },
            {
                title: "Organizasyonlar",
                data: ["TUSİAD-Bu Gençlikte İş Var! 2020", "1. Yapay Zeka Buluşmaları", "Google Konya DevFest19", "Google Konya Machine Learning Study Jam 20", "Ankara Sinyal ve Görüntü İşleme Konferansı", "Tanışma Toplantıları", "Teknofest 2019", "DeepCon18", "YAZGİG19 - YAZGİG18", "Aksaray Fen Lisesi Kariyer Geliştirme Günleri", "Ankara Sınav Koleji Kariyer Geliştirme Günleri"]
            }, {
                title: "Kurslarımız",
                data: ["Derin Öğrenme", "Arduino", "Yapay Sinir Ağları", "Python Yazılım Dili"]
            }, {
                title: "Sosyal Etkinliklerimiz",
                data: ["Kadınlar Günü", "Kitap Okuma ve Tartışma", "Tanışma Kahvaltısı", "PFutbol Turnuvası"]
            },
        ]
    },
    getters: {
        aboutDataGetters(state) {
            return state.aboutData;
        },
        activitiesGetters(state) {
            return state.activitys
        }
    },
    mutations: {},
    actions: {}
})

export default store