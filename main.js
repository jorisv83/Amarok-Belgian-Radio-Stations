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

Importer.loadQtBinding( "qt.core" );
Importer.loadQtBinding( "qt.xml" );
Importer.loadQtBinding( "qt.network" );
Importer.loadQtBinding( "qt.gui" ); //for QPixmap

function Station( name, url, description )
{
    this.name = name;
    this.url = url;
    this.description = description;
}

var categories 	= new Object;
var images 	= new Object;
//var albumcount = 0;
//var streamcount = 0;
    
function AddNewStation( index, stationArray, image )
{
    categories[index]=stationArray;
    images[index]=image;
}

//Add the stations to the lists created above.

AddNewStation( "Studio Brussel", 
		new Array (
		  new Station("Studio Brussel", "http://mp3.streampower.be/stubru-high.mp3", "Top 40 / Rock / Alternative")
		  //new Station("Studio Brussel Rock It!", "http://mp3.streampower.be/stubru_rock_it-high.mp3", "Rock / Alternative")
		), 
	       "images/zender_stubru.gif");

AddNewStation( "Radio 1", 
		new Array (
		  new Station("Radio 1", "http://mp3.streampower.be/radio1-high.mp3", "Music / Information"),
		  new Station("Nieuws Plus", "http://download.streampower.be/vrt/radio1/11_11niws-snip_hi.mp3", "Music / Information")
		  //new Station("Radio 1 Classics", "http://mp3.streampower.be/radio1_classics-high.mp3", "Music / Information")
		), 
	       "images/zender_radio1.gif");

AddNewStation( "Klara", 
		new Array (
		  new Station("Klara", "http://mp3.streampower.be/klara-high.mp3", "Classical"),
		  new Station("Klara Continuoso", "http://mp3.streampower.be/klaracontinuo-high.mp3", "Classical")
		  //new Station("Klara Jazz", "http://mp3.streampower.be/klara_jazz-high.mp3", "Jazz")
		), 
	       "images/zender_klara.gif");

AddNewStation( "Radio 2", 
		new Array (
		  new Station("Radio 2 Antwerpen", "http://mp3.streampower.be/ra2ant-high.mp3", "Music / Information / Regional service"),
		  new Station("Radio 2 Vlaams-Brabant", "http://mp3.streampower.be/ra2vlb-high.mp3", "Music / Information / Regional service"),
		  new Station("Radio 2 Limburg", "http://mp3.streampower.be/ra2lim-high.mp3", "Music / Information / Regional service"),
		  new Station("Radio 2 Oost-Vlaanderen", "http://mp3.streampower.be/ra2ovl-high.mp3", "Music / Information / Regional service"),
		  new Station("Radio 2 West-Vlaanderen", "http://mp3.streampower.be/ra2wvl-high.mp3", "Music / Information / Regional service")
		  //new Station("Radio 2 Top Collectie", "http://mp3.streampower.be/radio2_de_topcollectie_xl-high.mp3", "Music / Information / Regional service")
		), 
	       "images/zender_radio2.gif");

AddNewStation( "MNM", 
		new Array (
		  new Station("MNM", "http://mp3.streampower.be/mnm-high.mp3", "Pop / Top 40"),
		  new Station("MNM Hits", "http://mp3.streampower.be/mnm_hits-high.mp3", "Pop / Top 40")
		), 
	       "images/zender_mnm.gif");

AddNewStation( "Radio Vlaanderen", 
		new Array (
		  new Station("Radio Vlaanderen", "http://mp3.streampower.be/rv-high.mp3", "International service"),
		  new Station("Radio Vlaanderen Info", "http://mp3.streampower.be/rvi-high.mp3", "International service")
		), 
	       "images/zender_rvi.gif");

AddNewStation( "Sporza", 
		new Array (
		  new Station("Sporza", "http://mp3.streampower.be/sporza-high.mp3","Sports / Music")
		), 
	       "images/zender_sporza.gif");

AddNewStation( "Ketnet", 
		new Array (
		  new Station("Ketnet", "http://mp3.streampower.be/ketnetradio-high.mp3","Youth programmes")
		), 
	       "images/zender_ketnet.gif");

