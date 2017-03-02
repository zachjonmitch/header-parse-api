export class Parser {
    static parseRequest(req) {
        return {
            ipaddress: Parser.getIP(req.connection.remoteAddress),
            language: Parser.getLanguage(req.headers["accept-language"]),
            software: Parser.getOS(req.headers["user-agent"])
        }
    }
    static getIP(remoteAddress) {
        let isV6 = remoteAddress.indexOf(':') >= 0;
        return isV6 ? remoteAddress.split(':').reverse()[0] : remoteAddress;
    }
 
    static getOS(userAgent) {
        let osInfo = userAgent.split(/[\(\)]/)[1];
        return osInfo.trim();
    }
 
    static getLanguage(acceptLanguage) {
        return acceptLanguage.split(',')[0].trim();
    }
}