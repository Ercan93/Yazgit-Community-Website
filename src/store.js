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
        ],
        sessionsData: [
            {
                number: "1.Oturum",
                title: "YAPAY ZEKA VE GELECEK",
                speakersData: [{
                    name: "Buğra Ayan",
                    profession: "Bilişim uzmanı-Yazar",
                    headline: "İlhamın Matematiği: Yapay Zeka ile İlhamın Matematiğini Çözebilir Miyiz?",
                    imgSrc: "../src/assets/speakers/bugra_ayan_profile.jpg",
                    address: "https://www.linkedin.com/in/bugraayan"
                },
                {
                    name: "Batuhan Bardak",
                    profession: "STM-Yapay Zeka Uzmanı",
                    headline: "Yapay Zeka ve Gelecek Öngörüleri",
                    imgSrc: "../src/assets/speakers/batuhan_bardak_profile2.jpg",
                    address: "https://tr.linkedin.com/in/batuhanbardak"
                },
                {
                    name: "Dr.Berker Loğoğlu",
                    profession: "Kuartis-Makine Öğrenmesi Grup Yöneticisi",
                    headline: "Otonom Araçlarda Yapay Zeka",
                    imgSrc: "../src/assets/speakers/berker_logoglu.jpg",
                    address: "https://www.linkedin.com/in/berkerlogoglu"
                }]
            },
            {
                number: "2.Oturum",
                title: "YAPAY ZEKA VE SAĞLIK",
                speakersData: [{
                    name: "Doç.Dr. Murat Ceylan",
                    profession: "Yazgit-Akademik Danışman",
                    headline: "Açılış Konuşması",
                    imgSrc: "../src/assets/speakers/murat_ceylan.jpg",
                    address: "http://ktun.edu.tr/PersonelBilgi/Index/MjgyMTAwNjAwMTA="
                },
                {
                    name: "Prof.Dr. Melih Bulut",
                    profession: "Sağlıkta İşbirliği Platformu-Kurucu",
                    headline: "Yapay Zeka Tıbbı Dönüştürebilir Mi?",
                    imgSrc: "../src/assets/speakers/melih_bulut.jpg",
                    address: "https://tr.linkedin.com/in/melih-bulut-b882a3157"
                },
                {
                    name: "Selin Arslanhan",
                    profession: "ReDis Innovation-Kurucu",
                    headline: "Yapay Zeka ve Biyogirişimcilikte Küresel Eğilimler",
                    imgSrc: "../src/assets/speakers/selin_arslanhan.jpg",
                    address: "https://twitter.com/selinarslanhan"
                },
                {
                    name: "Elçin Tuncer",
                    profession: "PortalGrup Healthcare-Kurucu",
                    headline: "Yapay Zeka ve Yeni Dünya",
                    imgSrc: "../src/assets/speakers/elcin_profile.jpg",
                    address: "https://www.linkedin.com/in/elcintuncer"
                }]
            }],
        conferenceSessionsFlow: [{
            title: "1. Oturum Yapay Zeka ve Gelecek",
            sessions: ["8:30 - 9:30 Kayıt", "9:30 - 10:15 Açılış Konuşmaları", "10:15 - 11:00 Buğra Ayan -İlhamın Matematiği, Yapay Zeka ile İlhamın Matematiğini Çözebilir Miyiz ?", "11:00 - 11:15 Kahve arası", "11:15 - 12:00 Batuhan Bardak - Yapay Zeka ve Gelecek Öngörüleri", "12:00 - 12:45 Dr. Berker Loğoğlu - Otonom Araçlarda Yapay Zeka", "12:45 - 14:00 Öğle Arası"]
        },
        {
            title: "2.Oturum: Yapay Zeka ve Sağlık",
            sessions: ["14:00 - 14:15 Doç.Dr. Murat Ceylan - Açılış Konuşması", "14:15 - 15:00 Prof.Dr. Melih Bulut - Yapay Zeka Tıbbı Dönüştürebilir Mi?", "15:00 - 15:15 Kahve Arası", "15:15 - 16:00 Selin Arslanhan - Yapay Zeka ve Biyogirişimcilikte Küresel Eğilimler", "16:00 - 16:45 Elçin Tunçer", "16:45 - 17:00 Kapanış"]
        }],
        socialMediaAcc: [{
            title: "Twitter",
            href: "https://twitter.com/yaz_git",
            AccName: "Yaz_git"
        },
        {
            title: "Instagram",
            href: "https://www.instagram.com/yaz_git/",
            AccName: "Yaz_git"
        },
        {
            title: "Mail",
            href: "",
            AccName: "yazgit2018@gmail.com"
        }]
    },
    getters: {
        aboutDataGetters(state) {
            return state.aboutData;
        },
        activitiesGetters(state) {
            return state.activities
        },
        socialMediaAccGetters(state) {
            return state.socialMediaAcc
        }
    },
    mutations: {},
    actions: {}
})

export default store