AddNewStation( "Crooze fm", 
		new Array (
		  new Station("Crooze fm", "http://193.227.114.74:9000","Jazz / Easy Listening")
		), 
	       "images/zender_croozefm.gif");

//"Exqi" is now "Radio Maria"
/*AddNewStation( "Exqi fm", 
		new Array (
		  new Station("Exqi fm", "http://streams.lazernet.be:3660","Pop rock hits")
		), 
	       "images/zender_exqi.gif");*/

AddNewStation( "Radio Maria", 
		new Array (
		  new Station("Radio Maria", "http://stream.radiomaria.be:8000/RadioMaria-96","Catholic")
		), 
	       "images/zender_radiomaria.gif");

AddNewStation( "fm Goud", 
		new Array (
		  new Station("fm Goud", "http://stream16.fluoline.net:8008","Pop / Top 40")
		), 
	       "images/zender_fmgoud.gif");

AddNewStation( "Hit fm", 
		new Array (
		  new Station("Hit fm", "http://94.23.48.124:8000","Top 40")
		), 
	       "images/zender_hitfm.gif");

AddNewStation( "Humorzender", 
		new Array (
		  new Station("Humorzender", "http://listen.radionomy.com/humorzender","Comedy")
		), 
	       "images/zender_humorzender.gif");

AddNewStation( "Joe fm", 
		new Array (
		  new Station("Joe fm", "http://194.0.174.13/4FM_MP3_HI.m3u","Pop / Top 40")
		), 
	       "images/zender_joefm.gif");

AddNewStation( "Q-music", 
		new Array (
		  new Station("Q-music", "http://mp3streaming.q-music.be/QBE_MP3_HI.m3u","Pop / Top 40")
		), 
	       "images/zender_qmusic.gif");
	       /*
	       		(WMA 96 kbps) http://streaming.q-music.be/QBE_HI
			(WMA 32 kbps mono) http://streaming.q-music.be/QBE_LO
			(MP3 96 kbps) http://mp3streaming.q-music.be/QBE_MP3_HI.m3u
			(MP3 32 kbps mono) http://mp3streaming.q-music.be/QBE_MP3_LO.m3u
	       */

//Stream URL does not exist anymore
/*AddNewStation( "Radio Contact", 
		new Array (
		  new Station("Radio Contact", "http://icy.rtl.nl/contactfr.m3u","Radio Contact"),
		  new Station("Radio Contact R&B", "http://icy.rtl.nl/contactrnb.m3u","Radio Contact R&B")
		), 
	       "images/zender_radiocontact.gif");*/

AddNewStation( "Nostalgie", 
		new Array (
		  new Station("Nostalgie", "http://stream01.level27.be:80","Oldies")
		), 
	       "images/zender_nostalgie.gif");

AddNewStation( "RGR fm", 
		new Array (
		  new Station("RGR fm", "http://shoutcast01.edpnet.net:10210","Dance") //other possible url: http://streams.lazernet.be:2620
		), 
	       "images/zender_rgr.gif");

AddNewStation( "ROL Radio", 
		new Array (
		  new Station("ROL Radio", "http://listen.radionomy.com/rolradio","Oldies")
		), 
	       "images/zender_rolradio.gif");

AddNewStation( "Schlagerhits", 
		new Array (
		  new Station("Schlagerhits", "http://listen.radionomy.com/schlagerhits.m3u","Schlager / Oldies")
		), 
	       "images/zender_schlagerhits.gif");

AddNewStation( "TOP Radio", 
		new Array (
		  new Station("TOP Radio Gent", "http://ns24907.ovh.net:8000","Dance"),
		  new Station("TOP Radio Aalter", "http://shoutcast01.edpnet.net:10090","Dance")
		), 
	       "images/zender_topradio.gif");

AddNewStation( "C-dance", 
		new Array (
		  new Station("C-dance", "http://streamserver.c-dance.com:8320","Dance")
		), 
	       "images/zender_cdance.gif");

AddNewStation( "Slow radio", 
		new Array (
		  new Station("Slow radio", "http://stream1.slowradio.com","Slow")
		), 
	       "images/zender_slowradio.gif");

