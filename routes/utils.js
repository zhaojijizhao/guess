var collection = require('../model/collection');

//增删改查
function add(type, content, callback, res){
  var model = new collection[type](content);
  model.save(function(err){
    if(err){
      res.json(err,500);
    }else{
      if(callback){
        callback();
      }
    }
  });
}
function remove(type, id, callback, res){
  collection[type].findById(id,
    function(err,data){
      if(err){
        res.json(err,500);
      }else{
        data.remove(function(err){
          if(err){
            res.json(err,500);
          }else{
            if(callback){
              callback();
            }
          }
        });
      }
    }
  );
}
function change(type, id, content, callback,res){
  collection[type].findById(id, function(err,data){
    if(err){
      res.json(err,500);
    }else{
      data.set(content);
      data.save(function(err){
        if(err){
          res.json(err,500);
        }else{
          if(callback){
            callback();
          }
        }
      });
    }
  });
}
function search(type, param, callback, res){
  collection[type].find(param,function(err,data){
      if(err){
        res.json(err,500);
      }else{
        if(callback){
          callback(data);
        }
      }
    }
  );
}

//生成cookie
//发送短信
//自动运算num

var utils = {
  add: add,
  remove: remove,
  change: change,
  search: search
}

module.exports = utils;