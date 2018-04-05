config.sys_language_uid = 0
config.language = de
config.locale_all = de_DE
config.index_externals = 1
config.metaCharset = utf-8
config.prefixLocalAnchors = all
config.simulateStaticDocuments = 0
config.index_enable = 1
config.tx_realurl_enable = 1
config.absRefPrefix = /
config.noPageTitle = 1

[globalString = ENV:HTTP_HOST=www.aures.ag]
    config.baseURL = https://www.aures.ag/
[global]
[globalString = ENV:HTTP_HOST=aures-finanz.de]
    config.baseURL = https://www.aures-finanz.de/
[global]
[globalString = ENV:HTTP_HOST=www.aures-finanz.de]
    config.baseURL = https://www.aures-finanz.de/
[global]

constants.PDF = <img src="fileadmin/aures/media/pdf.gif">

# INDEXED SEARCH ANWERFEN UND KONFIGURIEREN
# ****************************************************
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 0

plugin.tx_macinasearchbox_pi1 {
  pidSearchpage = 52
  templateFile = fileadmin/template/indexed_search_template.htm
}

plugin.tx_indexedsearch.templateFile = fileadmin/template/indexed_search_ergebnis_template.html

# POWERMAIL
# ****************************************************
plugin.tx_powermail.view {
  templateRootPath = 	fileadmin/template/Extensions/powermail/Templates/
  partialRootPath = 	fileadmin/template/Extensions/powermail/Partials/
  layoutRootPath = 		fileadmin/template/Extensions/powermail/Layouts/
}

# NEWS KONFIGURIEREN
plugin.tx_news {
        view {
                templateRootPaths >
                templateRootPaths {
                        0 = EXT:news/Resources/Private/Templates/
                        1 = fileadmin/template/Extensions/news/Templates/
                }
                partialRootPaths >
                partialRootPaths {
                        0 = EXT:news/Resources/Private/Partials/
                        1 = fileadmin/template/Extensions/news/Partials/
                }
                layoutRootPaths >
                layoutRootPaths {
                        0 = EXT:news/Resources/Private/Layouts/
                        1 = fileadmin/template/Extensions/news/Layouts/
                }
        }
        settings {
            orderBy = datetime
            orderDirection = desc
            orderByRespectTopNews = 0
            orderByAllowed = uid,title,teaser,author,tstamp,crdate,datetime  
        }
}



temp.aktuelles_datum = TEXT
temp.aktuelles_datum {
  data = date : U
  strftime = %d.%m.%Y
}

temp.aktuelle_zeit = TEXT
temp.aktuelle_zeit {
  data = date : U
  strftime = %H:%M
}

plugin.tx_thmailformplus_pi1.markers.date < temp.aktuelles_datum
plugin.tx_thmailformplus_pi1.markers.time < temp.aktuelle_zeit
plugin.tx_thmailformplus_pi1.fieldConf {
  email {
      errorCheck = email
  }
}

# PAGE Objekt
# ***************************************************
page = PAGE
page.config.index_enable = 1

page.headerData.5 = TEXT
page.headerData.5.field = subtitle // title
page.headerData.5.wrap = <title> Aures&nbsp;&#124;&nbsp;|</title>

page.meta.keywords.data = DB:pages:1:keywords
page.meta.keywords.override.field = keywords

page.meta.description.data = DB:pages:1:description
page.meta.description.override.field = description

page.meta.abstract.data = DB:pages:1:abstract
page.meta.abstract.override.field = abstract

page.meta {
  Viewport = width=device-width, initial-scale=1
}

page.includeCSS {
  bootstrap = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css
  bootstrap.external = 1

  file10 = fileadmin/template/css/screen.css
  file10.media = screen
}

page.headerData = COA
page.headerData.10 = TEXT
page.headerData.10.value = <script type="text/javascript" src="//code.jquery.com/jquery-latest.min.js"></script>

page.headerData.11 = TEXT
page.headerData.11.value = <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>

page.headerData.12 = TEXT
page.headerData.12.value = <script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