AddNewStation( "City-Music", 
		new Array (
		  new Station("City-Music", "http://shoutcast01.edpnet.net:10150","Pop")
		), 
	       "images/zender_citymusic.gif");

AddNewStation( "Rootsradio", 
		new Array (
		  new Station("Rootsradio", "http://army.wavestreamer.com:4947","Jazz / Folk / Blues")
		), 
	       "images/zender_rootsradio.gif");

AddNewStation( "Stadsradio M", 
		new Array (
		  new Station("Stadsradio M", "http://listen.radionomy.com/stadsradio-m","Pop / Top 40")
		), 
	       "images/zender_stadsradiom.gif");

AddNewStation( "Urgent Radio", 
		new Array (
		  new Station("Urgent Radio", "http://urgent.stream.flumotion.com/urgent/high.mp3.m3u","Student radio") //other url: http://195.10.10.223:80/urgent/high.mp3?GKID=0acd78622f1811e1857e00163ea2c743&fspref=aHR0cDovL3d3dy5saXN0ZW5saXZlLmV1L2JlbGdpdW0uaHRtbA%3D%3D
		), 
	       "images/zender_urgentfm.gif");

AddNewStation( "Fun Radio", 
		new Array (
		  new Station("Fun Radio", "http://broadcast.infomaniak.net/funradiobe-high.mp3.m3u","Top 40")
		), 
	       "images/zender_funradio.gif");

AddNewStation( "Rock fm", 
		new Array (
		  new Station("Rock fm", "http://streams.movemedia.eu:8440","Rock")
		), 
	       "images/zender_rockfmonline.gif");

AddNewStation( "2bfm", 
		new Array (
		  new Station("2bfm", "http://listen.radionomy.com/2bfm.m3u","Top 40")
		), 
	       "images/zender_2bfm.gif");

AddNewStation( "Laser Radio", 
		new Array (
		  new Station("Laser Radio", "http://server-09.stream-server.nl:8040","Dance") //other url: http://server-06.stream-server.nl:8040
		), 
	       "images/zender_laserradio.gif");

AddNewStation( "Jouw! Radio", 
		new Array (
		  new Station("Jouw! Radio", "http://82.94.204.71","Flemish music") //other possible url: http://82.94.204.95
		), 
	       "images/zender_jouwradio.gif");

AddNewStation( "Komilfoo fm", 
		new Array (
		  new Station("Komilfoo fm", "http://shoutcast01.edpnet.net:10130","Pop/Local news")
		), 
	       "images/zender_komilfoo.gif");

//This is also "o radio antwerpen" >> streams are the same.
AddNewStation( "FG DJ Radio", 
		new Array (
		  new Station("FG DJ Radio (Antwerpen)", "http://87.98.215.40:80","Dance"),
		  new Station("FG DJ Radio (Parijs)", "http://fg.impek.tv","Dance")
		), 
	       "images/zender_fgdjradio.gif");

AddNewStation( "Radio Go4it", 
		new Array (
		  new Station("Radio Go4it", "http://listen.radionomy.com/radiogo4it.m3u","Pop / Top 40")
		), 
	       "images/zender_radiogo4it.gif");

AddNewStation( "Planet Rock", 
		new Array (
		  new Station("Planet Rock", "http://stream13.level27.be:8018","Rock")
		), 
	       "images/zender_planetrock.gif");

AddNewStation( "Nashville fm", 
		new Array (
		  new Station("Nashville fm", "http://server-14.stream-server.nl:8300","Country")
		), 
	       "images/zender_nashvillefm.gif");

//Stream is offline
/*AddNewStation( "City Gold", 
		new Array (
		  new Station("City Gold", "http://stream.citygold.be:8004","Oldies")
		), 
	       "images/zender_citygold.gif");*/

AddNewStation( "Starlight Radio", 
		new Array (
		  new Station("Starlight Radio", "http://server-06.stream-server.nl:8290","Top 40")
		), 
	       "images/zender_starlightradio.gif");

