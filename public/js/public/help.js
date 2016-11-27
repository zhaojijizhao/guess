define(['jquery','underscore'],
  function($,_){
    function getEnv(){
      var host = location.host,
        env = 'dev';
      if(host.indexOf('localhost')>-1){
        env = 'dev';
      }
      if(host.search(/\w+\.\w+\.\w+\.\w+/)>-1){
        env = 'test';
      }
      if(host.indexOf(":")<0){
        env = 'product';
      }
      if(location.href.indexOf('file')>-1){
        env = 'static'
      }
      return env;
    }
    function getBaseUrl(str){
      switch(getEnv()){
        default:
        case 'static':
          return 'http://localhost:3000/api/' + str;
          break;
        case 'dev':
          return '/mock/' + str;
          break;
        case 'test':
          return '/api/' + str;
          // return '/mock/' + str.split('?',2)[0] + '.json';
          break;
        case 'product':
          return '/api/' + str;
          break;
      }
    }
    function getQueryParam(){
      var query = location.search.substr(1),
        queryArr = query.split("&"),
        result = {};
      for(var i in queryArr){
        result[queryArr[i].split('=')[0]]=queryArr[i].split('=')[1];
      }
      return result;
    }
    function ajax(param){
      _.map(param.data, function(v, k){
        param.data[k] = JSON.stringify(v);
      });
      $.ajax({
        url: param.url,
        type: param.type || 'post',
        dataType: 'json',
        data: param.data || {},
        success:function(result){
          param.success(result);
        },
        error:function(error){
          if(param.error){
            param.error(error);
          }else{
            alert( param.info + '失败');
          }
        }
      });
    }
    var helper={
      islogin:function(){
        return !!localStorage.getItem("guessuser");
      },
      setlogin:function(data){
        localStorage.setItem("guessuser",JSON.stringify(data));
      },
      getlogin:function(){
        return JSON.parse(localStorage.getItem("guessuser"));
      },
      deletelogin:function(){
        localStorage.removeItem("guessuser");
      },
      ajax: ajax,
      baseUrl:getBaseUrl,
      queryParam:getQueryParam
    };
    return helper;
});