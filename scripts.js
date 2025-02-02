// Country data 
const countryData = {
    "Finland": 100,
    "New Zealand": 99,
    "Sweden": 99,
    "Norway": 98,
    "Canada": 97,
    "Denmark": 97,
    "Ireland": 97,
    "Luxembourg": 97,
    "Netherlands": 97,
    "San Marino": 97,
    "Japan": 96,
    "Belgium": 96,
    "Switzerland": 96,
    "Portugal": 96,
    "Slovenia": 96,
    "Uruguay": 96,
    "Australia": 95,
    "Estonia": 95,
    "Iceland": 94,
    "Chile": 94,
    "Czechia": 94,
    "Taiwan": 94,
    "Barbados": 94,
    "Germany": 93,
    "Austria": 93,
    "Andorra": 93,
    "Dominica": 93,
    "Tuvalu": 93,
    "Marshall Islands": 93,
    "Cyprus": 92,
    "Micronesia": 92,
    "Palau": 92,
    "St. Lucia": 92,
    "Cabo Verde": 92,
    "United Kingdom": 91,
    "The Bahamas": 91,
    "Costa Rica": 91,
    "Italy": 90,
    "Spain": 90,
    "Slovakia": 90,
    "Liechtenstein": 90,
    "Kiribati": 90,
    "St. Vincent and the Grenadines": 90,
    "France": 89,
    "Lithuania": 89,
    "Grenada": 89,
    "St. Kitts and Nevis": 89,
    "Latvia": 88,
    "Belize": 87,
    "Malta": 87,
    "Argentina": 85,
    "Greece": 85,
    "Mauritius": 85,
    "Antigua and Barbuda": 85,
    "Mongolia": 84,
    "Samoa": 84,
    "South Korea": 83,
    "United States": 83,
    "Croatia": 83,
    "Panama": 83,
    "Romania": 83,
    "Trinidad and Tobago": 82,
    "Vanuatu": 82,
    "Monaco": 82,
    "Tonga": 81,
    "Ghana": 80,
    "Jamaica": 80,
    "Poland": 80,
    "South Africa": 79,
    "Suriname": 79,
    "Seychelles": 79,
    "Bulgaria": 78,
    "Namibia": 77,
    "Nauru": 77,
    "Northern Cyprus": 76,
    "Solomon Islands": 75,
    "Israel": 74,
    "Guyana": 73,
    "Brazil": 72, // 
    "Botswana": 72,
    "Timor-Leste": 72,
    "Colombia": 70,
    "Montenegro": 69,
    "Albania": 68,
    "Dominican Republic": 68,
    "Ecuador": 67,
    "North Macedonia": 67,
    "Senegal": 67,
    "India": 66,
    "Malawi": 66,
    "Bolivia": 66,
    "Fiji": 66,
    "Lesotho": 66,
    "Peru": 66,
    "Botswana": 72, 
    "Hungary": 65,
    "Liberia": 64,
    "Bhutan": 63,
    "Paraguay": 63,
    "Nepal": 62,
    "Benin": 61,
    "Moldova": 61,
    "Papua New Guinea": 61,
    "Mexico": 60,
    "Sierra Leone": 60,
    "Kosovo": 60,
    "Georgia": 58,
    "Philippines": 58,
    "Madagascar": 58,
    "Indonesia": 57,
    "Serbia": 57,
    "Armenia": 54,
    "Sri Lanka": 54,
    "Zambia": 54,
    "Malaysia": 53, 
    "El Salvador": 53,
    "Kenya": 52,
    "Tunisia": 51,
    "Bosnia and Herzegovina": 51,
    "The Gambia": 50,
    "Ukraine": 49,
    "Singapore": 48,
    "Honduras": 48,
    "Guatemala": 46,
    "Nigeria": 44, 
    "Mozambique": 44,
    "Maldives": 44,
    "Guinea-Bissau": 43,
    "Somaliland": 43,
    "Lebanon": 42,
    "Togo": 42,
    "Comoros": 42,
    "Hong Kong": 41,
    "Bangladesh": 40,
    "Mauritania": 39,
    "Abkhazia": 39,
    "Kuwait": 38,
    "Morocco": 37,
    "Thailand": 36,
    "Tanzania": 36,
    "Pakistan": 35,
    "Uganda": 34,
    "Jordan": 33,
    "Turkey": 33,
    "Niger": 33,
    "Algeria": 32,
    "Guinea": 30,
    "Haiti": 30,
    "Iraq": 30,
    "Pakistani Kashmir": 29,
    "Angola": 28,
    "Brunei": 28,
    "Kyrgyzstan": 27,
    "Zimbabwe": 27,
    "Burkina Faso": 27,
    "Mali": 26,
    "Indian Kashmir": 26, 
    "Qatar": 25, 
    "Djibouti": 24,
    "Oman": 24,
    "Cambodia": 23,
    "Kazakhstan": 23,
    "Rwanda": 23,
    "West Bank": 22,
    "Ethiopia": 20,
    "Gabon": 20,
    "Vietnam": 19,
    "Democratic Republic of the Congo": 19,
    "Egypt": 18,
    "United Arab Emirates": 18,
    "Republic of the Congo": 17,
    "Eswatini": 17,
    "Transnistria": 17,
    "Nicaragua": 16,
    "Venezuela": 15,
    "Cameroon": 15,
    "Chad": 15,
    "Burundi": 14,
    "Russia": 13, 
    "Laos": 13,
    "Bahrain": 12, 
    "Cuba": 12,
    "Uzbekistan": 12,
    "South Ossetia": 12,
    "Iran": 11,
    "Yemen": 10,
    "China": 9,
    "Libya": 9,
    "Belarus": 8,  
    "Myanmar": 8,
    "Saudi Arabia": 8,
    "Somalia": 8,
    "Palestine": 8,
    "Azerbaijan": 7,
    "Sudan": 6,
    "Afghanistan": 6,
    "Central African Republic": 5,
    "Equatorial Guinea": 5,
    "Tajikistan": 5,
    "Western Sahara": 4,
    "Eritrea": 3,
    "North Korea": 3,
    "Turkmenistan": 2,
    "Crimea": 2,
    "Syria": 1,
    "South Sudan": 1,
    "Tibet": 0,
    "Nagorno-Karabakh": -3,
};
    // Local resources for specific countries
    const localResourceData = {
        "Finland": [
            { name: "Finnish Red Cross", url: "https://www.redcross.fi" },
            { name: "Mieli Mental Health Finland", url: "https://www.mieli.fi" }
        ],
        "New Zealand": [
            { name: "Volunteering New Zealand", url: "https://www.volunteeringnz.org.nz" },
            { name: "Citizens Advice Bureau", url: "https://www.cab.org.nz" }
        ],
        "Sweden": [
            { name: "Swedish Red Cross", url: "https://www.rodakorset.se" },
            { name: "Save the Children Sweden", url: "https://www.raddabarnen.se" }
        ],
        "Norway": [
            { name: "Norwegian Refugee Council", url: "https://www.nrc.no" },
            { name: "Volunteer Norway", url: "https://www.frivillig.no" }
        ],
        "Canada": [
            { name: "Volunteer Canada", url: "https://volunteer.ca" },
            { name: "United Way Canada", url: "https://www.unitedway.ca" }
        ],
        "Denmark": [
            { name: "Danish Refugee Council", url: "https://drc.ngo" },
            { name: "Frivillig Danmark", url: "https://www.frivillig.dk" }
        ],
        "Ireland": [
            { name: "Volunteer Ireland", url: "https://www.volunteer.ie" },
            { name: "Irish Red Cross", url: "https://www.redcross.ie" }
        ],
        "Luxembourg": [
            { name: "Caritas Luxembourg", url: "https://www.caritas.lu" },
            { name: "Red Cross Luxembourg", url: "https://www.croix-rouge.lu" }
        ],
        "Netherlands": [
            { name: "NL Cares", url: "https://www.nlcares.nl" },
            { name: "Oranje Fonds", url: "https://www.oranjefonds.nl" }
        ],
        "San Marino": [
            { name: "San Marino Red Cross", url: "https://www.cri.sm" },
            { name: "San Marino Volunteer Service", url: "https://www.sanmarinoservices.sm" }
        ],
        "Japan": [
            { name: "Japan Red Cross", url: "https://www.jrc.or.jp" },
            { name: "Second Harvest Japan", url: "https://www.2hj.org" }
        ],
        "Belgium": [
            { name: "Serve the City Brussels", url: "https://www.servethecity.be" },
            { name: "Belgian Red Cross", url: "https://www.redcross.be" }
        ],
        "Switzerland": [
            { name: "Swiss Red Cross", url: "https://www.redcross.ch" },
            { name: "Caritas Switzerland", url: "https://www.caritas.ch" }
        ],
        "Portugal": [
            { name: "Portuguese Red Cross", url: "https://www.cruzvermelha.pt" },
            { name: "Banco Alimentar", url: "https://www.bancoalimentar.pt" }
        ],
        "Slovenia": [
            { name: "Slovenian Red Cross", url: "https://www.rks.si" },
            { name: "Slovenian Philanthropy", url: "https://www.filantropija.org" }
        ],
        "Uruguay": [
            { name: "Red Cross Uruguay", url: "https://www.cruzroja.org.uy" },
            { name: "Techo Uruguay", url: "https://www.techo.org/uruguay" }
        ],
        "Australia": [
            { name: "Volunteering Australia", url: "https://www.volunteeringaustralia.org" },
            { name: "The Salvation Army Australia", url: "https://www.salvationarmy.org.au" }
        ],
        "Estonia": [
            { name: "Estonian Red Cross", url: "https://www.redcross.ee" },
            { name: "Volunteer Estonia", url: "https://vabatahtlikud.ee" }
        ],
        "Iceland": [
            { name: "Icelandic Red Cross", url: "https://www.redcross.is" },
            { name: "ICE-SAR", url: "https://www.icesar.is" }
        ],
        "Chile": [
            { name: "Red Cross Chile", url: "https://www.cruzroja.cl" },
            { name: "TECHO Chile", url: "https://www.techo.org/chile" }
        ],
        "Czechia": [
            { name: "Czech Red Cross", url: "https://www.cervenykriz.eu" },
            { name: "People in Need", url: "https://www.clovekvtisni.cz" }
        ],
        "Taiwan": [
            { name: "Taiwan Red Cross", url: "https://www.redcross.org.tw" },
            { name: "Taiwan Fund for Children and Families", url: "https://www.ccf.org.tw" }
        ],
        "Barbados": [
            { name: "Barbados Red Cross", url: "https://www.barbadosredcross.org" },
            { name: "Love Day", url: "https://www.lovedaybb.com" }
        ],
        "Germany": [
            { name: "German Red Cross", url: "https://www.drk.de" },
            { name: "Caritas Germany", url: "https://www.caritas.de" }
        ],
        "Austria": [
            { name: "Austrian Red Cross", url: "https://www.roteskreuz.at" },
            { name: "Caritas Austria", url: "https://www.caritas.at" }
        ],
        "Andorra": [
            { name: "Cruz Roja Andorrana", url: "https://www.creuroja.ad" },
            { name: "Andorra Voluntariat", url: "https://www.andorravoluntariat.org" }
        ],
        "Dominica": [
            { name: "Dominica Red Cross", url: "https://www.redcross.dm" },
            { name: "Dominica Association of Industry and Commerce", url: "https://www.dominicachamber.com" }
        ],
        "Tuvalu": [
            { name: "Tuvalu Red Cross Society", url: "https://www.tuvaluredcross.org" },
            { name: "Tuvalu Climate Action Network", url: "https://www.tuvaluconservation.org" }
        ],
        "Marshall Islands": [
            { name: "Marshall Islands Red Cross", url: "https://www.redcross.org/rmi" },
            { name: "Marshall Islands Conservation Society", url: "https://www.mics-rmi.org" }
        ],
        "Cyprus": [
            { name: "Cyprus Red Cross", url: "https://www.redcross.org.cy" },
            { name: "Volunteer Doctors Cyprus", url: "https://www.volunteerdoctors.org.cy" }
        ],
        "Micronesia": [
            { name: "Micronesia Red Cross Society", url: "https://www.ifrc.org/micronesia" },
            { name: "Micronesian Conservation Coalition", url: "https://www.micronesianconservation.org" }
        ],
        "Palau": [
            { name: "Palau Red Cross Society", url: "https://palauredcross.org" },
            { name: "Palau Conservation Society", url: "https://www.palauconservation.org" }
        ],
        "St. Lucia": [
            { name: "St. Lucia Red Cross", url: "https://www.stluciaredcross.org" },
            { name: "Volunteer St. Lucia", url: "https://www.volunteerstlucia.org" }
        ],
        "Cabo Verde": [
            { name: "Cabo Verde Red Cross", url: "https://www.redcross.cv" },
            { name: "Cabo Verde Volunteer Network", url: "https://www.volunteercv.org" }
        ],
        "United Kingdom": [
            { name: "British Red Cross", url: "https://www.redcross.org.uk" },
            { name: "Do IT UK", url: "https://do-it.org" }
        ],
        "The Bahamas": [
            { name: "Bahamas Red Cross", url: "https://www.bahamasredcross.org" },
            { name: "Hands for Hunger", url: "https://www.handsforhunger.org" }
        ],
        "Costa Rica": [
            { name: "Red Cross Costa Rica", url: "https://www.cruzroja.or.cr" },
            { name: "CEPIA Costa Rica", url: "https://www.cepiacostarica.org" }
        ],
        "Italy": [
            { name: "Italian Red Cross", url: "https://www.cri.it" },
            { name: "Banco Alimentare", url: "https://www.bancoalimentare.it" }
        ],
        "Spain": [
            { name: "Spanish Red Cross", url: "https://www.cruzroja.es" },
            { name: "Caritas Spain", url: "https://www.caritas.es" }
        ],
        "Slovakia": [
            { name: "Slovak Red Cross", url: "https://www.redcross.sk" },
            { name: "People in Peril Slovakia", url: "https://www.clovekvohrozeni.sk" }
        ],
        "Liechtenstein": [
            { name: "Liechtenstein Red Cross", url: "https://www.roteskreuz.li" },
            { name: "Liechtenstein Development Service", url: "https://www.led.li" }
        ],
        "Kiribati": [
            { name: "Kiribati Red Cross", url: "https://www.ifrc.org/kiribati" },
            { name: "Kiribati Climate Action Network", url: "https://www.kiribaticlimate.org" }
        ],
        "St. Vincent and the Grenadines": [
            { name: "SVG Red Cross", url: "https://www.svgredcross.org" },
            { name: "VincyCares", url: "https://www.vincycares.org" }
        ],
        "France": [
            { name: "Secours Populaire Français", url: "https://www.secourspopulaire.fr" },
            { name: "Restos du Coeur", url: "https://www.restosducoeur.org" }
        ],
        "Lithuania": [
            { name: "Lithuanian Red Cross", url: "https://www.redcross.lt" },
            { name: "Food Bank Lithuania", url: "https://www.maistobankas.lt" }
        ],
        "Grenada": [
            { name: "Grenada Red Cross", url: "https://www.grenadaredcross.org" },
            { name: "GRENED Grenada", url: "https://www.grened.org" }
        ],
        "St. Kitts and Nevis": [
            { name: "St. Kitts and Nevis Red Cross", url: "https://www.sknredcross.org" },
            { name: "St. Kitts Rotary Club", url: "https://rotarystkitts.org" }
        ],
        "Latvia": [
            { name: "Latvian Red Cross", url: "https://www.redcross.lv" },
            { name: "Latvia Charity Bank", url: "https://www.ziedot.lv" }
        ],
        "Belize": [
            { name: "Human Rights Commission of Belize", url: "https://hrcbelize.org" },
            { name: "Belize Red Cross", url: "https://www.belizeredcross.org" }
        ],
        "Malta": [
            { name: "Aditus Foundation", url: "https://aditus.org.mt" },
            { name: "Caritas Malta", url: "https://www.caritasmalta.org" }
        ],
        "Argentina": [
            { name: "CELS - Center for Legal and Social Studies", url: "https://www.cels.org.ar" },
            { name: "Argentine Red Cross", url: "https://www.cruzroja.org.ar" }
        ],
        "Greece": [
            { name: "Greek Council for Refugees", url: "https://www.gcr.gr" },
            { name: "Hellenic Red Cross", url: "https://www.redcross.gr" }
        ],
        "Mauritius": [
            { name: "Mauritius Human Rights Association", url: "https://www.humanrightsmauritius.org" },
            { name: "Mauritius Red Cross Society", url: "https://www.redcross.int/mauritius" }
        ],
        "Antigua and Barbuda": [
            { name: "Antigua and Barbuda Red Cross", url: "https://www.abredcross.org" },
            { name: "Human Rights and Justice Foundation", url: "https://www.humanrightsantigua.org" }
        ],
        "Mongolia": [
            { name: "Open Society Forum Mongolia", url: "https://www.forum.mn" },
            { name: "Mongolian Red Cross Society", url: "https://www.redcross.mn" }
        ],
        "Samoa": [
            { name: "Samoa Victim Support Group", url: "https://www.svsg.org.ws" },
            { name: "Samoa Red Cross Society", url: "https://www.redcross.org.ws" }
        ],
        "South Korea": [
            { name: "National Human Rights Commission of Korea", url: "https://www.humanrights.go.kr" },
            { name: "Korean Red Cross", url: "https://www.redcross.or.kr" }
        ],
        "United States": [
            { name: "American Civil Liberties Union (ACLU)", url: "https://www.aclu.org" },
            { name: "American Red Cross", url: "https://www.redcross.org" }
        ],
        "Croatia": [
            { name: "Human Rights House Zagreb", url: "https://www.kucaljudskihprava.hr" },
            { name: "Croatian Red Cross", url: "https://www.hck.hr" }
        ],
        "Panama": [
            { name: "Panama Human Rights Network", url: "https://www.redhpanama.org" },
            { name: "Panama Red Cross", url: "https://www.cruzroja.org.pa" }
        ],
        "Romania": [
            { name: "APADOR-CH (Human Rights Association)", url: "https://www.apador.org" },
            { name: "Romanian Red Cross", url: "https://www.crucearosie.ro" }
        ],
        "Trinidad and Tobago": [
            { name: "Living Water Community", url: "https://www.livingwatercommunity.com" },
            { name: "Trinidad and Tobago Red Cross", url: "https://www.ttrcs.org" }
        ],
        "Vanuatu": [
            { name: "Vanuatu Human Rights Coalition", url: "https://www.vhrc.org" },
            { name: "Vanuatu Red Cross Society", url: "https://www.redcrossvanuatu.com" }
        ],
        "Monaco": [
            { name: "Red Cross Monaco", url: "https://www.croix-rouge.mc" },
            { name: "Monaco Human Rights Association", url: "https://www.amnistiemonaco.org" }
        ],
        "Tonga": [
            { name: "Tonga National Centre for Women and Children", url: "https://www.tncwc.org" },
            { name: "Tonga Red Cross Society", url: "https://www.redcross.org.to" }
        ],
        "Ghana": [
            { name: "CHRAJ (Commission on Human Rights and Administrative Justice)", url: "https://www.chraj.gov.gh" },
            { name: "Ghana Red Cross Society", url: "https://www.redcrossghana.org" }
        ],
        "Jamaica": [
            { name: "Jamaicans for Justice", url: "https://www.jamaicansforjustice.org" },
            { name: "Jamaica Red Cross", url: "https://www.jamaicaredcross.org" }
        ],
        "Poland": [
            { name: "Helsinki Foundation for Human Rights", url: "https://www.hfhr.pl" },
            { name: "Polish Red Cross", url: "https://www.pck.pl" }
        ],
        "South Africa": [
            { name: "Legal Resources Centre", url: "https://www.lrc.org.za" },
            { name: "South African Red Cross Society", url: "https://www.redcross.org.za" }
        ],
        "Suriname": [
            { name: "Suriname Red Cross", url: "https://www.redcross.sr" },
            { name: "Human Rights Suriname", url: "https://www.humanrightssuriname.org" }
        ],
        "Seychelles": [
            { name: "Seychelles Human Rights Commission", url: "https://www.shrc.sc" },
            { name: "Seychelles Red Cross", url: "https://www.redcross.sc" }
        ],
        "Bulgaria": [
            { name: "Bulgarian Helsinki Committee", url: "https://www.bghelsinki.org" },
            { name: "Bulgarian Red Cross", url: "https://www.redcross.bg" }
        ],
        "Namibia": [
            { name: "Namibia Legal Assistance Centre", url: "https://www.lac.org.na" },
            { name: "Namibia Red Cross Society", url: "https://www.redcross.org.na" }
        ],
        "Nauru": [
            { name: "Nauru Human Rights", url: "https://www.un.org/en/global-issues/human-rights" },
            { name: "Nauru Red Cross Society", url: "https://www.ifrc.org/nauru" }
        ],
        "Northern Cyprus*": [
            { name: "Human Rights Foundation of Turkey", url: "https://www.tihv.org.tr" },
            { name: "Cyprus Red Cross Society", url: "https://www.redcross.org.cy" }
        ],
        "Solomon Islands": [
            { name: "Solomon Islands Human Rights Council", url: "https://www.hrcommission.gov.sb" },
            { name: "Solomon Islands Red Cross", url: "https://www.redcross.org.sb" }
        ],
        "Israel": [
            { name: "Association for Civil Rights in Israel", url: "https://www.acri.org.il/en" },
            { name: "Magen David Adom (Red Cross Equivalent)", url: "https://www.mdais.org/en" }
        ],
        "Guyana": [
            { name: "Guyana Human Rights Association", url: "https://www.guyanahumanrights.org" },
            { name: "Guyana Red Cross Society", url: "https://www.guyanaredcross.org" }
        ],
        "Brazil": [
            { name: "Instituto Sou da Paz", url: "https://www.soudapaz.org" },
            { name: "Brazilian Red Cross", url: "https://www.cruzvermelha.org.br" }
        ],
        "Botswana": [
            { name: "Ditshwanelo - The Botswana Centre for Human Rights", url: "https://www.ditshwanelo.org.bw" },
            { name: "Botswana Red Cross Society", url: "https://www.botswanaredcross.org.bw" }
        ],
        "Timor-Leste": [
            { name: "Judicial System Monitoring Programme (JSMP)", url: "https://www.jsmp.tl" },
            { name: "Timor-Leste Red Cross", url: "https://www.redcross.tl" }
        ],
        "Colombia": [
            { name: "Dejusticia - Legal Rights Organization", url: "https://www.dejusticia.org" },
            { name: "Colombian Red Cross", url: "https://www.cruzrojacolombiana.org" }
        ],
        "Montenegro": [
            { name: "Human Rights Action Montenegro", url: "https://www.hraction.org" },
            { name: "Montenegro Red Cross", url: "https://www.ckcg.co.me" }
        ],
        "Albania": [
            { name: "Albanian Helsinki Committee", url: "https://www.ahc.org.al" },
            { name: "Albanian Red Cross", url: "https://www.kksh.org.al" }
        ],
        "Dominican Republic": [
            { name: "Dominican Republic Human Rights Commission", url: "https://www.cndh.org.do" },
            { name: "Dominican Red Cross", url: "https://www.cruzroja.org.do" }
        ],
        "Ecuador": [
            { name: "Fundación Regional de Asesoría en Derechos Humanos (INREDH)", url: "https://www.inredh.org" },
            { name: "Ecuadorian Red Cross", url: "https://www.cruzroja.org.ec" }
        ],
        "North Macedonia": [
            { name: "Helsinki Committee for Human Rights of North Macedonia", url: "https://www.mhc.org.mk" },
            { name: "Red Cross of North Macedonia", url: "https://www.ckrm.org.mk" }
        ],
        "Senegal": [
            { name: "RADDHO - African Assembly for the Defense of Human Rights", url: "https://www.raddho.org" },
            { name: "Senegalese Red Cross", url: "https://www.croixrougesenegal.org" }
        ],
        "India": [
            { name: "Human Rights Law Network", url: "https://www.hrln.org" },
            { name: "Indian Red Cross Society", url: "https://www.indianredcross.org" }
        ],
        "Malawi": [
            { name: "Centre for Human Rights and Rehabilitation", url: "https://www.chrrmw.org" },
            { name: "Malawi Red Cross Society", url: "https://www.redcross.mw" }
        ],
        "Bolivia": [
            { name: "Fundación Construir", url: "https://www.construir.org.bo" },
            { name: "Bolivian Red Cross", url: "https://www.cruzrojaboliviana.org" }
        ],
        "Fiji": [
            { name: "Citizens' Constitutional Forum", url: "https://www.ccf.org.fj" },
            { name: "Fiji Red Cross Society", url: "https://www.redcross.com.fj" }
        ],
        "Lesotho": [
            { name: "Transformation Resource Centre", url: "https://www.trc.org.ls" },
            { name: "Lesotho Red Cross Society", url: "https://www.redcross.org.ls" }
        ],
        "Peru": [
            { name: "Instituto de Defensa Legal", url: "https://www.idl.org.pe" },
            { name: "Peruvian Red Cross", url: "https://www.cruzroja.org.pe" }
        ],
        "Hungary": [
            { name: "Hungarian Civil Liberties Union", url: "https://www.tasz.hu" },
            { name: "Hungarian Red Cross", url: "https://www.voroskereszt.hu" }
        ],
        "Liberia": [
            { name: "Civitas Maxima Liberia", url: "https://www.civitas-maxima.org" },
            { name: "Liberia National Red Cross Society", url: "https://www.liberianationalredcrosssociety.org" }
        ],
        "Bhutan": [
            { name: "Bhutan Centre for Media and Democracy", url: "https://www.bcmd.bt" },
            { name: "Bhutan Red Cross Society", url: "https://www.redcross.org.bt" }
        ],
        "Paraguay": [
            { name: "Codehupy - Coordinadora de Derechos Humanos de Paraguay", url: "https://www.codehupy.org.py" },
            { name: "Paraguayan Red Cross", url: "https://www.cruzroja.org.py" }
        ],
        "Nepal": [
            { name: "INSEC Nepal (Informal Sector Service Centre)", url: "https://www.insec.org.np" },
            { name: "Nepal Red Cross Society", url: "https://www.nrcs.org" }
        ],
        "Benin": [
            { name: "Amnesty International Benin", url: "https://www.amnesty.org/en/location/africa/benin/" },
            { name: "Benin Red Cross", url: "https://www.croixrougebenin.org" }
        ],
        "Moldova": [
            { name: "Promo-LEX Association", url: "https://www.promolex.md" },
            { name: "Moldovan Red Cross", url: "https://www.redcross.md" }
        ],
        "Papua New Guinea": [
            { name: "Transparency International PNG", url: "https://www.transparencypng.org.pg" },
            { name: "Papua New Guinea Red Cross", url: "https://www.redcross.org.pg" }
        ],
        "Mexico": [
            { name: "Centro de Derechos Humanos Miguel Agustín Pro Juárez", url: "https://www.centroprodh.org.mx" },
            { name: "Mexican Red Cross", url: "https://www.cruzrojamexicana.org.mx" }
        ],
        "Sierra Leone": [
            { name: "Sierra Leone Human Rights Commission", url: "https://www.hrcsl.org" },
            { name: "Sierra Leone Red Cross Society", url: "https://www.redcrosssl.org" }
        ],
        "Kosovo": [
            { name: "Kosovo Women's Network", url: "https://www.womensnetwork.org" },
            { name: "Red Cross of Kosovo", url: "https://www.redcrosskosovo.org" }
        ],
        "Georgia": [
            { name: "Georgian Young Lawyers' Association", url: "https://www.gyla.ge" },
            { name: "Georgia Red Cross Society", url: "https://www.redcross.ge" }
        ],
        "Philippines": [
            { name: "Karapatan Philippines", url: "https://www.karapatan.org" },
            { name: "Philippine Red Cross", url: "https://www.redcross.org.ph" }
        ],
        "Madagascar": [
            { name: "Transparency International Madagascar", url: "https://www.transparency.mg" },
            { name: "Madagascar Red Cross", url: "https://www.crmadagascar.org" }
        ],
        "Indonesia": [
            { name: "KontraS (Commission for the Disappeared and Victims of Violence)", url: "https://www.kontras.org" },
            { name: "Indonesian Red Cross Society", url: "https://www.pmi.or.id" }
        ],
        "Serbia": [
            { name: "Belgrade Centre for Human Rights", url: "https://www.bgcentar.org.rs" },
            { name: "Red Cross of Serbia", url: "https://www.redcross.org.rs" }
        ],
        "Armenia": [
            { name: "Helsinki Citizens' Assembly Armenia", url: "https://www.hcav.am" },
            { name: "Armenian Red Cross Society", url: "https://www.redcross.am" }
        ],
        "Sri Lanka": [
            { name: "Law and Society Trust", url: "https://www.lstlanka.org" },
            { name: "Sri Lanka Red Cross Society", url: "https://www.redcross.lk" }
        ],
        "Zambia": [
            { name: "Zambia Human Rights Commission", url: "https://www.hrc.org.zm" },
            { name: "Zambia Red Cross Society", url: "https://www.redcross.org.zm" }
        ],
        "Malaysia": [
            { name: "SUARAM (Suara Rakyat Malaysia)", url: "https://www.suaram.net" },
            { name: "Malaysian Red Crescent Society", url: "https://www.redcrescent.org.my" }
        ],
        "El Salvador": [
            { name: "Cristosal Human Rights Organization", url: "https://www.cristosal.org" },
            { name: "Red Cross El Salvador", url: "https://www.cruzrojasal.org.sv" }
        ],
        "Kenya": [
            { name: "Kenya Human Rights Commission", url: "https://www.khrc.or.ke" },
            { name: "Kenya Red Cross Society", url: "https://www.redcross.or.ke" }
        ],
        "Tunisia": [
            { name: "Tunisian League for Human Rights", url: "https://www.ltdh.tn" },
            { name: "Tunisian Red Crescent", url: "https://www.croissant-rouge.tn" }
        ],
        "Bosnia and Herzegovina": [
            { name: "Sarajevo Open Centre", url: "https://www.soc.ba" },
            { name: "Red Cross Society of Bosnia and Herzegovina", url: "https://www.rcsbh.org" }
        ],
        "The Gambia": [
            { name: "Gambia Centre for Victims of Human Rights Violations", url: "https://www.gambiahrc.org" },
            { name: "The Gambia Red Cross Society", url: "https://www.redcross.gm" }
        ],
        "Ukraine": [
            { name: "Ukrainian Helsinki Human Rights Union", url: "https://www.helsinki.org.ua" },
            { name: "Ukrainian Red Cross Society", url: "https://www.redcross.org.ua" }
        ],
        "Côte d'Ivoire": [
            { name: "Côte d'Ivoire Human Rights Commission", url: "https://www.cndhci.ci" },
            { name: "Côte d'Ivoire Red Cross", url: "https://www.croixrouge-ci.org" }
        ],
        "Singapore": [
            { name: "Humanitarian Organization for Migration Economics (HOME)", url: "https://www.home.org.sg" },
            { name: "Singapore Red Cross Society", url: "https://www.redcross.sg" }
        ],
        "Honduras": [
            { name: "CIPRODEH - Center for Research and Promotion of Human Rights", url: "https://www.ciprodeh.org" },
            { name: "Honduran Red Cross", url: "https://www.cruzroja.org.hn" }
        ],
        "Guatemala": [
            { name: "Human Rights Office of the Archbishop of Guatemala", url: "https://www.odhag.org.gt" },
            { name: "Guatemalan Red Cross", url: "https://www.cruzroja.gt" }
        ],
        "Nigeria": [
            { name: "CLEEN Foundation", url: "https://cleen.org" },
            { name: "Nigerian Red Cross Society", url: "https://redcrossnigeria.org" }
        ],
        "Mozambique": [
            { name: "Mozambique Human Rights League", url: "https://www.ldh.org.mz" },
            { name: "Mozambique Red Cross", url: "https://www.redcross.org.mz" }
        ],
        "Maldives": [
            { name: "Transparency Maldives", url: "https://transparency.mv" },
            { name: "Maldives Red Crescent", url: "https://redcrescent.org.mv" }
        ],
        "Guinea-Bissau": [
            { name: "Human Rights League of Guinea-Bissau", url: "https://www.ldh.org.gw" },
            { name: "Guinea-Bissau Red Cross", url: "https://www.ifrc.org/guinea-bissau" }
        ],
        "Somaliland*": [
            { name: "Somaliland Human Rights Centre", url: "https://hrcsomaliland.org" },
            { name: "Somaliland Red Crescent", url: "https://www.ifrc.org/somaliland" }
        ],
        "Lebanon": [
            { name: "Legal Agenda Lebanon", url: "https://www.legal-agenda.com" },
            { name: "Lebanese Red Cross", url: "https://www.redcross.org.lb" }
        ],
        "Togo": [
            { name: "Collectif des Associations Contre l'Impunité au Togo", url: "https://www.cacit.org" },
            { name: "Togo Red Cross", url: "https://www.croixrougetogo.org" }
        ],
        "Comoros": [
            { name: "Comoros Human Rights Network", url: "https://www.rndhc.org" },
            { name: "Comoros Red Crescent", url: "https://www.ifrc.org/comoros" }
        ],
        "Hong Kong*": [
            { name: "Hong Kong Human Rights Monitor", url: "https://www.hkhrm.org.hk" },
            { name: "Hong Kong Red Cross", url: "https://www.redcross.org.hk" }
        ],
        "Bangladesh": [
            { name: "Ain o Salish Kendra (ASK)", url: "https://www.askbd.org" },
            { name: "Bangladesh Red Crescent Society", url: "https://www.bdrcs.org" }
        ],
        "Mauritania": [
            { name: "Association Mauritanienne des Droits de l'Homme", url: "https://www.amdh.org.mr" },
            { name: "Mauritania Red Crescent", url: "https://www.ifrc.org/mauritania" }
        ],
        "Abkhazia*": [
            { name: "International Crisis Group - Abkhazia", url: "https://www.crisisgroup.org" },
            { name: "Red Cross Abkhazia", url: "https://www.ifrc.org/abkhazia" }
        ],
        "Kuwait": [
            { name: "Kuwait Society for Human Rights", url: "https://www.kuwaithr.org" },
            { name: "Kuwait Red Crescent Society", url: "https://www.krcs.org.kw" }
        ],
        "Morocco": [
            { name: "Moroccan Organization for Human Rights", url: "https://www.omdh.org" },
            { name: "Moroccan Red Crescent", url: "https://www.croissant-rouge.ma" }
        ],
        "Thailand": [
            { name: "Thai Lawyers for Human Rights", url: "https://www.tlhr2014.com" },
            { name: "Thai Red Cross Society", url: "https://www.redcross.or.th" }
        ],
        "Tanzania": [
            { name: "Legal and Human Rights Centre", url: "https://www.humanrights.or.tz" },
            { name: "Tanzania Red Cross Society", url: "https://www.trcs.or.tz" }
        ],
        "Pakistan": [
            { name: "Human Rights Commission of Pakistan", url: "https://www.hrcp-web.org" },
            { name: "Pakistan Red Crescent Society", url: "https://www.prcs.org.pk" }
        ],
        "Uganda": [
            { name: "Uganda Human Rights Commission", url: "https://www.uhrc.ug" },
            { name: "Uganda Red Cross Society", url: "https://www.redcrossug.org" }
        ],
        "Jordan": [
            { name: "Jordanian National Centre for Human Rights", url: "https://www.nchr.org.jo" },
            { name: "Jordan Red Crescent Society", url: "https://www.jnrcs.org" }
        ],
        "Turkey": [
            { name: "Human Rights Association Turkey", url: "https://www.ihd.org.tr" },
            { name: "Turkish Red Crescent", url: "https://www.kizilay.org.tr" }
        ],
        "Niger": [
            { name: "Nigerien Association for the Defense of Human Rights", url: "https://www.anddh.org" },
            { name: "Niger Red Cross", url: "https://www.croixrougeniger.org" }
        ],
        "Algeria": [
            { name: "Algerian League for the Defense of Human Rights", url: "https://www.algerianleague.org" },
            { name: "Algerian Red Crescent", url: "https://www.cra.dz" }
        ],
        "Guinea": [
            { name: "Guinea Organization for the Defense of Human Rights", url: "https://www.ogdh.org" },
            { name: "Guinea Red Cross", url: "https://www.redcrossguinee.org" }
        ],
        "Haiti": [
            { name: "Bureau des Droits Humains en Haïti", url: "https://www.bdah.org" },
            { name: "Haitian Red Cross", url: "https://www.croixrouge.ht" }
        ],
        "Iraq": [
            { name: "Iraqi Human Rights Society", url: "https://www.ihrs.org" },
            { name: "Iraq Red Crescent Society", url: "https://www.ircs.org.iq" }
        ],
        "Pakistani Kashmir*": [
            { name: "Human Rights Commission of Pakistan", url: "https://www.hrcp-web.org" },
            { name: "Pakistan Red Crescent Society", url: "https://www.prcs.org.pk" }
        ],
        "Angola": [
            { name: "Mãos Livres Angola", url: "https://www.maoslivres.org" },
            { name: "Angolan Red Cross", url: "https://www.cva-angola.org" }
        ],
        "Brunei": [
            { name: "Brunei Human Rights Association", url: "https://www.bruneihumanrights.org" },
            { name: "Brunei Red Crescent Society", url: "https://www.bruneiredcrescent.org.bn" }
        ],
        "Kyrgyzstan": [
            { name: "Bir Duino Human Rights Movement", url: "https://www.birduino.kg" },
            { name: "Kyrgyzstan Red Crescent", url: "https://www.redcrescent.kg" }
        ],
        "Zimbabwe": [
            { name: "Zimbabwe Lawyers for Human Rights", url: "https://www.zlhr.org.zw" },
            { name: "Zimbabwe Red Cross Society", url: "https://www.redcrosszim.org.zw" }
        ],
        "Burkina Faso": [
            { name: "Burkina Faso Human Rights Movement", url: "https://www.mbdhp.bf" },
            { name: "Burkina Faso Red Cross", url: "https://www.croixrougebf.org" }
        ],
        "Mali": [
            { name: "Association Malienne des Droits de l'Homme", url: "https://www.amdhmali.org" },
            { name: "Mali Red Cross", url: "https://www.croixrouge-mali.org" }
        ],
        "Indian Kashmir*": [
            { name: "Kashmir Human Rights Network", url: "https://www.khrn.org" },
            { name: "Indian Red Cross Society", url: "https://www.indianredcross.org" }
        ],
        "Qatar": [
            { name: "National Human Rights Committee of Qatar", url: "https://www.nhrc-qa.org" },
            { name: "Qatar Red Crescent Society", url: "https://www.qrcs.org.qa" }
        ],
        "Djibouti": [
            { name: "Ligue Djiboutienne des Droits Humains", url: "https://www.lddh-djibouti.org" },
            { name: "Djibouti Red Crescent", url: "https://www.croissant-rouge.dj" }
        ],
        "Oman": [
            { name: "Omani Human Rights Commission", url: "https://www.ohrc.om" },
            { name: "Oman Red Crescent", url: "https://www.redcrescent.om" }
        ],
        "Cambodia": [
            { name: "Cambodian Human Rights and Development Association", url: "https://www.adhoc-cambodia.org" },
            { name: "Cambodian Red Cross", url: "https://www.redcross.org.kh" }
        ],
        "Kazakhstan": [
            { name: "Kazakhstan International Bureau for Human Rights", url: "https://www.bureau.kz" },
            { name: "Kazakhstan Red Crescent", url: "https://www.redcrescent.kz" }
        ],
        "Rwanda": [
            { name: "Rwanda Human Rights Commission", url: "https://www.nchr.gov.rw" },
            { name: "Rwandan Red Cross", url: "https://www.rwandaredcross.org" }
        ],
        "West Bank*": [
            { name: "Al-Haq Human Rights Organization", url: "https://www.alhaq.org" },
            { name: "Palestine Red Crescent Society", url: "https://www.palestinercs.org" }
        ],
        "Ethiopia": [
            { name: "Ethiopian Human Rights Council", url: "https://www.ehrco.org" },
            { name: "Ethiopian Red Cross Society", url: "https://www.redcrosseth.org" }
        ],
        "Gabon": [
            { name: "Gabonese Human Rights Commission", url: "https://www.cndh.ga" },
            { name: "Gabon Red Cross", url: "https://www.redcross.ga" }
        ],
        "Vietnam": [
            { name: "Vietnam Human Rights Network", url: "https://www.vietnamhumanrights.net" },
            { name: "Vietnam Red Cross Society", url: "https://www.redcross.org.vn" }
        ],
        "Democratic Republic of the Congo": [
            { name: "Congolese Human Rights Observatory", url: "https://www.odhd.org" },
            { name: "Red Cross of DRC", url: "https://www.croixrouge-rdc.org" }
        ],
        "Egypt": [
            { name: "Egyptian Initiative for Personal Rights", url: "https://www.eipr.org" },
            { name: "Egyptian Red Crescent Society", url: "https://www.egyptianrc.org" }
        ],
        "United Arab Emirates": [
            { name: "Emirates Human Rights Association", url: "https://www.ehrc.ae" },
            { name: "UAE Red Crescent", url: "https://www.rcuae.ae" }
        ],
        "Republic of the Congo": [
            { name: "Observatoire Congolais des Droits de l'Homme", url: "https://www.ocdh.org" },
            { name: "Congo Red Cross", url: "https://www.redcross.cg" }
        ],
        "Eswatini": [
            { name: "Eswatini Human Rights Commission", url: "https://www.ehrc.org.sz" },
            { name: "Eswatini Red Cross Society", url: "https://www.redcross.org.sz" }
        ],
        "Transnistria*": [
            { name: "Promo-LEX Moldova", url: "https://www.promolex.md" },
            { name: "Moldova Red Cross", url: "https://www.redcross.md" }
        ],
        "Nicaragua": [
            { name: "CENIDH - Nicaraguan Human Rights Center", url: "https://www.cenidh.org" },
            { name: "Nicaraguan Red Cross", url: "https://www.cruzrojanicaraguense.org" }
        ],
        "Venezuela": [
            { name: "PROVEA - Venezuelan Human Rights Organization", url: "https://www.derechos.org.ve" },
            { name: "Venezuelan Red Cross", url: "https://www.cruzrojavenezolana.org" }
        ],
        "Cameroon": [
            { name: "Cameroon Human Rights Commission", url: "https://www.cndhl.cm" },
            { name: "Cameroon Red Cross", url: "https://www.crcameroon.org" }
        ],
        "Chad": [
            { name: "Chadian League for Human Rights", url: "https://www.ltdh.td" },
            { name: "Chad Red Cross", url: "https://www.redcross.td" }
        ],
        "Burundi": [
            { name: "Aprodh Burundi", url: "https://www.aprodh.org" },
            { name: "Burundi Red Cross", url: "https://www.croixrougeburundi.org" }
        ],
        "Russia": [
            { name: "Memorial Human Rights Center", url: "https://www.memohrc.org" },
            { name: "Russian Red Cross", url: "https://www.redcross.ru" }
        ],
        "Laos": [
            { name: "Lao Human Rights Council", url: "https://www.laohumrights.org" },
            { name: "Lao Red Cross", url: "https://www.laoredcross.org.la" }
        ],
        "Bahrain": [
            { name: "Bahrain Human Rights Watch Society", url: "https://www.bhrws.org" },
            { name: "Bahrain Red Crescent Society", url: "https://www.bh-redcrescent.com" }
        ],
        "Cuba": [
            { name: "Cuban Commission for Human Rights and National Reconciliation", url: "https://www.cchrn.org" },
            { name: "Cuban Red Cross", url: "https://www.redcross.org.cu" }
        ],
        "Uzbekistan": [
            { name: "Ezgulik Human Rights Society", url: "https://www.ezgulik.org" },
            { name: "Uzbekistan Red Crescent", url: "https://www.redcrescent.uz" }
        ],
        "South Ossetia*": [
            { name: "International Crisis Group - South Ossetia", url: "https://www.crisisgroup.org" },
            { name: "Red Cross South Ossetia", url: "https://www.ifrc.org/south-ossetia" }
        ],
        "Iran": [
            { name: "Iran Human Rights", url: "https://www.iranhr.net" },
            { name: "Iranian Red Crescent Society", url: "https://www.rcs.ir" }
        ],
        "Yemen": [
            { name: "Mwatana Organization for Human Rights", url: "https://www.mwatana.org" },
            { name: "Yemen Red Crescent Society", url: "https://www.yemenredcrescent.org" }
        ],
        "China": [
            { name: "Human Rights in China", url: "https://www.hrichina.org" },
            { name: "Red Cross Society of China", url: "https://www.redcross.org.cn" }
        ],
        "Libya": [
            { name: "Libyan Center for Human Rights", url: "https://www.lchr.org.ly" },
            { name: "Libya Red Crescent", url: "https://www.lrc.org.ly" }
        ],
        "Belarus": [
            { name: "Viasna Human Rights Center", url: "https://www.spring96.org" },
            { name: "Belarus Red Cross", url: "https://www.redcross.by" }
        ],
        "Myanmar": [
            { name: "Assistance Association for Political Prisoners", url: "https://aappb.org" },
            { name: "Myanmar Red Cross Society", url: "https://www.redcross.org.mm" }
        ],
        "Saudi Arabia": [
            { name: "Saudi Organization for Rights and Freedoms", url: "https://www.sorf.org" },
            { name: "Saudi Red Crescent Authority", url: "https://www.srca.org.sa" }
        ],
        "Somalia": [
            { name: "Somali Human Rights Association", url: "https://www.sohram.org" },
            { name: "Somali Red Crescent Society", url: "https://www.somalicrescent.org" }
        ],
        "Gaza Strip*": [
            { name: "Palestinian Center for Human Rights", url: "https://www.pchrgaza.org" },
            { name: "Palestine Red Crescent Society", url: "https://www.palestinercs.org" }
        ],
        "Azerbaijan": [
            { name: "Helsinki Foundation for Human Rights Azerbaijan", url: "https://www.humanrights.az" },
            { name: "Azerbaijan Red Crescent Society", url: "https://www.redcrescent.az" }
        ],
        "Sudan": [
            { name: "Sudanese Human Rights Monitor", url: "https://www.sudanhumanrights.org" },
            { name: "Sudan Red Crescent Society", url: "https://www.srcs.sd" }
        ],
        "Afghanistan": [
            { name: "Afghanistan Independent Human Rights Commission", url: "https://www.aihrc.org.af" },
            { name: "Afghanistan Red Crescent Society", url: "https://www.arcs.af" }
        ],
        "Central African Republic": [
            { name: "Observatoire Centrafricain des Droits de l'Homme", url: "https://www.ocdh.org" },
            { name: "Central African Red Cross", url: "https://www.croixrougecentrafrique.org" }
        ],
        "Equatorial Guinea": [
            { name: "EG Justice", url: "https://www.egjustice.org" },
            { name: "Equatorial Guinea Red Cross", url: "https://www.redcrosseg.org" }
        ],
        "Tajikistan": [
            { name: "Bureau for Human Rights and Rule of Law", url: "https://www.bhr.tj" },
            { name: "Red Crescent Society of Tajikistan", url: "https://www.redcrescent.tj" }
        ],
        "Western Sahara*": [
            { name: "Sahara Press Service (SPS)", url: "https://www.spsrasd.info" },
            { name: "Western Sahara Red Crescent", url: "https://www.crescentinternationale.org" }
        ],
        "Eritrea": [
            { name: "Eritrean Human Rights Commission", url: "https://www.ehrei.org" },
            { name: "Eritrean Red Cross", url: "https://www.ifrc.org/eritrea" }
        ],
        "North Korea": [
            { name: "Liberty in North Korea (LiNK)", url: "https://www.libertyinnorthkorea.org" },
            { name: "DPRK Red Cross Society", url: "https://www.ifrc.org/north-korea" }
        ],
        "Turkmenistan": [
            { name: "Turkmen Initiative for Human Rights", url: "https://www.chrono-tm.org" },
            { name: "Turkmenistan Red Crescent Society", url: "https://www.ifrc.org/turkmenistan" }
        ],
        "Crimea*": [
            { name: "Crimean Human Rights Group", url: "https://crimeahrg.org/en" },
            { name: "Ukrainian Red Cross Society", url: "https://www.redcross.org.ua" }
        ],
        "Eastern Donbas*": [
            { name: "Vostok SOS", url: "https://vostok-sos.org" },
            { name: "ICRC Ukraine", url: "https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine" }
        ],
        "Syria": [
            { name: "Syrian Network for Human Rights", url: "https://www.sn4hr.org" },
            { name: "Syrian Arab Red Crescent", url: "https://www.sarc.sy" }
        ],
        "South Sudan": [
            { name: "South Sudan Law Society", url: "https://www.sslawsociety.org" },
            { name: "South Sudan Red Cross", url: "https://www.southsudanredcross.org" }
        ],
        "Tibet*": [
            { name: "Tibet Justice Center", url: "https://www.tibetjustice.org" },
            { name: "Tibetan Red Cross Association", url: "https://www.tibetredcross.org" }
        ],
        "Nagorno-Karabakh*": [
            { name: "Helsinki Citizens' Assembly Vanadzor", url: "https://hcav.am" },
            { name: "International Committee of the Red Cross", url: "https://www.icrc.org/en/where-we-work/europe-central-asia/nagorno-karabakh" }
        ]
    };

