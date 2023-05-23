$(document).ready(function (e) {
    function t(e, t = !1, a = "") {
        var n = "",
            o = "",
            i = "";
        return (
            "manager" === e && (n = '<img class="chat-content-desc-image" src="img/avtrudy.png" alt="" />'),
            t && ((o = "text-" + t), (i = ' class="p' + t + '"')),
            '<div class="chat-content-item ' + e + " " + o + '"><div class="chat-content-desc">' + n + '<div class="chat-content-desc-item ' + e + '"><p' + i + ">" + a + "</p></div></div></div>"
        );
    }

    function a(a) {
        $(".chat-content-buttons-gender").remove(),
            $(".chat-content-list").append(t("user")),
            $(".chat-content-item.user p").html(e.managerDialog[1][a].text),
            $(".chat-content-list").append(t("manager")),
            $(".chat-content-item.manager p").typed({
                strings: [e.managerDialog[2].text],
                showCursor: !1,

                callback: function () {
                    setTimeout(function () {
                        //

                        //
                        var n, o, r;
                        $(".chat-content-list").append(
                            '<form name="questionForm" class="form"><div class="form-group"><div class="form-group-inline">' +
                            '<select name="day" class="custom-select select-day">' +
                            '<option value="" selected="selected">Day</option>' +
                            (function () {
                                for (i = e.DateBirthday[0].day[0]; i < e.DateBirthday[0].day[1] + 1; i++) n += '<option value="' + i + '">' + i + "</option>";
                                return n;
                            })() +
                            '</select>' +
                            '</div>' +
                            '<div class="form-group-inline full-month">' +
                            '<select name="month" class="custom-select select-month">' +
                            '<option value="" selected="selected">Month</option>' +
                            ($.each(e.DateBirthday[0].month, function (e, t) {
                                o += '<option value="' + (e + 1) + '">' + t + "</option>";
                            }),
                                o) +
                            '</select>' +
                            '</div>' +
                            '<div class="form-group-inline year">' +
                            '<select name="year" class="custom-select select-year">' +
                            '<option value="" selected="selected">Year</option>' +
                            (function () {
                                for (i = e.DateBirthday[0].year[0]; i < e.DateBirthday[0].year[1] + 1; i++) r += '<option value="' + i + '">' + i + "</option>";
                                return r;
                            })() +
                            "</select>" +
                            "</div>" +
                            "</div>" +
                            "</form>"
                        ),
                            e.Scroll();
                        var c,
                            s = [],
                            d = $('form[name="questionForm"]');
                        d.find("select").addClass("empty_field"),
                            d.find("select").change(function () {
                                if (
                                    (d.find("select").each(function () {
                                        "" != $(this).val() ? $(this).removeClass("empty_field") : $(this).addClass("empty_field"), (s[this.name] = $(this).val());
                                    }),
                                    0 == d.find(".empty_field").size())
                                ) {
                                    d.remove();
                                    var n = e.MonthVariantType[s.month - 1],
                                        o = e.MonthVariant[n][0],
                                        i = e.MonthVariant[n][1],
                                        r = e.MonthVariant[n][2];
                                    (c = [s.day, s.month]),
                                        (c = e.getZodiak(c)),
                                        (s.day = s.day.length > 1 ? s.day : "0" + s.day),
                                        (s.month = s.month.length > 1 ? s.month : "0" + s.month),
                                        $(".chat-content-list").append(t("user", "date")),
                                        $(".chat-content-item.user.text-date p").html(s.day + "." + s.month + "." + s.year);
                                    var l = [],
                                        m = [],
                                        p = {
                                            zodie: e.ZodiakName[c - 1].name,
                                            date: s.day,
                                            month1: o,
                                            month2: i,
                                            month3: r,
                                            year: s.year,
                                            number: e.randomIntFromInterval(4, 10)
                                        };
                                    $(".chat-content-list").append(t("manager", "birthday"));
                                    var u = e.userZodiak[0].text,
                                        h = e.Replace(u, p);
                                    $(".chat-content-item.manager p").typed({
                                        strings: [h],
                                        showCursor: !1,
                                        callback: function () {
                                            var t = [{text: e.Replace(e.socNumber[0].text, p)}];
                                            (l = $.merge(e.managerVariants[a][0][0], t)),
                                                (l = $.merge(l, e.managerVariants[a][0][1])),
                                                $.each(l, function (t, a) {
                                                    m.push(e.Replace(a.text, p));
                                                }),
                                                e.LoadListMessages(m, p.zodie);
                                        },
                                    });
                                }
                            });
                    }, 1e3);
                },
            });
    }

    var n = document.querySelector(".country_action").innerHTML,
        o = document.querySelector(".new_price_val").innerHTML,
        r = document.querySelector(".new_price_cur").innerHTML;
        console.log(o),
        console.log(r),
        (e.randomIntFromInterval = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e);
        }),
        (e.managerDialog = [
            {
                text: "Hi!<br>Ako si Apple Paguio.  Ang isang tao na nanonood ng mga paggalaw ng konstelasyon ay nakakaapekto sa zodiac sign - Isang astrologo. Sa darating na buwan, tayong mga Pilipino ay magkakaroon ng malaking kaguluhan. Tatlong zodiac sign ang makakatanggap ng pag-ulan ng pera, at dalawa ang haharap sa kahirapan. Sagutin ang dalawang tanong para makakuha ng libreng horoscope.<br>",
            },
            {
                text: "Handa ka na bang makita ang horoscope?",
                m: {text: "Horoscope kasama si Apple Paguio"}, w: {text: "Hindi pa handa"}
            },
            {
                text: "Kailan ka ipinanganak?"
            },
        ]),
        (e.userZodiak = [
            {
                text: "Salamat Sa pamamagitan ng horoscope ikaw ay - <p style='color: #3fc726'>{zodie}</p>. <p class='hidden-zodie' style='display: none'>{zodie}</p>"
            }
        ]),
        (e.managerVariants = {
            w: [
                [
                    [
                        {text: "Sign - <p style='color: #3fc726'>{zodie}</p>, magkakaroon ng positibong pagbabago sa pananalapi sa pinakamalapit na hinaharap. Gayunpaman, ang iyong kasalukuyang kapalaran sa pananalapi ay nasa pinakamababa. Marami kang ipinagkait sa iyong sarili, pinahihirapan ka ng mga utang. Desidido kang isulong ang pera at magandang kapalaran sa iyong buhay."},
                        {text: "Hindi ka makakaalis sa kasalukuyang miserableng buhay, hindi ka makakahanap ng paraan para baguhin ito. Kaya't sa ngayon kailangan ang isang rebolusyong pinansyal para baguhin ang tadhana."},
                        {text: "Kung gusto mong makaahon sa kahirapan at mabago ang iyong buhay sa 2023. Pakinggan mong mabuti ang aking sasabihin sa iyo ngayon."},
                        {text: "Nakikita ko ang mga positibong paggalaw sa iyong konstelasyon sa darating na buwan. Iyon na ang tamang panahon para baguhin ang iyong kapalaran, alisin ang malas para yumaman habang buhay."},
                        {text: "Isa (1) ang masuwerteng numero ng pampa mo. Nangangahulugan ito na sa Hunyo 1, 2023, ang iyong buhay ay maaaring magbago nang malaki para sa isang mas magandang pamumuhay."},
                        {text: "Kaya paano maging masuwerte sa 2023? Patuloy na makinig sa iyong horoscope."},
                        {text: "Ito na ang pagkakataon mo para baguhin ang iyong kapalaran sa 2023. Ngunit kung makaligtaan mo ito, maaari ka pa ring manatili sa iyong kasalukuyang miserableng buhay. Kaya maging honest muna tayo!"},
                        {text: "Tutulungan ka ng horoscope 2023 ngayong taon na makaakit ng pera at suwerte. Kung sumasang-ayon ka, makakalimutan mo kung ano ang mga problema mo sa natitirang bahagi ng iyong buhay. Ilalabas ko ang iyong magandang kapalaran mula sa pagkabihag."},
                        {text: "Gagawa ako ng isang espesyal na anting-anting mula sa iyong pangalan, zodiac sign. Naglalaman ito ng mahiwagang kapangyarihan na nagdudulot ng suwerte, na nag-aalis ng malas para sa may-ari nito."},
                        {text: "Ito ang aking ilustrasyon ng Týcheros Amulet"},
                        {text: "<br><img width='400px' src='img/sep.jpeg'></br>"},
                        {text: "Binabago ng anting-anting na ito ang iyong buhay sa maikling panahon. Magiging masuwerte ka, makakaakit ng maraming pera, darating ang mga pagkakataong makapagbabago ng buhay na hindi mo inaasahan. At nakakatulong din ito sa iyo na alisin ang mga kabiguan, mga negatibong kaisipan na nakakaapekto sa iyong buhay. Sa lalong madaling panahon ay makaramdam ka ng mayaman at masaya sa natitirang bahagi ng iyong buhay."},
                        {text: "Noon pa man ay sinisikap kong tulungan ang ating mamamayang Pilipino at hindi ko sinasadyang kumita rito. Upang matuto nang higit pa tungkol sa anting-anting at kung paano ito gumagana, pumunta sa form sa ibaba."},
                        {text: "Maaari kang mag-order ng anting-anting ngayon! Punan lamang ang iyong pangalan at numero ng telepono sa form at magbabago ang iyong buhay. Ipinapangako ko!"},
                    ],
                    [
                        {text: " "},
                    ],
                ],
            ],
            m: [
                [
                    [
                        {text: "Sign - <p style='color: #3fc726'>{zodie}</p>, magkakaroon ng positibong pagbabago sa pananalapi sa pinakamalapit na hinaharap. Gayunpaman, ang iyong kasalukuyang kapalaran sa pananalapi ay nasa pinakamababa. Marami kang ipinagkait sa iyong sarili, pinahihirapan ka ng mga utang. Desidido kang isulong ang pera at magandang kapalaran sa iyong buhay."},
                        {text: "Hindi ka makakaalis sa kasalukuyang miserableng buhay, hindi ka makakahanap ng paraan para baguhin ito. Kaya't sa ngayon kailangan ang isang rebolusyong pinansyal para baguhin ang tadhana."},
                        {text: "Kung gusto mong makaahon sa kahirapan at mabago ang iyong buhay sa 2023. Pakinggan mong mabuti ang aking sasabihin sa iyo ngayon."},
                        {text: "Nakikita ko ang mga positibong paggalaw sa iyong konstelasyon sa darating na buwan. Iyon na ang tamang panahon para baguhin ang iyong kapalaran, alisin ang malas para yumaman habang buhay."},
                        {text: "Isa (1) ang masuwerteng numero ng pampa mo. Nangangahulugan ito na sa Hunyo 1, 2023, ang iyong buhay ay maaaring magbago nang malaki para sa isang mas magandang pamumuhay."},
                        {text: "Kaya paano maging masuwerte sa 2023? Patuloy na makinig sa iyong horoscope."},
                        {text: "Ito na ang pagkakataon mo para baguhin ang iyong kapalaran sa 2023. Ngunit kung makaligtaan mo ito, maaari ka pa ring manatili sa iyong kasalukuyang miserableng buhay. Kaya maging honest muna tayo!"},
                        {text: "Tutulungan ka ng horoscope 2023 ngayong taon na makaakit ng pera at suwerte. Kung sumasang-ayon ka, makakalimutan mo kung ano ang mga problema mo sa natitirang bahagi ng iyong buhay. Ilalabas ko ang iyong magandang kapalaran mula sa pagkabihag."},
                        {text: "Gagawa ako ng isang espesyal na anting-anting mula sa iyong pangalan, zodiac sign. Naglalaman ito ng mahiwagang kapangyarihan na nagdudulot ng suwerte, na nag-aalis ng malas para sa may-ari nito."},
                        {text: "Ito ang aking ilustrasyon ng Týcheros Amulet"},
                        {text: "<br><img width='400px' src='img/sep.jpeg'></br>"},
                        {text: "Binabago ng anting-anting na ito ang iyong buhay sa maikling panahon. Magiging masuwerte ka, makakaakit ng maraming pera, darating ang mga pagkakataong makapagbabago ng buhay na hindi mo inaasahan. At nakakatulong din ito sa iyo na alisin ang mga kabiguan, mga negatibong kaisipan na nakakaapekto sa iyong buhay. Sa lalong madaling panahon ay makaramdam ka ng mayaman at masaya sa natitirang bahagi ng iyong buhay."},
                        {text: "Noon pa man ay sinisikap kong tulungan ang ating mamamayang Pilipino at hindi ko sinasadyang kumita rito. Upang matuto nang higit pa tungkol sa anting-anting at kung paano ito gumagana, pumunta sa form sa ibaba."},
                        {text: "Maaari kang mag-order ng anting-anting ngayon! Punan lamang ang iyong pangalan at numero ng telepono sa form at magbabago ang iyong buhay. Ipinapangako ko!"},
                    ],
                    [
                        {text: ""},
                    ],
                ],
            ],
        }),
        (e.socNumber = [{
            text: "Paki-click ang button sa ibaba"
        },]),
        (e.Forms = function (t) {
            e.FormsParams = {
                method: "POST",
                action: "",
                inputs: [
                    {name: "name", value: "", placeholder: "Enter your name", type: "text", required: !0},
                    {name: "phone", value: "", placeholder: "Enter your phone", type: "tel", required: !0},
                ],
                btn_text: "Order amulet",
                title: "Order form amulet by Hanz Cua",
            };
            return function () {
                document.getElementById("cont_form").style.display = "block";
            };
        }),
        (e.getZodiak = function (t) {
            var a = parseInt(t[0]);
            switch (parseInt(t[1])) {
                case 1:
                    e.zodiak = a < 20 ? 10 : 11;
                    break;
                case 2:
                    e.zodiak = a < 19 ? 11 : 12;
                    break;
                case 3:
                    e.zodiak = a < 21 ? 12 : 1;
                    break;
                case 4:
                    e.zodiak = a < 20 ? 1 : 2;
                    break;
                case 5:
                    e.zodiak = a <= 21 ? 2 : 3;
                    break;
                case 6:
                    e.zodiak = a < 21 ? 3 : 4;
                    break;
                case 7:
                    e.zodiak = a < 23 ? 4 : 5;
                    break;
                case 8:
                    e.zodiak = a < 23 ? 5 : 6;
                    break;
                case 9:
                    e.zodiak = a < 23 ? 6 : 7;
                    break;
                case 10:
                    e.zodiak = a < 23 ? 7 : 8;
                    break;
                case 11:
                    e.zodiak = a < 22 ? 8 : 9;
                    break;
                case 12:
                    e.zodiak = a < 22 ? 9 : 10;
            }
            return e.zodiak;
        }),
        (e.ZodiakName = [
            {name: "Aries", id: 1},
            {name: "Taurus", id: 2},
            {name: "Gemini", id: 3},
            {name: "Cancer", id: 4},
            {name: "Leo", id: 5},
            {name: "Virgo", id: 6},
            {name: "Libra", id: 7},
            {name: "Scorpio", id: 8},
            {name: "Sagittarius", id: 9},
            {name: "Capricorn", id: 10},
            {name: "Aquarius", id: 11},
            {name: "Pisces", id: 12},
        ]),
        (e.DateBirthday = [{
            day: [1, 31],
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            year: [1940, 2000]
        }]),
        (e.MonthVariantType = ["january", "fabruary", "march", "april", "may", "june", "august", "august", "september", "october", "november", "december"]),
        (e.MonthVariant = {
            january: ["январь", "января", "январе"],
            fabruary: ["февраль", "февраля", "феврале"],
            march: ["март", "марта", "марте"],
            april: ["апрель", "апреля", "апреле"],
            may: ["май", "мая", "мае"],
            june: ["июнь", "июня", "июне"],
            july: ["июль", "июля", "июле"],
            august: ["август", "августа", "августе"],
            september: ["сентябрь", "сентября", "сентябре"],
            october: ["октябрь", "октября", "октебре"],
            november: ["ноябрь", "ноября", "ноябре"],
            december: ["декабрь", "декабря", "декабре"],
        }),
        (e.Scroll = function () {
            $(document).ready(function () {
                !(function (e, t = function () {
                }, a = []) {
                    (e = jQuery(e)), (t = t.bind(e));
                    var n = -1,
                        o = -1;
                    setInterval(function () {
                        (e.height() == n && e.width() == o) || ((n = e.height()), (o = e.width()), e.parent().animate({scrollTop: n}, 50), t.apply(null, a));
                    }, 100);
                })(".chat-content-container .chat-content-list", function (e) {
                }, []);
            });
        }),
        (e.Replace = function (e, t) {
            var a = e;
            return (
                Object.entries(t).forEach((e) => {
                    var t = "{" + e[0] + "}",
                        n = new RegExp(t, "g");
                    a = a.replace(n, e[1]);
                }),
                    a
            );
        }),
        (e.LoadListMessages = function (a, n) {
            var o,
                i = 1,
                r = 1,
                c = {showCursor: !1};
            for (o = a.length; i < o + 1; i++)
                (c.onStringTyped = function () {
                    ++r < o + 1 && ((c.array_id = r), (c.strings = [a[r - 1]]), $(".chat-content-list").append(t("manager", r)), $(".chat-content-item.manager p.p" + r).typed(c), e.Scroll()),
                    r == o + 1 &&
                    setTimeout(function () {
                        $(".chat-content-list").append(e.Forms(n)), e.Scroll();
                    }, 1500); // 1500
                }),
                1 == i && ((c.array_id = i), (c.strings = [a[i - 1]]), $(".chat-content-list").append(t("manager", i)), $(".chat-content-item.manager p.p" + i).typed(c), e.Scroll());
        }),
        $(window).on("load", function () {
            $(".chat-content-list").append(t("manager")),
                e.Scroll(),
                $(".chat-content-item.manager p").typed({
                    strings: [e.managerDialog[0].text],
                    showCursor: !1,
                    callback: function () {
                        setTimeout(function () {
                            $(".chat-content-list").append(t("manager")),
                                e.Scroll(),
                                $(".chat-content-item.manager p").typed({
                                    strings: [e.managerDialog[1].text],
                                    showCursor: !1,
                                    callback: function () {
                                        setTimeout(function () {
                                            var t;
                                            e.Scroll(),
                                                $(".chat-content-list").append(
                                                    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="m">' +
                                                    (t = e.managerDialog[1]).m.text +
                                                    '</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="w">' +
                                                    t.w.text +
                                                    "</span></div></div>"
                                                ),
                                                e.Scroll(),
                                                $(".chooseGender").on("click", function () {
                                                    a($(this).data("type"));
                                                });
                                        }, 1e3);
                                    },
                                });
                        }, 1e3);
                    },
                });
        });
});