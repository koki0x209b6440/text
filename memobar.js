var readPos=0;
function memobarETCwork( ischecked ) {
  //開閉メモの挙動に関係。スマホで資料閲覧中にメモを利用したとき、資料のページトップに強制スクロールされてしまう。なので、メモを閉じたとき、直前に見ていた資料の位置へ強制移動する。
  if( ischecked == true ) {
      // チェックが入ったら
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
  //開閉メモの挙動に関係。スマホで資料閲覧中にメモを利用したとき、資料のページトップに強制スクロールされてしまう。なので、メモを閉じたとき、直前に見ていた資料の位置へ強制移動する。
  if( ischecked == true ) {
      // チェックが入ったら
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
  //開閉メモの挙動に関係。スマホで資料閲覧中にメモを利用したとき、資料のページトップに強制スクロールされてしまう。なので、メモを閉じたとき、直前に見ていた資料の位置へ強制移動する。
  if( ischecked == true ) {
      // チェックが入ったら
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










function memosaveSystem(){
        if(localStorage.getItem('memo')){
                /*メモの中味を呼び出したものに置き換える*/
                $('#memo').val(localStorage.getItem('memo'));
        }
        $('#clear').click(function() {
                /*メモの中味を消去*/
                $('#memo').val('');
                /*ローカルストレージの中味を削除*/
                localStrage.removeItem('memo');
                //localStrage.clear();
        });
        $('#save').click(function() {
                /*メモの中に記述したものをローカルストレージに書き込み*/
              localStorage.setItem('memo',$('#memo').val());
                /*ブラウザのコンソールログに読み出しする*/
              console.log(localStorage.getItem('memo'));
        });
        /*一定時間ごとに自動保存する設定（即時関数:関数名を()で囲み全体を名前として実行）*/
        (function autoSave() {
            /*メモの中身を書き込む*/
            localStorage.setItem('memo',$('#memo').val());
            /*書き込んだときに計2秒メッセージを表示する*/
            /*$('#message').show(1000).hide(1000);*/
            /*自分自身を一定の秒数ごとに繰り返し呼び出す*/
            setTimeout(autoSave, 10000);
        })();
        /*キー入力する度に自動保存される設定*/
        $('#memo').bind('keyup',function(){
            localStorage.setItem('memo',$('#memo').val());
        });





        if(localStorage.getItem('memoll')){
                /*メモの中味を呼び出したものに置き換える*/
                $('#memoll').val(localStorage.getItem('memoll'));
        }
        $('#clear').click(function() {
                /*メモの中味を消去*/
                $('#memoll').val('');
                /*ローカルストレージの中味を削除*/
                localStrage.removeItem('memoll');
                //localStrage.clear();
        });
        $('#save').click(function() {
                /*メモの中に記述したものをローカルストレージに書き込み*/
              localStorage.setItem('memoll',$('#memoll').val());
                /*ブラウザのコンソールログに読み出しする*/
              console.log(localStorage.getItem('memoll'));
        });
        /*一定時間ごとに自動保存する設定（即時関数:関数名を()で囲み全体を名前として実行）*/
        (function autoSave() {
            /*メモの中身を書き込む*/
            localStorage.setItem('memoll',$('#memoll').val());
            /*書き込んだときに計2秒メッセージを表示する*/
            /*$('#message').show(1000).hide(1000);*/
            /*自分自身を一定の秒数ごとに繰り返し呼び出す*/
            setTimeout(autoSave, 10000);
        })();
        /*キー入力する度に自動保存される設定*/
        $('#memoll').bind('keyup',function(){
            localStorage.setItem('memoll',$('#memoll').val());
        });






        if(localStorage.getItem('memolll')){
                /*メモの中味を呼び出したものに置き換える*/
                $('#memolll').val(localStorage.getItem('memolll'));
        }
        $('#clear').click(function() {
                /*メモの中味を消去*/
                $('#memolll').val('');
                /*ローカルストレージの中味を削除*/
                localStrage.removeItem('memolll');
                //localStrage.clear();
        });
        $('#save').click(function() {
                /*メモの中に記述したものをローカルストレージに書き込み*/
              localStorage.setItem('memolll',$('#memolll').val());
                /*ブラウザのコンソールログに読み出しする*/
              console.log(localStorage.getItem('memolll'));
        });
        /*一定時間ごとに自動保存する設定（即時関数:関数名を()で囲み全体を名前として実行）*/
        (function autoSave() {
            /*メモの中身を書き込む*/
            localStorage.setItem('memolll',$('#memolll').val());
            /*書き込んだときに計2秒メッセージを表示する*/
            /*$('#message').show(1000).hide(1000);*/
            /*自分自身を一定の秒数ごとに繰り返し呼び出す*/
            setTimeout(autoSave, 10000);
        })();
        /*キー入力する度に自動保存される設定*/
        $('#memoll').bind('keyup',function(){
            localStorage.setItem('memolll',$('#memolll').val());
        });
}