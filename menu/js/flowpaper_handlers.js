jQuery(function(){jQuery('#documentViewer').bind('onExternalLinkClicked',function(e,link,pageNumber){if(link.indexOf('mailto:')==0){window.parent.location.href=link;}else if(!FLOWPAPER.LinkTarget||(FLOWPAPER.LinkTarget&&FLOWPAPER.LinkTarget=='New window')){if(window.eb&&window.eb.platform&&window.eb.platform.touchonlydevice){if(window!=window.top){window.parent.location.href=link;}else{document.location.href=link;}}else{var newWindow=window.open(link,'_flowpaper_exturl_'+new Date().getTime());if(FLOWPAPER.blockedNewWindow(newWindow)){document.location.href=link;}}}else if(FLOWPAPER.LinkTarget){if(FLOWPAPER.LinkTarget=='Full window'){window.parent.location.href=link;}
if(FLOWPAPER.LinkTarget=='Same window'){window.location.href=link;}}
TrackFlowPaperEvent(jQuery(this).data('TrackingNumber'),jQuery(this).data('TrackingDocument'),'External Link Clicked',link,null);});jQuery('#documentViewer').bind('onVideoStarted',function(e,VideoUrl,PageNumber){TrackFlowPaperEvent(jQuery(this).data('TrackingNumber'),jQuery(this).data('TrackingDocument'),'Video Started',VideoUrl,PageNumber);});jQuery('#documentViewer').bind('onAudioStarted',function(e,AudioUrl,PageNumber){TrackFlowPaperEvent(jQuery(this).data('TrackingNumber'),jQuery(this).data('TrackingDocument'),'Audio Started',AudioUrl,PageNumber);});jQuery('#documentViewer').bind('onDownloadDocument',function(e,pdfUrl){TrackFlowPaperEvent(jQuery(this).data('TrackingNumber'),jQuery(this).data('TrackingDocument'),'Document Downloaded',pdfUrl,null);});jQuery('#documentViewer').bind('onProgress',function(e,loadedBytes,totalBytes){});jQuery('#documentViewer').bind('onDocumentLoading',function(e){});jQuery('#documentViewer').bind('onPageLoading',function(e,pageNumber){});jQuery('#documentViewer').bind('onCurrentPageChanged',function(e,pagenum){if(jQuery(this).data('TrackingNumber')&&jQuery(this).data('TrackingNumber').indexOf('F-')!=0){var trackingDoc=jQuery(this).data('TrackingDocument');var pagelocation=(document.location.pathname.indexOf('.html')>-1?document.location.pathname.substr(0,document.location.pathname.lastIndexOf('.html'))+'/':document.location.pathname)+'#page='+pagenum;if(jQuery(this).data('TrackingNumber').indexOf('G-')==0){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',jQuery(this).data('TrackingNumber'));window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('event','page_view',{page_location:pagelocation,'send_to':jQuery(this).data('TrackingNumber')});}}});jQuery('#documentViewer').bind('onDocumentLoaded',function(e,totalPages){});jQuery('#documentViewer').bind('onPageLoaded',function(e,pageNumber){});jQuery('#documentViewer').bind('onErrorLoadingPage',function(e,pageNumber){});jQuery('#documentViewer').bind('onDocumentLoadedError',function(e,errMessage){});jQuery('#documentViewer').bind('onDocumentPrinted',function(e,numPages){});jQuery('#documentViewer').bind('onPasswordNeeded',function(e,updatePassword){});});