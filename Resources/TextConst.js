var TEXT, setTT;
TEXT = {
  APPTITLE: "1 Week English",
  CATEGORY: ['writing', 'Reading', 'Listening', 'Speaking', 'Test'],
  TIME_ARRAY: ['朝', 'すき間', '夜'],
  TERM_ARRAY: ['5', '15', '30', '60', '120'],
  LISTTYPE: {
    SUPPORTER: 'サポーター',
    SUPPORTING: 'サポート中'
  },
  SUPPORT: "サポートする",
  SUPPORTING: "サポート中",
  ERROR_MESSAGE: {
    SERVER: 'server error'
  },
  NOTICE_SHARE: 'VAR0 is keep learning & share VAR1 Points! Let\'s get it! ',
  NOTICE_SUPPORT: 'VAR0 became your supporter.',
  NOTICE_LIKE: 'VAR0さんが、あなたの投稿にいいね！しました',
  CANCEL: "Cancel",
  CLOSE: "閉じる",
  ALREADY_LIKED: 'already_liked',
  CANCEL_LIKE: 'cancel_like',
  NOT_LIKE_YET: 'not_like_yet'
};
setTT = function(key, arg) {
  var count, i, regExp, str, text, _i, _len;
  text = TEXT[key];
  if (!arg) {
    return text;
  }
  count = 0;
  for (_i = 0, _len = arg.length; _i < _len; _i++) {
    i = arg[_i];
    str = "VAR" + count;
    regExp = new RegExp(str);
    text = text.replace(regExp, i);
    count++;
  }
  return text;
};