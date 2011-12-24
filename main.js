/*#########################################################################
#                                                                         #
#   Simple script shamelessly recopied from:                              #
#                                                                         #
#   Copyright                                                             #
#                                                                         #
#   (C)  2009 Àlvar Cuevas i Fajardo <alvar@cuevas.cat>                   #
#   (C)  2008 Eirik Johansen Bjørgan  <eirikjbj@gmail.com>                #
#   (C)  2007, 2008 Nikolaj Hald Nielsen  <nhnFreespirit@gmail.com>       #
#   (C)  2008 Peter ZHOU <peterzhoulei@gmail.com>                         #
#   (C)  2008 Mark Kretschmann <kretschmann@kde.org>                      #
#                                                                         #
#   This program is free software; you can redistribute it and/or modify  #
#   it under the terms of the GNU General Public License as published by  #
#   the Free Software Foundation; either version 2 of the License, or     #
#   (at your option) any later version.                                   #
#                                                                         #
#   This program is distributed in the hope that it will be useful,       #
#   but WITHOUT ANY WARRANTY; without even the implied warranty of        #
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         #
#   GNU General Public License for more details.                          #
#                                                                         #
#   You should have received a copy of the GNU General Public License     #
#   along with this program; if not, write to the                         #
#   Free Software Foundation, Inc.,                                       #
#   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.         #
##########################################################################*/

Importer.loadQtBinding("qt.core");
Importer.loadQtBinding("qt.gui");

function Station( name, url, description )
{
    this.name = name;
    this.url = url;
    this.description = description;
}


categories = new Object;

// categories["Caracol Radio"]=new Array (
//     new Station("Caracol Radio en vivo 1", "http://strf03.host.mia.us.cadenaunionradio.com/cocarcol", "Caracol Radio Bogota Colombia"),
//     new Station("Caracol Radio en vivo 2", "http://strf02.host.mia.us.cadenaunionradio.com/cocarcol", "Caracol Radio Bogota Colombia")
// );

categories["Studio Brussel"]=new Array (
    new Station("Studio Brussel", "http://mp3.streampower.be/stubru-high.mp3", "Studio Brussel")
//    new Station("Studio Brussel Rock It!", "http://mp3.streampower.be/stubru_rock_it-high.mp3", "Studio Brussel Rock It!")
);

categories["Radio 1"]=new Array (
    new Station("Radio 1", "http://mp3.streampower.be/radio1-high.mp3", "Radio 1"),
    new Station("Nieuws Plus", "http://download.streampower.be/vrt/radio1/11_11niws-snip_hi.mp3", "Nieuws Plus")
//    new Station("Radio 1 Classics", "http://mp3.streampower.be/radio1_classics-high.mp3", "Radio 1 Classics")
);

categories["Klara"]=new Array (
    new Station("Klara", "http://mp3.streampower.be/klara-high.mp3", "Klara"),
    new Station("Klara Continuoso", "http://mp3.streampower.be/klaracontinuo-high.mp3", "Klara Continuoso")
//    new Station("Klara Jazz", "http://mp3.streampower.be/klara_jazz-high.mp3", "Klara Jazz")
);

categories["Radio 2"]=new Array (
    new Station("Radio 2 Antwerpen", "http://mp3.streampower.be/ra2ant-high.mp3", "Radio 2 Antwerpen"),
    new Station("Radio 2 Vlaams-Brabant", "http://mp3.streampower.be/ra2vlb-high.mp3", "Radio 2 Vlaams-Brabant"),
    new Station("Radio 2 Limburg", "http://mp3.streampower.be/ra2lim-high.mp3", "Radio 2 Limburg"),
    new Station("Radio 2 Oost-Vlaanderen", "http://mp3.streampower.be/ra2ovl-high.mp3", "Radio 2 Oost-Vlaanderen"),
    new Station("Radio 2 West-Vlaanderen", "http://mp3.streampower.be/ra2wvl-high.mp3", "Radio 2 West-Vlaanderen")
//    new Station("Radio 2 Top Collectie", "http://mp3.streampower.be/radio2_de_topcollectie_xl-high.mp3", "Radio 2 Top Collectie")
);

categories["MNM"]=new Array (
    new Station("MNM", "http://mp3.streampower.be/mnm-high.mp3", "MNM"),
    new Station("MNM Hits", "http://mp3.streampower.be/mnm_hits-high.mp3", "MNM Hits")
);

categories["Radio Vlaanderen"]=new Array (
    new Station("Radio Vlaanderen", "http://mp3.streampower.be/rv-high.mp3", "Radio Vlaanderen"),
    new Station("Radio Vlaanderen Info", "http://mp3.streampower.be/rvi-high.mp3", "Radio Vlaanderen Info")
);

categories["Sporza"]=new Array (
    new Station("Sporza", "http://mp3.streampower.be/sporza-high.mp3","Sporza")
);