AddNewStation( "Golden Flash", 
		new Array (
		  new Station("Golden Flash", "http://streaming2.intronic.nl:80/goldenflash","Oldies") //other url: http://server-16.stream-server.nl:8920
		), 
	       "images/zender_goldenflash.gif");

AddNewStation( "Zen fm", 
		new Array (
		  new Station("Zen fm", "http://ns25042.ovh.net:8010","Chillout / Grooves")
		), 
	       "images/zender_zenfm.gif");

AddNewStation( "Pure fm", 
		new Array (
		  new Station("Pure fm", "http://stream5.rtbf.be:8000/pure128xrtbf","Top 40")
		), 
	       "images/zender_purefm.gif");

AddNewStation( "Trendy fm", 
		new Array (
		  new Station("Trendy fm", "http://stream.trendyfm.be:80","Top 40 / Dance")
		), 
	       "images/zender_trendyfm.gif");

AddNewStation( "Club fm", 
		new Array (
		  new Station("Club fm", "http://stream.publimediasvr.be:8000/clubfm.mp3","Pop")
		), 
	       "images/zender_clubfm.gif");

AddNewStation( "VivaCité", 
		new Array (
		  new Station("VivaCité Mons", "http://vivacitehainaut.ice.infomaniak.ch:80/vivacitehainaut.mp3","Music / Information / Regional service"),
		  new Station("VivaCité Bruxelles", "http://vivacitebruxelles.ice.infomaniak.ch:80/vivacitebruxelles.mp3","Music / Information / Regional service"),    
		  new Station("VivaCité Namur", "http://vivacitenamur-brabantwallo.ice.infomaniak.ch:80/vivacitenamur-brabantwallo.mp3","Music / Information / Regional service"),    
		  new Station("VivaCité Liège", "http://vivaciteliege.ice.infomaniak.ch:80/vivaciteliege.mp3","Music / Information / Regional service"),
		  new Station("VivaCité Charleroi", "http://vivacitecharleroi.ice.infomaniak.ch:80/vivacitecharleroi.mp3","Music / Information / Regional service")
		  //new Station("VivaCité Verviers", "http://www.static.rtbf.be/radio/vivacite/m3u/vivaver_56k.m3u","Music / Information / Regional service")
		), 
	       "images/zender_vivacite.gif");

AddNewStation( "Musiq 3", 
		new Array (
		  new Station("Musiq 3", "http://stream5.rtbf.be:8000/mus3128xrtbf","Classical")
		), 
	       "images/zender_musiq3.gif");

AddNewStation( "Classic 21", 
		new Array (
		  new Station("Classic 21", "http://stream5.rtbf.be:8000/2128xrtbf","Classic Hits"),
		  //new Station("Classic 21 Les Classiques", "http://178.33.130.194:8000/listen.pls","Classic rock")
		  new Station("Classic 21 60's", "http://178.33.130.197:8000", "60s")
		  //new Station("Classic 21 80's", "http://178.33.130.196:8000/listen.plss", "80s")
		), 
	       "images/zender_classic21.gif");

//Does not exist anymore
/*AddNewStation( "Voodoo fm", 
		new Array (
		  new Station("Voodoo fm", "http://193.227.114.74:8000","Voodoo fm")
		), 
	       "images/zender_voodoo.gif");*/

AddNewStation( "Memory Radio", 
		new Array (
		  new Station("Memory Radio", "http://listen.radionomy.com/memory-radio","Oldies")
		), 
	       "images/zender_memory.gif");

AddNewStation( "Radio Minerva", 
		new Array (
		  new Station("Radio Minerva", "http://streams.movemedia.eu:8300","Oldies")
		), 
	       "images/zender_radiominerva.gif");

AddNewStation( "BRO info- & oldiesradio", 
		new Array (
		  new Station("BRO info- & oldiesradio", "http://streams.movemedia.eu:8410","Oldies")
		), 
	       "images/zender_bro.gif");

AddNewStation( "Antwerpen fm", 
		new Array (
		  new Station("Antwerpen fm", "http://streams.lazernet.be:2710","Pop")
		), 
	       "images/zender_antwerpenfm.gif");