// Ensure functions are available globally
function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'none';
        console.log("Popup closed successfully.");
    } else {
        console.error("Popup not found.");
    }
}

// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const flagContainer = document.getElementById('flagContainer');
    const popup = document.getElementById('popup');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const closeButton = document.querySelector(".popup .close-btn");
    const countryLinks = document.querySelectorAll('.popup-content a');
    const flags = document.querySelectorAll('.flag');
    const scoreValue = document.getElementById('scoreValue');
    const freedomStatus = document.getElementById('freedomStatus');

    // Ensure popup exists
    if (!popup) {
        console.error("Flag selector popup not found.");
        return;
    }

    // Open the flag selection popup
    function openPopup() {
        popup.style.display = 'block';
    }

    // Change the displayed flag and update the freedom score
    function changeFlag(country) {
        // Hide all flags first
        const flags = document.querySelectorAll('.flag');
        flags.forEach(flag => flag.style.display = 'none');

        // Show the selected flag
        let selectedFlag = document.getElementById(country);
        if (selectedFlag) {
            selectedFlag.style.display = 'block';
        }

        // Update the freedom score
        updateScore(country);

        // Update Local Resources
        const localResourcesDiv = document.getElementById("localResources");

        if (localResourceData.hasOwnProperty(country)) {
            // Convert the array of objects into HTML links
            const resourceLinks = localResourceData[country].map(resource => {
                return `<a href="${resource.url}" target="_blank">${resource.name}</a>`;
            }).join("<br>"); // Join them with line breaks

            localResourcesDiv.innerHTML = `<p>Local resources for <strong>${country}</strong>:</p> ${resourceLinks}`;
        } else {
            localResourcesDiv.innerHTML = "<p>No local resources available for this country.</p>";
        }

        closePopup();
    }

    // Update the freedom score based on the selected country
    function updateScore(country) {
        if (countryData.hasOwnProperty(country)) {
            let score = countryData[country];
            scoreValue.textContent = score;
            updateFreedomStatus(score);
        } else {
            scoreValue.textContent = "";
            freedomStatus.textContent = "";
        }
    }

    // Update the freedom status text based on the score
    function updateFreedomStatus(score) {
        if (score >= 70) {
            freedomStatus.textContent = "Free";
            freedomStatus.style.color = "green";
        } else if (score >= 35 && score < 70) {
            freedomStatus.textContent = "Partly Free";
            freedomStatus.style.color = "orange";
        } else {
            freedomStatus.textContent = "Not Free";
            freedomStatus.style.color = "red";
        }
    }

    // Attach event listeners
    if (flagContainer) {
        flagContainer.addEventListener('click', openPopup);
    }

    if (scoreDisplay) {
        scoreDisplay.addEventListener('click', openPopup);
    }

    if (closeButton) {
        closeButton.addEventListener("click", function(event) {
            event.stopPropagation(); // Stops it from interfering with other clicks
            closePopup();
        });
        console.log("Close button event listener added.");
    } else {
        console.error("Close button not found.");
    }

    // Attach event listeners to country links
    countryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            let country = this.textContent.trim();
            changeFlag(country);
        });
    });

    console.log("Flag selection, popup, and close button fully initialized.");
});