categories["Ketnet"]=new Array (
    new Station("Ketnet", "http://mp3.streampower.be/ketnetradio-high.mp3","Ketnet")
);

categories["Crooze fm"]=new Array (
    new Station("Crooze fm", "http://86.39.158.40:8000","Crooze fm")
);

categories["Exqi fm"]=new Array (
    new Station("Exqi fm", "http://streams.lazernet.be:3660","Exqi fm")
);

categories["fm Goud"]=new Array (
    new Station("fm Goud", "http://stream16.fluoline.net:8008","fm Goud")
);

categories["Hit fm"]=new Array (
    new Station("Hit fm", "http://94.23.48.124:8000","Hit fm")
);

categories["Humorzender"]=new Array (
    new Station("Humorzender", "http://listen.radionomy.com/humorzender","Humorzender")
);

categories["Joe fm"]=new Array (
    new Station("Joe fm", "mms://streaming.4fm.be/4fm_hi","Joe fm")
);

categories["Qmusic"]=new Array (
    new Station("Qmusic", "mms://streaming.q-music.be/QBE_HI","Qmusic")
);

categories["Radio Contact"]=new Array (
    new Station("Radio Contact", "http://icy.rtl.nl/contactfr.m3u","Radio Contact")
);

categories["Nostalgie"]=new Array (
    new Station("Nostalgie", "http://stream01.level27.be:80","Nostalgie")
);

categories["RGR fm"]=new Array (
    new Station("RGR fm", "http://shoutcast01.edpnet.net:10210","RGR fm") //other possible url: http://streams.lazernet.be:2620
);

categories["ROL Radio"]=new Array (
    new Station("ROL Radio", "http://listen.radionomy.com/rolradio","ROL Radio")
);

categories["Schlagerhits"]=new Array (
    new Station("Schlagerhits", "http://listen.radionomy.com/schlagerhits.m3u","Schlagerhits")
);

categories["TOP Radio"]=new Array (
    new Station("TOP Radio", "http://shoutcast01.edpnet.net:10090","TOP Radio") //other url: http://ns24907.ovh.net:8000
);

categories["C-dance"]=new Array (
    new Station("C-dance", "http://streamserver.c-dance.com:8320","C-dance")
);

categories["Slow radio"]=new Array (
    new Station("Slow radio", "http://91.121.91.73:8090","Slow radio") //other possible urls: http://77.37.13.122 ; http://94.23.183.209 ; http://stream16.fluoline.net
);

categories["City-Music"]=new Array (
    new Station("City-Music", "http://shoutcast01.edpnet.net:10150","City-Music")
);

categories["Rootsradio"]=new Array (
    new Station("Rootsradio", "http://army.wavestreamer.com:4947","Rootsradio")
);

categories["Stadsradio M"]=new Array (
    new Station("Stadsradio M", "http://listen.radionomy.com/stadsradio-m","Stadsradio M")
);

categories["Urgent FM"]=new Array (
    new Station("Urgent FM", "http://urgent.stream.flumotion.com/urgent/high.mp3.m3u","Urgent FM")
);

categories["Fun Radio"]=new Array (
    new Station("Fun Radio", "http://broadcast.infomaniak.net/funradiobe-high.mp3.m3u","Fun Radio")
);

categories["Rock fm"]=new Array (
    new Station("Rock fm", "http://streams.movemedia.eu:8440","Rock fm")
);

categories["2bfm"]=new Array (
    new Station("2bfm", "http://listen.radionomy.com/2bfm.m3u","2bfm")
);

categories["Laser Radio"]=new Array (
    new Station("Laser Radio", "http://server-09.stream-server.nl:8040","Laser Radio") //other url: http://server-06.stream-server.nl:8040
);

categories["Jouwradio"]=new Array (
    new Station("Jouwradio", "http://82.94.204.71","Jouwradio") //other possible url: http://82.94.204.95
);

categories["Komilfoo fm"]=new Array (
    new Station("Komilfoo fm", "http://shoutcast01.edpnet.net:10130","Komilfoo fm")
);

//This is also "o radio antwerpen" >> streams are the same.
categories["FG DJ Radio"]=new Array (
    new Station("FG DJ Radio (Antwerpen)", "http://87.98.215.40:80","FG DJ Radio (Antwerpen)"),
    new Station("FG DJ Radio (Parijs)", "http://fg.impek.tv","FG DJ Radio (Parijs)")
);

categories["Radio Go4it"]=new Array (
    new Station("Radio Go4it", "http://listen.radionomy.com/radiogo4it.m3u","Radio Go4it")
);

categories["Planet Rock"]=new Array (
    new Station("Planet Rock", "http://stream16.fluoline.net:8000","Planet Rock")
);

