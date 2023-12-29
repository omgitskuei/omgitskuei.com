import 'server-only'
 
const dictionaries = {
  enUS: () => import("../../dictionaries/en-US.json").then((module) => module.default),
  zhHANT: () => import("../../dictionaries/zh-HANT.json").then((module) => module.default),
  zhHANS: () => import("../../dictionaries/zh-HANS.json").then((module) => module.default),
  wip: () => import("../../dictionaries/underconstruction.json").then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()


// // import { useRouter } from "next/router.js";

// export const translator = () => {
//   interface DictionaryJSON {
//     navbar: {
//       home: string,
//       resume: string,
//       portfolio: string,
//       about: string,
//       contact: string,
//       settings: string
//     },
//     settings: {
//       language: string,
//       enUS: string,
//       zhHANT: string,
//       zhHANS: string,
//       theme: string,
//       light: string,
//       dark: string,
//       font: string,
//       sansserif: string,
//       serif: string,
//       fontsize: string,
//     }
//   }

//   function getDictionary(key: string | undefined):DictionaryJSON {
//     let dictSrc = dictEn;
//     // https://stackoverflow.com/questions/4892372/language-codes-for-simplified-chinese-and-traditional-chinese
//     switch (key) {
//       case 'en' || 'en-US':
//         dictSrc = dictEn;
//         break;
//       case 'zh_HANT':
//         dictSrc = dictZhHant;
//         break;
//       case 'zh_HANS':
//         dictSrc = dictZhHans;
//         break;
//       default:
//         dictSrc = dictWIP;
//         break;
//     }
//     return dictSrc;
//   }
//   // let routes = useRouter();
//   // console.log("dictionaries.ts returning dictionary for ", routes.locale);
//   // return getDictionary(routes.locale);
// };