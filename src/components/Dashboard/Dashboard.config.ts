export const DASHBOARD_CONFIG = {
    heading: "Dashboard",
    title: "Naruto Shippuden IMDb ratings",
    subtitle: "IMDb ratings along with number of IMDb votes and Japanese episode air date",
    csvName: "Naruto.csv",
    fileSize: "7.14 kB"
}

export const TABLE_CONFIG = [
    { title: "Episode Number Overall", filterElement: "search", key: "episodeNumberOverall" },
    { title: "Season", filterElement: "search", key: "season" },
    { title: "Episode Number In Season", filterElement: "search", key: "episodeNumberInSeason" },
    { title: "Title", filterElement: "search", key: "title" },
    { title: "Directed by", filterElement: "search", key: "directedBy", chips: ['Shigeki Kawai', 'Masato Kitagawa', 'Sekito Kanno', 'Fukutarou HattoriKazuya Iwata', 'Kunitoshi Okajima', 'Michisoku Matsuda', 'Masayuki Yamada', 'Masahiro Takada', 'Masaaki KumagaiChikara SakuraiToshiyuki Tsuru', 'Osamu Kobayashi', 'Mitsutaka Noshitani', 'Tomoya Tanaka', 'Kiyomu Fukuda', 'Taisuke Mamoru', 'Kentarou Fujita', 'Hayato Date', 'Hiroshi Kimura', 'Yasuhiro Minami', 'Yuu Yamashita', 'Shinji Satou', "Ken'ichi Nishida", 'Ayumi Ono', 'Yoshihiro Yanagiya', 'Yasuhiro Akamatsu', 'Yuki Kinoshita', 'Yoshihiko Iwata', 'Akitoshi Yokoyama', 'Toshiaki Kanbara', 'Kazuma Satou', 'Hisashi Ishii', 'Fujiaki Asari', 'Eitaro Ano', 'Shuu Watanabe', 'Yoshihiro SugaiHiroshi Kataoka', "Ken'ichi NishidaHayato Date", 'Hidetoshi Takahashi', 'Kazuya Iwata', 'Mitsuto Yamaji', 'Ayataka Tanemura', 'Taiji Kawanishi', 'Masahito Otani', 'Fumiaki Usui', 'Fujii Toshiro', 'Chiaki Kon', 'Atsushi Nigorikawa', 'Yuki Sugihara', 'Hiroyuki Yamashita', 'Shingo Okano', 'Akira Shimizu', 'Daisuke Kurose', 'Shinnosuke Imagawa', 'Daisuke Tsukushi', 'Hiroshi KataokaYoshihiro Sugai', 'Shigeharu Takahashi', 'Atsushi Wakabayashi', 'Toshiyuki Tsuru', 'Ayataka TanemuraKazuya Iwata', 'Yuusuke Onoda', 'Hiroyuki Tsuchiya', 'Kazunori Mizuno', 'Fukutarou Hattori', 'Osamu Sekita', 'Chikara Sakurai', 'Jun Nakagawa', 'Sumito Sasaki', 'Masaki Takano', 'Chikao Tominaga', 'Neko Okuma', 'Eiko Nishi', 'Takahiro Okao', 'Hideyuki Yoshida', 'Hideaki Uehara', 'Hiroaki Nishimura', 'Masayuki Matsumoto', 'Masaki Takuno', 'Masayuki Kouda', 'Naoki Hishikawa', 'Yuki Arie', 'Toshihiro Maeya', 'Hideki Takayama', 'Yoshinori Odaka', 'Toshinori Watanabe', 'Norihiko Nagahama', 'Kiyoshi Murayama', "Jun'ichi Fujise", 'Yoshinobu Tokumoto', 'Katsumi Ono', 'Takuma Suzuki', 'Yoshihide Ibata', 'Takahiro Ono', 'Hiroshi Yamazaki', 'Gorou Sessha', 'Naoki Horiuchi', 'Shigeru Mita', 'Noriyuki Abe', 'Tsuneo Tominaga', 'Takeyuki Yanase', 'Shigeru Ishii', 'Yoshihiro Sugai', 'Masahiko Murata', 'Naomi Nakayama', 'Shougo Arai', 'Mitsutoshi Satou', 'Kanryou Kishikawa', 'Yasumi Mikamoto', 'Masaaki Kumagai', 'Tomokazu Iwasaki', 'Tokuji Kaneko', 'Hayato Goda', 'Chiyuki Tanaka', 'Yutaka Kagawa', 'Maki Odaira', 'Minoru Yamaoka'] },
    { title: "Written by", filterElement: "search", key: "writtenBy", chips: ['Yasuyuki Suzuki', 'Masanao Akahoshi', 'Shin YoshidaYasuyuki Suzuki', 'Junki TakegamiYuka Miyata', 'Masahiro Hikokubo', 'Junki TakegamiShin Yoshida', 'Shuto TanakaYuka Miyata', 'Masaya Honda', 'Osamu Kobayashi', 'Hideto Tanaka', 'Satoru Nishizono', 'Shuto Tanaka', 'Shin Yoshida', 'Yuka Miyata', 'Yuka MiyataJunki Takegami', 'Yasuyuki SuzukiMasahiro Hikokubo', 'Katsuhiko Chiba', 'Yasuaki Kurozu', 'Yasuyuki SuzukiShin Yoshida', 'Shin YoshidaJunki Takegami', 'Junki TakegamiYasuyuki Suzuki', 'Shin YoshidaYuka Miyata', 'Junki TakegamiYasuyuki SuzukiYuka Miyata', 'Kento Shimoyama', 'Daisuke Watanabe', 'Toshiyuki Tsuru', 'Junki Takegami', 'Junki TakegamiDaisuke Watanabe', 'Katsuhiko ChibaYuka Miyata'] },
    { title: "Original Air Date", filterElement: "search", key: "originalAirDate" },
    { title: "English Air Date", filterElement: "search", key: "englishAirDate" },
    { title: "Rating", filterElement: "search", key: "rating" },
    { title: "Votes", filterElement: "search", key: "votes" },
    { title: "Description", filterElement: "search", key: "description" },
    { title: "Type", filterElement: "chips", key: "type", chips: ['Manga Canon', 'Mixed Canon/Filler', 'Filler'] },
]
