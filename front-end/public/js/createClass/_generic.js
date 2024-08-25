import { breakPoints } from "../mappings/_variables.js";

export const getClassDefinition = (properties = [], vals = [], className = '') => {
  if (!properties.length || !vals.length) return "";
  return (
    `.${className} {
    ${properties.map((el, idx) => `${idx !== 0 ? `\t` : ""}${el}: ${vals[idx] ? vals[idx] : processValuePart(vals[idx])}`).join(";\n")};
}\n`)
}

export const getCompleteClassDefinition = (lengthWithoutMediaQuery = 2, classToBuild = "", classParts = []) => {
  if (!classToBuild) return "";
  return classParts.length === lengthWithoutMediaQuery ? classToBuild : addMediaQuery(classToBuild, classParts);
}

const addMediaQuery = (classToPut = "", classParts = []) => {

  if (!classParts || !classParts.length || !classParts[1]) return "";

  const isMax = !/^(min)/.test(classParts[1]);
  const width = breakPoints[classParts[1].split("_").at(-1)];
  return (
    `@media (${isMax ? "max-width" : "min-width"}: ${width}px) {
  ${classToPut.replace(/\n$/, "")}
}\n`);
}

export const addValueToPropNVals = (properties = [], vals = [], valsToAdd = [], isImportant = false) => {
  if (valsToAdd[0]) {
    properties.push(valsToAdd[0]);
    vals.push(`${valsToAdd[1]} ${isImportant ? "!important" : ""}`);
  }
}

export const getFormattedAbsOrPercentageVal = (val = "") => {
  return !isNaN(Number(val)) ? val + "%" : val;
}

export const processValuePart = (val = "", mappingObj = null, hasNeedToCallGetFormattedVal = false) => {

  const impString = /_imp$/.test(val) ? " !important" : "";
  val = val.replace(/_imp$/, "");
  let result = "";

  if (mappingObj) result = mappingObj[val];

  if (!result) {
    if (/^v/.test(val)) {
      return `var(-${val.replace(/^v/, "").replace(/[A-Z]/g, match => '-' + match.toLowerCase())})${impString}`;
    }
    else if (hasNeedToCallGetFormattedVal) {
      return getFormattedAbsOrPercentageVal(val) + impString;
    }
    else return val + impString;

  }

  return result;
}