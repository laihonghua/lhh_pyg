var kits = {};

/**    
 * 
 * 
 */
kits.loadData = function (key) {

    let json = localStorage.getItem(key)
    return JSON.parse(json) || [];
}















kits.saveData = function (key, data) {

    let json = JSON.stringify(data)
    localStorage.setItem(key, json)
}