page.headerData.15 = TEXT
page.headerData.15.value = <script type="text/javascript" src="fileadmin/template/js/downloadbox.js"></script>

page.headerData.16 = TEXT
page.headerData.16.value = <script type="text/javascript" src="fileadmin/template/js/jquery.jcarousel.min.js"></script>

page.headerData.17 = TEXT
page.headerData.17.value (
<!--[if IE]>
  <link rel="stylesheet" type="text/css" href="fileadmin/template/css/ie-only.css" />
<![endif]-->
<meta name="google-site-verification" content="nh32Mqhxy_-YaC1xPRCm74stU05M9JW68m8OraN7wew" />
)

page.headerData.18 = TEXT
page.headerData.18.value = <script type="text/javascript" src="fileadmin/template/js/cleartype.js"></script>

page.headerData.19 = TEXT
page.headerData.19.value (
<script>
var gaProperty = 'UA-18906908-1';
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
        window[disableStr] = true;
}
function gaOptout() {
        document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        window[disableStr] = true;
        alert('Das Tracking durch Google Analytics wurde in Ihrem Browser für diese Website deaktiviert.');
}
</script>
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-18906908-1', 'auto');
ga('set', 'anonymizeIp', true);
ga('send', 'pageview');
</script>
)

page.shortcutIcon = fileadmin/template/media/favicon.gif

page.10 = TEMPLATE

