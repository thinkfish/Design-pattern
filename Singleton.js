
/**
 * 如果一个类负责连接数据库的线程池，日志记录等逻辑，此时需要单例模式来保证对象不被重复创建，以达到降低开销的目的
 */
const Singleton = function(){}

Singleton.getInstance = (function(){
    let instance = null

    return function(){
        if(!instance){
            instance = new Singleton()
        }
        return instance
    }
})();