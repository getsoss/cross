import { parseStringPromise } from "xml2js";

export const XML2JSON = async (xml_response) => {
  if (xml_response === undefined) {
    console.log("[NULL] 변환할 XML 데이터가 없음");
  }
  try {
    const xmlString = await xml_response.text();
    const jsonResult = await parseStringPromise(xmlString);
    console.log(jsonResult);
    return jsonResult;
  } catch (error) {
    console.log(`[ERROR] XML데이터를 JSON으로 변환 실패 : ${error}`);
  }
};