page.10 {

   template = FILE

   template.file =  fileadmin/template/template_startseite.html

   workOnSubpart = DOCUMENT_BODY
  
   tmp.headertitle = TEXT
   tmp.headertitle.data = leveltitle:1
  
   marks.HEADER = TEXT
   marks.HEADER.data = levelmedia:-1, slide
   marks.HEADER.listNum = 0
   marks.HEADER.wrap = <img src="uploads/media/|" class="img-responsive" />
   
   marks.HEADER >
   marks.HEADER = COA
   marks.HEADER.10 = TEXT
   marks.HEADER.10.data = levelmedia:-1, slide
   marks.HEADER.10.listNum = 0
   marks.HEADER.10.wrap = <img src="uploads/media/|" class="img-responsive" />

   // Typo3 6.2 Änderung
   marks.HEADER >
   marks.HEADER = COA
   marks.HEADER {
     10 = IMG_RESOURCE
     10 {
        file {
           import.data = levelmedia:-1, slide
           treatIdAsReference = 1
           import.listNum = 0
       }
       stdWrap.wrap = <img src="|" class="img-responsive" />
     }
   }
   
   marks.HEADER.20 = TEXT
   marks.HEADER.20.data = leveltitle:1
   marks.HEADER.20.wrap = <div class="hidden"><span>|</span></div>
    
   marks.DOWNLOADBOX = PHP_SCRIPT_EXT
   marks.DOWNLOADBOX.file = fileadmin/template/php/displaybox.php
  
   marks.SUCHE >
   marks.SUCHE < plugin.tx_macinasearchbox_pi1
   marks.SEARCHPID < 52
  
   subparts.INHALT < styles.content.get
  
   subparts.FOOTER = TEXT
   subparts.FOOTER.value (
   <p>
     <strong>Aures Finanz AG & Cie. KG</strong> Versicherungsmakler Finanzmakler | Reichspr&auml;sidentenstr. 21-25 | 45470 M&uuml;lheim a. d. Ruhr | T 02 08/810 820 | F 02 08/810 820 20 | info@aures.ag
   </p>
   <p>
     <strong>Aures Finanz AG & Cie. KG</strong> Versicherungsmakler Finanzmakler | H&ouml;finger Str. 16 | 70499 Stuttgart | T 07 11/88 20 07 30 | F 07 11/88 20 07 39 | info@aures.ag
   </p>
   )
  
   subparts.FOOTER_LINKS >
   subparts.FOOTER_LINKS = FILE
   subparts.FOOTER_LINKS.file = fileadmin/template/footer_links.html
  
   subparts.FOOTER_RECHTS >
   subparts.FOOTER_RECHTS = FILE
   subparts.FOOTER_RECHTS.file = fileadmin/template/footer_rechts.html
  
   subparts.SOCIAL_BOOKMARKS >
   subparts.SOCIAL_BOOKMARKS = FILE
   subparts.SOCIAL_BOOKMARKS.file = fileadmin/template/social_bookmarks.html
  
   subparts.DOWNLOADS >
   subparts.DOWNLOADS = CONTENT
   subparts.DOWNLOADS {
       # Die Tabelle aus der gelesen wird (Die einzigen zugelassenen Tabellen sind "pages" oder Tabellen mit dem Präfix "tt_","tx_","ttx_","fe_" oder "user_")
    table=tt_content

    select.orderBy = sorting
    select.where=colPos=3
   }

   subparts.DOWNLOADS.stdWrap.wrap = <div class="col-xs-12 downloads">|</div>
   subparts.DOWNLOADS.stdWrap.required = 1
  
   subparts.INHALT_MITTE >
   subparts.INHALT_MITTE = CONTENT
   subparts.INHALT_MITTE {
       # Die Tabelle aus der gelesen wird (Die einzigen zugelassenen Tabellen sind "pages" oder Tabellen mit dem Präfix "tt_","tx_","ttx_","fe_" oder "user_")
    table=tt_content

    select.orderBy = sorting
    select.where=colPos=4
   }

   subparts.INHALT_MITTE.stdWrap.wrap = <div class="col-xs-12 flexcontainer">|</div>
   subparts.INHALT_MITTE.stdWrap.required = 1
/* ---------------------------------------------------------------
 * Twitter bootstrap style navbar dropdown (with responsive mode)
 */
subparts.NAVIGATION = COA
subparts.NAVIGATION.wrap = |
subparts.NAVIGATION {

    # Responsive Navbar Part 1
    10 = TEXT
    10 {
        # fontawesome
        # value = <span class="fa fa-bars"></span>
        # glyphicon from bootstrap
        value = <span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
        wrap = <div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mainnavbar">|</button></div>
    }

    # Responsive Navbar Part 2: Place all navbar contents you want collapsed withing .navbar-collapse.collapse.
    20 = HMENU
    20.wrap = <div class="collapse navbar-collapse" id="mainnavbar"><ul class="nav navbar-nav">|</ul><ul class="nav navbar-nav "><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-search"></i></a><ul class="dropdown-menu" style="padding:12px;"><form class="form-inline" action="/suche/" method="post"><div class="input-group"><input name="tx_indexedsearch[sword]" type="text" class="form-control" placeholder="Suchbegriff..."><input type="hidden" name="tx_indexedsearch[_sections]" value="0" /><input type="hidden" name="tx_indexedsearch[pointer]" value="0" /><input type="hidden" name="tx_indexedsearch[ext]" value="0" /><input type="hidden" name="tx_indexedsearch[lang]" value="0" /><span class="input-group-btn"><button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button></span></div></form></ul></li></ul></div>
    20 {
        special.value = 0
        maxItems = 7
        entryLevel = 0
        #excludeUidList = 11,12
        1 = TMENU
        1 {
            wrap = |
            expAll = 1

            NO = 1
            NO.allWrap >
            NO.wrapItemAndSub = <li>|</li>
            CUR = 1
            CUR < .NO
            CUR.wrapItemAndSub = <li class="active">|</li>
            ACT = 1
            ACT < .CUR

            # Dropdown menu
            IFSUB = 1
            IFSUB < .NO
            IFSUB.wrapItemAndSub = <li class="dropdown">|</li>
            IFSUB.ATagParams = class="dropdown-toggle" role="button" data-toggle="dropdown" data-target="#"
            IFSUB.ATagBeforeWrap = 1
            IFSUB.stdWrap.wrap = |<b class="caret"></b>
            CURIFSUB = 1
            CURIFSUB < .IFSUB
            CURIFSUB.wrapItemAndSub = <li class="dropdown active">|</li>
            ACTIFSUB = 1
            ACTIFSUB < .CURIFSUB
        }


        2 = TMENU
        2 {
            wrap = <ul class="dropdown-menu  multi-level" role="menu">|</ul>
            expAll = 1

            NO = 1
            NO.allWrap >
            NO.wrapItemAndSub = <li>|</li>
            CUR = 1
            CUR < .NO
            CUR.wrapItemAndSub = <li class="active">|</li>
            ACT = 1
            ACT < .CUR

            IFSUB = 1
            IFSUB < .NO
            IFSUB.wrapItemAndSub = <li class="dropdown-submenu">|</li>
            IFSUB.ATagParams = class="dropdown-toggle" role="button" data-toggle="dropdown" data-target="#"
            IFSUB.ATagBeforeWrap = 1
            IFSUB.stdWrap.wrap = |

            CURIFSUB = 1
            CURIFSUB < .IFSUB
            CURIFSUB.wrapItemAndSub = <li class="dropdown-submenu active">|</li>

            ACTIFSUB = 1
            ACTIFSUB < .CURIFSUB

            SPC = 1
            SPC.doNotLinkIt = 1
            SPC.doNotShowLink = 1
            SPC.allWrap = <li class="divider"></li>
        }

        3 = TMENU
        3 {
            wrap = <ul class="dropdown-menu" role="menu">|</ul>
            expAll = 1

            NO = 1
            NO.allWrap >
            NO.wrapItemAndSub = <li>|</li>
            CUR = 1
            CUR < .NO
            CUR.wrapItemAndSub = <li class="active">|</li>
            ACT = 1
            ACT < .CUR

            IFUSB < .1.IFSUB
            CURIFSUB < .1.CURIFSUB
            ACTIFSUB < .1.ACTIFSUB

            SPC = 1
            SPC.doNotLinkIt = 1
            SPC.doNotShowLink = 1
            SPC.allWrap = <li class="divider"></li>
        }

        4 < .3
        # no submenus anymore
        4.IFSUB >
        4.CURIFSUB >
        4.ACTIFSUB >
    }
}
  
   subparts.INHALT_RECHTS = CONTENT
   subparts.INHALT_RECHTS {
       # Die Tabelle aus der gelesen wird (Die einzigen zugelassenen Tabellen sind "pages" oder Tabellen mit dem Präfix "tt_","tx_","ttx_","fe_" oder "user_")
    table=tt_content

    select.orderBy = sorting
    select.where=colPos=2
   }
  
  subparts.INHALT_LINKS = CONTENT
   subparts.INHALT_LINKS {
       # Die Tabelle aus der gelesen wird (Die einzigen zugelassenen Tabellen sind "pages" oder Tabellen mit dem Präfix "tt_","tx_","ttx_","fe_" oder "user_")
    table=tt_content

    select.orderBy = sorting
    select.where=colPos=1
   }
}

[globalVar=TSFE:page|layout=0]
page.10.template.file= fileadmin/template/template_standard-folgeseite.html
[global]

[globalVar=TSFE:page|layout=1]
page.10.template.file= fileadmin/template/template_flexible-content.html
[global]

[globalVar=TSFE:page|layout=2]
page.10.template.file= fileadmin/template/template_startseite.html
[global]

[globalVar=TSFE:page|layout=3]
page.10.template.file= fileadmin/template/template_downloadliste.html
[global]

[globalVar=TSFE:page|layout=4]
page.10.template.file= fileadmin/template/template_news_einzelansicht.html
[global]

[globalVar=TSFE:page|layout=5]
page.10.template.file= fileadmin/template/template_formular.html
[global]

[globalVar=TSFE:page|layout=6]
page.10.template.file= fileadmin/template/template_profil.html
[global]

[globalVar=TSFE:page|layout=7]
page.10.template.file= fileadmin/template/template_suchergebnis.html
[global]

[globalVar=TSFE:page|layout=8]
page.10.template.file= fileadmin/template/template_newsarchiv.html
[global]

[globalVar=TSFE:page|layout=9]
page.10.template.file= fileadmin/template/template_teilnahmebedingungen.html
[global]