AddNewStation( "Zoe fm", 
		new Array (
		  new Station("Zoe fm", "http://91.121.117.158:8500","80s / 90s / Todays Hits")
		), 
	       "images/zender_zoefm.gif");

AddNewStation( "Radio Stad", 
		new Array (
		  new Station("Radio Stad", "http://stream.belgiantracks.be:8002","RnB")
		), 
	       "images/zender_radiostad.gif");

AddNewStation( "Radio Centraal", 
		new Array (
		  new Station("Radio Centraal", "http://streams.movemedia.eu:8530","Variety")
		), 
	       "images/zender_radiocentraal.gif");

AddNewStation( "Geel fm", 
		new Array (
		  new Station("Geel fm", "http://geelfm.dyndns.org:8000/geelfm","Pop / Top 40")
		), 
	       "images/zender_geelfm.gif");

AddNewStation( "La Première", 
		new Array (
		  new Station("La Première", "http://stream5.rtbf.be:8000/prem128xrtbf","Music / Information")
		), 
	       "images/zender_lapremiere.gif");

//End: Add the stations ...

function BelgianRadio()
{
    ScriptableServiceScript.call( this, "Belgian radio", 2, "Belgian internet radio stations", "Belgian internet radio stations", true );
    Amarok.debug( "BelgianRadio: OK" );
}

function onConfigure()
{
    Amarok.alert( "No configuration options." );
}

function onPopulating( level, callbackData, filter )
{
    //For some reason Amarok appends a "%20", remove it
    //filter = filter.toLowerCase().replace(/%20$/,"").replace("%20"," ");
    
    //Make filter string lowercase and unescape all urlencoded "tags" ( and trim the result )    
    filter = filter.toLowerCase().trim();
    filter = unescape(filter).trim();
    
    Amarok.debug( "BelgianRadio: filter = " + filter );
    //Amarok.Window.Statusbar.shortMessage("Belgian radio is loading ...");    
    
    if ( level == 1 ) 
    {
	Amarok.debug( "BelgianRadio: Add station stream album ..." );
	
        for( att in categories )
        {
	    if(filter.length > 0)
	    {
		var hasItems = false;
		var stationArray = categories[att];
		for ( j = 0; j < stationArray.length; j++ )
		{
		    if(stationArray[j].name.toLowerCase().indexOf(filter) != -1)
		    {
			hasItems = true;
			break;
		    }
		}
		
		if(!hasItems) continue;
	    }
			
            var cover = Amarok.Info.scriptPath() + "/" + images[att];
            Amarok.debug ("BelgianRadio: att = " + att + ", " + categories[att].name);
      
            item = Amarok.StreamItem;
	    item.level = 1;
	    item.callbackData = att;
	    item.itemName = att;
	    item.playableUrl = "";
	    item.infoHtml = "";
            item.coverUrl = cover;
	    script.insertItem( item );
	    //albumcount++;
        }
        script.donePopulating();
    }
    else if ( level == 0 ) 
    {
        Amarok.debug( "BelgianRadio: Add station stream ..." );

        var stationArray = categories[callbackData];

	for ( i = 0; i < stationArray.length; i++ )
	{
		/*if(filter.length > 0)
		{
		    var stationname = stationArray[i].name;
		    if(stationname.toLowerCase().indexOf(filter) == -1) continue;
		}*/
		
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
		item.genre = stationArray[i].description;
		script.insertItem( item );
		//streamcount++;
	}
	
	/*if ( stationArray[0].name = "La Première" )
	{
	    Amarok.Window.Statusbar.shortMessage("Loaded " + streamcount + " streams in " + albumcount + " albums.");
	}*/
	
	script.donePopulating();
    }
}

function onCustomize() {
    var currentDir = Amarok.Info.scriptPath() + "/";
    var iconPixmap = new QPixmap(currentDir + "icon.png");
    script.setIcon( iconPixmap );
    var emblemPixmap = new QPixmap( currentDir + "icon.png" );
    script.setEmblem( emblemPixmap );
}

//Amarok.configured.connect( onConfigure );

script = new BelgianRadio();
script.populate.connect( onPopulating );
script.customize.connect( onCustomize );
