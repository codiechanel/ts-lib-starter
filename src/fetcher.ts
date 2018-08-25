// export function get(url) {
//     console.log('hi')
//     var req = new XMLHttpRequest();
//     req.open("GET", url);
//     req.onload = function (e) {
//         if (req.readyState === 4) {
//             if (req.status >= 200 && req.status < 300) {
//                 console.log('great', JSON.parse(req.responseText));
//             } else {
//                 console.error(req.statusText);
//             }
//         }
//     };
//     req.send(null);
//
// }

let get = url => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
                // resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(null);
    });
};
export { get }
export default { get }