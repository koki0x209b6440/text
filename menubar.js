
//�E���^�C�g�����񃁃j���[�֘A�B�J�����̕ۑ��@�\�ӂ��������ƁB
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
  document.write('<a href="#" onclick="window.scrollBy(0,screen.height*(70+Math.random()*100));return false;">����(�H)���X�L�b�v</a><br>');

  menustr.push(mtitle);
}




  $(function(){
    var scrollBottom;
    var scrollFlag=0;
    var p_scrollFlag=-1;
    var htmlstr="<br>";

    //�{�����ɑł����񂾃^�C�g��(�^�O)���𗘗p���āA��ʉE�ɓ��I�ɖڎ������B�c�[���o�[�I�ȋ����́A���̏ꏊ�ł�position;fixed;���̂������ЂƂ̐ݒ肪�劈��B
    //�܂��A���݈ʒu��c���ł���@�\���ڎ��ɓ��ځBscrollFlag��p_�̂���ʂ�B
    function getScrollTop(){
      scrollBottom = $(window).scrollTop() + $(window).height()/2;
      for(var i=0; i<menustr.length; i++)
      {
        if(scrollBottom >= $("#txt"+i).offset().top)  scrollFlag=i;
      }
      if( $(window).scrollTop()< $(window).height()/10){scrollFlag=0; }
      <!--�������烁�j���[�{��-->
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
        //���������@�\(�{���̂ǂ����̈ʒu�ŁAmemo�^�O�́c�c���͘g�H��ݒu���āA�ȉ�����������)
        /*�y�[�W���J�����Ƃ��Ƀ��[�J���X�g���[�W�̒��ɂŁ[�^������Γǂݍ���*/
        memosaveSystem();
  });