// Ensure this function is available globally
window.closePopup = closePopup;

// Open the Help popup
function openHelpPopup(event) {
    event.stopPropagation(); // Prevents it from triggering other events
    const helpPopup = document.getElementById('helpPopup');
    if (helpPopup) {
        helpPopup.style.display = 'block';
    } else {
        console.error("Help popup not found.");
    }
}

// Close the Help popup
function closeHelpPopup(event) {
    if (event) event.stopPropagation(); // Stops click events from reaching parent elements
    const helpPopup = document.getElementById('helpPopup');
    if (helpPopup) {
        helpPopup.style.display = 'none';
    } else {
        console.error("Help popup not found.");
    }
}

// Open the About popup
function openAboutPopup(event) {
    event.stopPropagation();
    const aboutPopup = document.getElementById('aboutPopup');
    if (aboutPopup) {
        aboutPopup.style.display = 'block';
    } else {
        console.error("About popup not found.");
    }
}

// Close the About popup
function closeAboutPopup() {
    const aboutPopup = document.getElementById('aboutPopup');
    if (aboutPopup) {
        aboutPopup.style.display = 'none';
    } else {
        console.error("About popup not found.");
    }
}

// Search 
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const countryLinks = document.querySelectorAll(".popup-content a");

    if (searchInput) {
        searchInput.addEventListener("input", function() {
            const searchValue = searchInput.value.toLowerCase();

            countryLinks.forEach(link => {
                const countryName = link.textContent.toLowerCase();
                if (countryName.includes(searchValue)) {
                    link.style.display = "block";
                } else {
                    link.style.display = "none";
                }
            });
        });
    } else {
        console.error("Search input not found.");
    }
});


// Music player
document.addEventListener("DOMContentLoaded", function() {
    const backgroundAudio = document.getElementById('backgroundAudio');
    const muteToggle = document.getElementById('muteToggle');

    if (backgroundAudio) {
        function playAudioOnce() {
            backgroundAudio.muted = false;
            backgroundAudio.play()
                .then(() => console.log("Audio playing."))
                .catch(error => console.log("Autoplay blocked:", error));

            document.body.removeEventListener("click", playAudioOnce);
        }

        document.body.addEventListener("click", playAudioOnce);

        // ✅ Mute/Unmute Toggle
        if (muteToggle) {
            muteToggle.addEventListener("click", function(event) {
                event.stopPropagation(); // Prevent triggering other events
                if (backgroundAudio.muted) {
                    backgroundAudio.muted = false;
                    muteToggle.textContent = "🔊";
                } else {
                    backgroundAudio.muted = true;
                    muteToggle.textContent = "🔇";
                }
            });
        }

        console.log("Background audio and mute button ready.");
    } else {
        console.error("Background audio element not found.");
    }
});




