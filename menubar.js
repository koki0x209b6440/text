
//右側タイトル羅列メニュー関連。開閉メモの保存機能辺りもちょっと。
var titleindex=1;

function setTitle(title,mtitle)
{
  var titlehtmlstr=" ";
    if(titleindex>1)
    {
      titlehtmlstr=titlehtmlstr+'</pre>';
      titlehtmlstr=titlehtmlstr+'</a></div>';
    }
    titlehtmlstr=titlehtmlstr+'<div class="test" id="txt'+titleindex+'"><a name="txt'+titleindex+'">';
    titleindex=titleindex+1;
    titlehtmlstr=titlehtmlstr+'<pre>';
    titlehtmlstr=titlehtmlstr+'<h1>'+title+'</h1>';
  document.write(titlehtmlstr+'<br>');
  document.write('<a href="#" onclick="window.scrollBy(0,screen.height*(70+Math.random()*100));return false;">序盤(？)をスキップ</a><br>');

  menustr.push(mtitle);
}




  $(function(){
    var scrollBottom;
    var scrollFlag=0;
    var p_scrollFlag=-1;
    var htmlstr="<br>";

    //本文中に打ち込んだタイトル(タグ)等を利用して、画面右に動的に目次生成。ツールバー的な挙動は、他の場所でのposition;fixed;このたったひとつの設定が大活躍。
    //また、現在位置を把握できる機能も目次に搭載。scrollFlagとp_のうんぬん。
    function getScrollTop(){
      scrollBottom = $(window).scrollTop() + $(window).height()/2;
      for(var i=0; i<menustr.length; i++)
      {
        if(scrollBottom >= $("#txt"+i).offset().top)  scrollFlag=i;
      }
      if( $(window).scrollTop()< $(window).height()/10){scrollFlag=0; }
      <!--ここからメニュー本文-->
      if(scrollFlag!=p_scrollFlag)
      {
        htmlstr="<br>|[menu]<br>";
        for(var i=0; i<menustr.length; i++)
        {
          if(scrollFlag==i)htmlstr=htmlstr+'|<a href="#txt'+i+'"><FONT color="red">'+menustr[i]+'<br></FONT></a>';
          else htmlstr=htmlstr+'|<a href="#txt'+i+'">'+menustr[i]+'<br></a>';
        }
        p_scrollFlag=scrollFlag;
      }
      $("#menubar").html(htmlstr);
    }
    $(window).on("load scroll resize", getScrollTop);
        //自動メモ機能(本文のどこかの位置で、memoタグの……入力枠？を設置して、以下が自動発動)
        /*ページを開いたときにローカルストレージの中にでータがあれば読み込む*/
        memosaveSystem();
  });