categories["Nashville fm"]=new Array (
    new Station("Nashville fm", "http://broadband.nashvillefm.net:5502","Nashville fm")
);

categories["City Gold"]=new Array (
    new Station("City Gold", "http://stream.citygold.be:8004","City Gold")
);

categories["Starlight Radio"]=new Array (
    new Station("Starlight Radio", "http://server-06.stream-server.nl:8290","Starlight Radio")
);

categories["Golden Flash"]=new Array (
    new Station("Golden Flash", "http://streaming2.intronic.nl:80/goldenflash","Golden Flash") //other url: http://server-16.stream-server.nl:8920
);

categories["Zen fm"]=new Array (
    new Station("Zen fm", "http://ns25042.ovh.net:8010","Zen fm")
);

categories["Pure fm"]=new Array (
    new Station("Pure fm", "http://stream5.rtbf.be:8000/pure128xrtbf","Pure fm")
);

categories["Trendy fm"]=new Array (
    new Station("Trendy fm", "http://stream.trendyfm.be:8000","Trendy fm")
);

categories["Club fm"]=new Array (
    new Station("Club fm", "http://stream.publimediasvr.be:8000/clubfm.mp3","Club fm")
);

categories["VivaCité"]=new Array (
    new Station("VivaCité Mons", "http://www.static.rtbf.be/radio/vivacite/m3u/vivahnt_56k.m3u","VivaCité Mons"),
    new Station("VivaCité Bruxelles", "http://www.static.rtbf.be/radio/vivacite/m3u/vivabxl_56k.m3u","VivaCité Bruxelles"),    
    new Station("VivaCité Namur", "http://www.static.rtbf.be/radio/vivacite/m3u/vivanamur_56k.m3u","VivaCité Namur"),    
    new Station("VivaCité Liège", "http://www.static.rtbf.be/radio/vivacite/m3u/vivaliege_56k.m3u","VivaCité Liège"),
    new Station("VivaCité Charleroi", "http://www.static.rtbf.be/radio/vivacite/m3u/vivacha_56k.m3u","VivaCité Charleroi"),
    new Station("VivaCité Verviers", "http://www.static.rtbf.be/radio/vivacite/m3u/vivaver_56k.m3u","VivaCité Verviers")
);

categories["Musiq 3"]=new Array (
    new Station("Musiq 3", "http://stream5.rtbf.be:8000/mus3128xrtbf","Musiq 3")
);

categories["Classic 21"]=new Array (
    new Station("Classic 21", "http://stream5.rtbf.be:8000/2128xrtbf","Classic 21")
);

categories["Voodoo fm"]=new Array (
    new Station("Voodoo fm", "http://193.227.114.74:8000","Voodoo fm")
);

categories["Memory Radio"]=new Array (
    new Station("Memory Radio", "http://listen.radionomy.com/memory-radio","Memory Radio")
);

categories["Radio Minerva"]=new Array (
    new Station("Radio Minerva", "http://streams.movemedia.eu:8300","Radio Minerva")
);

categories["BRO info- & oldiesradio"]=new Array (
    new Station("BRO info- & oldiesradio", "http://streams.movemedia.eu:8410","BRO info- & oldiesradio")
);

categories["Antwerpen fm"]=new Array (
    new Station("Antwerpen fm", "http://streams.lazernet.be:2710","Antwerpen fm")
);

categories["Zoe fm"]=new Array (
    new Station("Zoe fm", "http://91.121.117.158:8500","Zoe fm")
);

categories["Radio Stad"]=new Array (
    new Station("Radio Stad", "http://stream.belgiantracks.be:8002","Radio Stad")
);

categories["Radio Centraal"]=new Array (
    new Station("Radio Stad", "http://streams.movemedia.eu:8530","Radio Centraal")
);

categories["Geel fm"]=new Array (
    new Station("Geel fm", "http://geelfm.dyndns.org:8000/geelfm","Geel fm")
);

categories["La Première"]=new Array (
    new Station("La Première", "http://stream5.rtbf.be:8000/prem128xrtbf","La Première")
);

//TODO: "Multipop" has become "Brabo", but no stream yet...

images = new Object;
images["Studio Brussel"]="images/zender_stubru.gif";
images["Radio 1"]="images/zender_radio1.gif";
images["Klara"]="images/zender_klara.gif";
images["Radio 2"]="images/zender_radio2.gif";
images["MNM"]="images/zender_mnm.gif";
images["Radio Vlaanderen"]="images/zender_rvi.gif";
images["Sporza"]="images/zender_sporza.gif";
images["Ketnet"]="images/zender_ketnet.gif";

