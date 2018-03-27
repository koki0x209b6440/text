var readPos=0;
function memobarETCwork( ischecked ) {
  //�J�����̋����Ɋ֌W�B�X�}�z�Ŏ����{�����Ƀ����𗘗p�����Ƃ��A�����̃y�[�W�g�b�v�ɋ����X�N���[�������Ă��܂��B�Ȃ̂ŁA�����������Ƃ��A���O�Ɍ��Ă��������̈ʒu�֋����ړ������B
  if( ischecked == true ) {
      // �`�F�b�N����������
      if(readPos == 0)readPos=$(window).scrollTop();
  }
  else {
      if(readPos != 0) $(window).scrollTop(readPos);
      readPos=0;
  }
}
function memobarETCENDwork(){
  if(readPos != 0) $(window).scrollTop(readPos);
  readPos=0;
  document.getElementById("memobox").checked = false;
}





function memobarETCworkll( ischecked ) {
  //�J�����̋����Ɋ֌W�B�X�}�z�Ŏ����{�����Ƀ����𗘗p�����Ƃ��A�����̃y�[�W�g�b�v�ɋ����X�N���[�������Ă��܂��B�Ȃ̂ŁA�����������Ƃ��A���O�Ɍ��Ă��������̈ʒu�֋����ړ������B
  if( ischecked == true ) {
      // �`�F�b�N����������
      if(readPos == 0)readPos=$(window).scrollTop();
  }
  else {
      if(readPos != 0) $(window).scrollTop(readPos);
      readPos=0;
  }
}
function memobarETCENDworkll(){
  if(readPos != 0) $(window).scrollTop(readPos);
  readPos=0;
  document.getElementById("memoboxll").checked = false;
}





function memobarETCworklll( ischecked ) {
  //�J�����̋����Ɋ֌W�B�X�}�z�Ŏ����{�����Ƀ����𗘗p�����Ƃ��A�����̃y�[�W�g�b�v�ɋ����X�N���[�������Ă��܂��B�Ȃ̂ŁA�����������Ƃ��A���O�Ɍ��Ă��������̈ʒu�֋����ړ������B
  if( ischecked == true ) {
      // �`�F�b�N����������
      if(readPos == 0)readPos=$(window).scrollTop();
  }
  else {
      if(readPos != 0) $(window).scrollTop(readPos);
      readPos=0;
  }
}
function memobarETCENDworklll(){
  if(readPos != 0) $(window).scrollTop(readPos);
  readPos=0;
  document.getElementById("memoboxlll").checked = false;
}








function readmarkerPosSave(){
  localStorage.setItem('readmarker',$(window).scrollTop() );
  getwReadmarker();
}
function readmarkerPosLoad(){
  var value = localStorage.getItem('readmarker');
  $(window).scrollTop(parseInt(value, 10) );
}
function getwReadmarker(){
  $("#rmIntDgb").html("[   "+localStorage.getItem('readmarker')+"   ]");
}

function memosaveSystem(){
        if(localStorage.getItem('memo')){
                /*�����̒������Ăяo�������̂ɒu��������*/
                $('#memo').val(localStorage.getItem('memo'));
        }
        $('#clear').click(function() {
                /*�����̒���������*/
                $('#memo').val('');
                /*���[�J���X�g���[�W�̒������폜*/
                localStrage.removeItem('memo');
                //localStrage.clear();
        });
        $('#save').click(function() {
                /*�����̒��ɋL�q�������̂����[�J���X�g���[�W�ɏ�������*/
              localStorage.setItem('memo',$('#memo').val());
                /*�u���E�U�̃R���\�[�����O�ɓǂݏo������*/
              console.log(localStorage.getItem('memo'));
        });
        /*���莞�Ԃ��ƂɎ����ۑ������ݒ��i�����֐�:�֐�����()�ň͂ݑS�̂𖼑O�Ƃ��Ď��s�j*/
        (function autoSave() {
            /*�����̒��g����������*/
            localStorage.setItem('memo',$('#memo').val());
            /*�������񂾂Ƃ��Ɍv2�b���b�Z�[�W���\������*/
            /*$('#message').show(1000).hide(1000);*/
            /*�������g�������̕b�����ƂɌJ���Ԃ��Ăяo��*/
            setTimeout(autoSave, 10000);
        })();
        /*�L�[���͂����x�Ɏ����ۑ��������ݒ�*/
        $('#memo').bind('keyup',function(){
            localStorage.setItem('memo',$('#memo').val());
        });





        if(localStorage.getItem('memoll')){
                /*�����̒������Ăяo�������̂ɒu��������*/
                $('#memoll').val(localStorage.getItem('memoll'));
        }
        $('#clear').click(function() {
                /*�����̒���������*/
                $('#memoll').val('');
                /*���[�J���X�g���[�W�̒������폜*/
                localStrage.removeItem('memoll');
                //localStrage.clear();
        });
        $('#save').click(function() {
                /*�����̒��ɋL�q�������̂����[�J���X�g���[�W�ɏ�������*/
              localStorage.setItem('memoll',$('#memoll').val());
                /*�u���E�U�̃R���\�[�����O�ɓǂݏo������*/
              console.log(localStorage.getItem('memoll'));
        });
        /*���莞�Ԃ��ƂɎ����ۑ������ݒ��i�����֐�:�֐�����()�ň͂ݑS�̂𖼑O�Ƃ��Ď��s�j*/
        (function autoSave() {
            /*�����̒��g����������*/
            localStorage.setItem('memoll',$('#memoll').val());
            /*�������񂾂Ƃ��Ɍv2�b���b�Z�[�W���\������*/
            /*$('#message').show(1000).hide(1000);*/
            /*�������g�������̕b�����ƂɌJ���Ԃ��Ăяo��*/
            setTimeout(autoSave, 10000);
        })();
        /*�L�[���͂����x�Ɏ����ۑ��������ݒ�*/
        $('#memoll').bind('keyup',function(){
            localStorage.setItem('memoll',$('#memoll').val());
        });






        if(localStorage.getItem('memolll')){
                /*�����̒������Ăяo�������̂ɒu��������*/
                $('#memolll').val(localStorage.getItem('memolll'));
        }
        $('#clear').click(function() {
                /*�����̒���������*/
                $('#memolll').val('');
                /*���[�J���X�g���[�W�̒������폜*/
                localStrage.removeItem('memolll');
                //localStrage.clear();
        });
        $('#save').click(function() {
                /*�����̒��ɋL�q�������̂����[�J���X�g���[�W�ɏ�������*/
              localStorage.setItem('memolll',$('#memolll').val());
                /*�u���E�U�̃R���\�[�����O�ɓǂݏo������*/
              console.log(localStorage.getItem('memolll'));
        });
        /*���莞�Ԃ��ƂɎ����ۑ������ݒ��i�����֐�:�֐�����()�ň͂ݑS�̂𖼑O�Ƃ��Ď��s�j*/
        (function autoSave() {
            /*�����̒��g����������*/
            localStorage.setItem('memolll',$('#memolll').val());
            /*�������񂾂Ƃ��Ɍv2�b���b�Z�[�W���\������*/
            /*$('#message').show(1000).hide(1000);*/
            /*�������g�������̕b�����ƂɌJ���Ԃ��Ăяo��*/
            setTimeout(autoSave, 10000);
        })();
        /*�L�[���͂����x�Ɏ����ۑ��������ݒ�*/
        $('#memolll').bind('keyup',function(){
            localStorage.setItem('memolll',$('#memolll').val());
        });
}