images["Crooze fm"]="images/zender_croozefm.gif";
images["Exqi fm"]="images/zender_exqi.gif";
images["fm Goud"]="images/zender_fmgoud.gif";
images["Hit fm"]="images/zender_hitfm.gif";
images["Humorzender"]="images/zender_humorzender.gif";
images["Joe fm"]="images/zender_joefm.gif";
images["Qmusic"]="images/zender_qmusic.gif";
images["Radio Contact"]="images/zender_radiocontact.gif";
images["Nostalgie"]="images/zender_nostalgie.gif";
images["RGR fm"]="images/zender_rgr.gif";
images["ROL Radio"]="images/zender_rolradio.gif";
images["Schlagerhits"]="images/zender_schlagerhits.gif";
images["TOP Radio"]="images/zender_topradio.gif";
images["C-dance"]="images/zender_cdance.gif";
images["Slow radio"]="images/zender_slowradio.gif";
images["City-Music"]="images/zender_citymusic.gif";
images["Rootsradio"]="images/zender_rootsradio.gif";
images["Stadsradio M"]="images/zender_stadsradiom.gif";
images["Urgent FM"]="images/zender_urgentfm.gif";
images["Fun Radio"]="images/zender_funradio.gif";
images["Rock fm"]="images/zender_rockfmonline.gif";
images["2bfm"]="images/zender_2bfm.gif";
images["Laser Radio"]="images/zender_laserradio.gif";
images["Jouwradio"]="images/zender_jouwradio.gif";
images["Komilfoo fm"]="images/zender_komilfoo.gif";
images["FG DJ Radio"]="images/zender_fgdjradio.gif";
images["Radio Go4it"]="images/zender_radiogo4it.gif";
images["Planet Rock"]="images/zender_planetrock.gif";
images["Nashville fm"]="images/zender_nashvillefm.gif";
images["City Gold"]="images/zender_citygold.gif";
images["Starlight Radio"]="images/zender_starlightradio.gif";
images["Golden Flash"]="images/zender_goldenflash.gif";
images["Zen fm"]="images/zender_zenfm.gif";
images["Pure fm"]="images/zender_purefm.gif";
images["Trendy fm"]="images/zender_trendyfm.gif";
images["Club fm"]="images/zender_clubfm.gif";
images["VivaCité"]="images/zender_vivacite.gif";
images["Musiq 3"]="images/zender_musiq3.gif";
images["Classic 21"]="images/zender_classic21.gif";
images["Voodoo fm"]="images/zender_voodoo.gif";
images["Memory Radio"]="images/zender_memory.gif";
images["Radio Minerva"]="images/zender_radiominerva.gif";
images["BRO info- & oldiesradio"]="images/zender_bro.gif";
images["Antwerpen fm"]="images/zender_antwerpenfm.gif";
images["Zoe fm"]="images/zender_zoefm.gif";
images["Radio Stad"]="images/zender_radiostad.gif";
images["Radio Centraal"]="images/zender_radiocentraal.gif";
images["Geel fm"]="images/zender_geelfm.gif";
images["La Première"]="images/zender_lapremiere.gif";

function RadioVRT()
{
    ScriptableServiceScript.call( this, "Belgian radio", 2, "Belgian internet radio stations", "Belgian internet radio stations", false );
    Amarok.debug( "ok." );
}

function onConfigure()
{
    Amarok.alert( "No Configuration Options." );
}

function onPopulating( level, callbackData, filter )
{
    if ( level == 1 ) 
    {
        for( att in categories )
        {
            var cover = Amarok.Info.scriptPath() + "/" + images[att];
            Amarok.debug ("att: " + att + ", " + categories[att].name);
      
            item = Amarok.StreamItem;
	    item.level = 1;
	    item.callbackData = att;
	    item.itemName = att;
	    item.playableUrl = "";
	    item.infoHtml = "";
            item.coverUrl = cover;
	    script.insertItem( item );

        }
        script.donePopulating();

    }
    else if ( level == 0 ) 
    {
        Amarok.debug( " Recopilando emisoras..." );
	//add the station streams as leaf nodes

        var stationArray = categories[callbackData];

	for ( i = 0; i < stationArray.length; i++ )
	{
                var cover = Amarok.Info.scriptPath() + "/" + images[callbackData];
		item = Amarok.StreamItem;
		item.level = 0;
		item.callbackData = "";
		item.itemName = stationArray[i].name;
		item.playableUrl = stationArray[i].url;
		item.album = callbackData;
		item.infoHtml = stationArray[i].description;
                item.artist = "Radiostream";
                item.coverUrl = cover;
		script.insertItem( item );
	}
	script.donePopulating();
    }
}

function onCustomize() {
    var currentDir = Amarok.Info.scriptPath() + "/";
    var iconPixmap = new QPixmap(currentDir+"icon.png");
    script.setIcon(iconPixmap);
}

Amarok.configured.connect( onConfigure );

script = new RadioVRT();
script.populate.connect( onPopulating );
script.customize.connect( onCustomize );
